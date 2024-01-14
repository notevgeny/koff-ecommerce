import { Container } from "../../views/Container/Container";

import style from "./Catalog.module.scss";

export const Catalog = () => (
  <nav className={style.catalog}>
    <Container className={style.container}>
      <ul className={style.list}>
        <li className={style.item}>
          <a
            className={`${style.link} ${style.linkActive}`}
            href=""
            aria-label="Категория Диваны">
            Диваны
          </a>
        </li>
        <li className={style.item}>
          <a className={style.link} href="" aria-label="Категория Шкафы">
            Шкафы
          </a>
        </li>
        <li className={style.item}>
          <a className={style.link} href="" aria-label="Категория Стулья">
            Стулья
          </a>
        </li>
        <li className={style.item}>
          <a className={style.link} href="" aria-label="Категория Тумбы">
            Тумбы
          </a>
        </li>
        <li className={style.item}>
          <a className={style.link} href="" aria-label="Категория Кровати">
            Кровати
          </a>
        </li>
        <li className={style.item}>
          <a className={style.link} href="" aria-label="Категория Столы">
            Столы
          </a>
        </li>
        <li className={style.item}>
          <a className={style.link} href="" aria-label="Категория Комоды">
            Комоды
          </a>
        </li>
        <li className={style.item}>
          <a className={style.link} href="" aria-label="Категория Матрасы">
            Матрасы
          </a>
        </li>
        <li className={style.item}>
          <a className={style.link} href="" aria-label="Категория Пуфики">
            Пуфики
          </a>
        </li>
        <li className={style.item}>
          <a className={style.link} href="" aria-label="Категория Стеллажи">
            Стеллажи
          </a>
        </li>
      </ul>
    </Container>
  </nav>
);
