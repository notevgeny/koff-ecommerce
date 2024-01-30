import style from "./Card.module.scss";
import { Container } from "../../views/Container/Container";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../store/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { CardInfo } from "./CardInfo/CardInfo";
import { CardSlider } from "./CardSlider/CardSlider";

import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import { ToggleCartButton } from "../ToggleCartButton/ToggleCartButton";

export const Card = () => {
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

  if (!product)
    return (
      <Container>
        <div>Продукт не найден, попробуйте позже</div>
      </Container>
    );

  return (
    <section>
      <Container className={style.container}>
        <h1 className={style.title}>{name}</h1>
        <div className={style.wrapper}>
          {images?.length ? (
            <CardSlider images={images} name={name} />
          ) : (
            <div>Загрузка изображений...</div>
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
        <div className={style.btns}>
          <ToggleCartButton className={style.orderBtn} id={product.id} />
          <FavoriteButton className={style.favorite} id={product.id} />
        </div>
      </Container>
    </section>
  );
};
