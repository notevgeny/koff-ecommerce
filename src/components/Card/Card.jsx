import style from "./Card.module.scss";
import { Container } from "../../views/Container/Container";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../store/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { CardInfo } from "./CardInfo/CardInfo";
import { CardSlider } from "./CardSlider/CardSlider";

export const Card = () => {
  const [mainSwiper, setMainSwiper] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { productId } = useParams();

  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.product);

  const { article, name, price, images, characteristics } = product;

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [productId, dispatch]);

  if (loading)
    return (
      <Container>
        <div>Загрузка...</div>
      </Container>
    );

  if (error)
    return (
      <Container>
        <div>Ошибка: {error}</div>
      </Container>
    );

  return (
    <section>
      <Container className={style.container}>
        <h1 className={style.title}>{name}</h1>
        <div className={style.wrapper}>
          {images?.length ? (
            <CardSlider
              mainSwiper={mainSwiper}
              setMainSwiper={setMainSwiper}
              setThumbsSwiper={setThumbsSwiper}
              thumbsSwiper={thumbsSwiper}
              images={images}
              name={name}
            />
          ) : (
            ""
          )}
        </div>
        {!loading ? (
          <CardInfo
            price={price}
            article={article}
            characteristics={characteristics}
            loading={loading}
          />
        ) : (
          <div>Загрузка описания...</div>
        )}
      </Container>
    </section>
  );
};
