import style from "../Card.module.scss";

import LikeSVG from "../../../assets/heart.svg?react";

export const CardInfo = ({ price, article, characteristics, loading }) => {
  return (
    <div className={style.info}>
      {!loading ? (
        <>
          <p className={style.price}>{price?.toLocaleString()}&nbsp;₽</p>
          <p className={style.article}>арт. {article}</p>
          <div className={style.chars}>
            <span className={style.subtitle}>Общие характеристики</span>
            <ul className={style.list}>
              {characteristics?.map((item, index) => (
                <li key={index} className={style.listItem}>
                  <span className={style.point}>{item[0]}</span>
                  <span className={style.value}>{item[1]}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={style.btns}>
            <button className={style.orderBtn}>В корзину</button>
            <button className={style.favorite}>
              <LikeSVG />
            </button>
          </div>
        </>
      ) : (
        <>
          <div>Загрузка данных...</div>
        </>
      )}
    </div>
  );
};
