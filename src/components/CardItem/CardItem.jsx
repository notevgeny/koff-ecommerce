import style from "./CardItem.module.scss";

import { API_URL } from "../../const";
import { Link } from "react-router-dom";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";

export const CardItem = ({ good }) => {
  const { id, price, name, images } = good;
  return (
    <article className={style.card}>
      <Link
        to={`/product/${id}`}
        className={style.link}
        aria-label={`ссылка-картинка на товар ${name}`}>
        <img
          className={style.cardImg}
          src={`${API_URL}${images[0]}`}
          alt={name}
        />
      </Link>
      <div className={style.info}>
        <strong className={style.title}>
          <Link
            to={`/product/${id}`}
            className={style.link}
            aria-label={`ссылка на товар ${name}`}>
            {name}
          </Link>
        </strong>
        <p className={style.price}>{price.toLocaleString()}&nbsp;₽</p>
      </div>
      <button
        className={style.cardBtn}
        aria-label="Кнопка добавления в корзину">
        В корзину
      </button>
      <FavoriteButton className={style.favorite} id={id} />
    </article>
  );
};
