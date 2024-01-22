import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../views/Container/Container";
import { fetchCategories } from "../../store/categories/categoriesSlice";

import style from "./Catalog.module.scss";
import { NavLink } from "react-router-dom";

export const Catalog = () => {
  const dispatch = useDispatch();

  const {
    categories,
    loading: loadingCategories,
    error: errorCategories,
  } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loadingCategories)
    return (
      <Container>
        <div>Загрузка категорий...</div>
      </Container>
    );

  if (errorCategories)
    return (
      <Container>
        <div>Произошла ошибка: {errorCategories}</div>
      </Container>
    );

  return (
    <nav className={style.catalog}>
      <Container className={style.container}>
        <ul className={style.list}>
          {categories.map((category, i) => (
            <li className={style.item} key={i}>
              <NavLink
                className={style.link}
                to={`/category?category=${category}`}
                aria-label={`Категория ${category}`}>
                {category}
              </NavLink>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
};
