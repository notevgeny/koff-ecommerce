import style from "./CardItem.module.scss";

import { API_URL } from "../../const";
import { Link } from "react-router-dom";

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
      <button
        className={style.favorite}
        aria-label="Кнопка добавления в избранное">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none">
          <path
            d="M8.41334 13.8733C8.18667 13.9533 7.81334 13.9533 7.58667 13.8733C5.65334 13.2133 1.33334 10.46 1.33334 5.79332C1.33334 3.73332 2.99334 2.06665 5.04 2.06665C6.25334 2.06665 7.32667 2.65332 8 3.55998C8.67334 2.65332 9.75334 2.06665 10.96 2.06665C13.0067 2.06665 14.6667 3.73332 14.6667 5.79332C14.6667 10.46 10.3467 13.2133 8.41334 13.8733Z"
            fill="white"
            stroke="#1C1C1C"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </article>
  );
};
