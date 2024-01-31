import { Link, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container } from "../../views/Container/Container";

import style from "./Breadcrumbs.module.scss";

export const Breadcrumbs = () => {
  const [searchParam] = useSearchParams();
  const category = searchParam.get("category");
  const data = useSelector((state) => state.product.product);

  if (category || data?.category) {
    return (
      <div className={style.breadcrumbs}>
        <Container>
          <ul className={style.list}>
            <li className={style.item}>
              <Link to="/">Главная</Link>
              <span className={style.separator}>&gt;</span>
            </li>
            <li className={style.item}>
              <Link to={`/category?category=${category || data?.category}`}>
                {category || data?.category}
              </Link>
              <span className={style.separator}>&gt;</span>
            </li>
            {data?.name && (
              <li className={style.item}>
                {data?.name}
                <span className={style.separator}>&gt;</span>
              </li>
            )}
          </ul>
        </Container>
      </div>
    );
  }

  return <div>Breadcrumbs</div>;
};
