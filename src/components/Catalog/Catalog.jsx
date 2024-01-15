import { Container } from "../../views/Container/Container";

import style from "./Catalog.module.scss";

export const Catalog = ({ categories }) => (
  <nav className={style.catalog}>
    <Container className={style.container}>
      <ul className={style.list}>
        {categories.map((category, i) => (
          <li className={style.item} key={i}>
            <a
              className={style.link}
              href={`/category?slug=${category}`}
              aria-label={`Категория ${category}`}>
              {category}
            </a>
          </li>
        ))}
      </ul>
    </Container>
  </nav>
);
