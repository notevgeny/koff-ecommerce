import style from "./Card.module.scss";
import { Container } from "../../views/Container/Container";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../store/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { SliderMain } from "./SliderMain/SliderMain";
import { SliderThumbnails } from "./SliderThumbnails/SliderThumbnails";
import { CardInfo } from "./CardInfo/CardInfo";

export const Card = () => {
  const [mainSwiper, setMainSwiper] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { productId } = useParams();

  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);

  const { article, name, price, images, characteristics } = product;

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [productId, dispatch]);

  return (
    <section>
      <Container className={style.container}>
        <h1 className={style.title}>{name}</h1>
        <div className={style.wrapper}>
          <div className={style.picture}>
            <SliderMain
              mainSwiper={mainSwiper}
              setMainSwiper={setMainSwiper}
              thumbsSwiper={thumbsSwiper}
              images={images}
              name={name}
            />
            <SliderThumbnails
              setThumbsSwiper={setThumbsSwiper}
              images={images}
            />
          </div>
          <CardInfo
            price={price}
            article={article}
            characteristics={characteristics}
          />
        </div>
      </Container>
    </section>
  );
};
