import style from "./CartForm.module.scss";

export const CartForm = () => {
  return (
    <form action="" className={style.form}>
      <h2 className={style.subtitle}>Данные для доставки</h2>
      <fieldset className={style.fieldsetInput}>
        <input
          className={style.input}
          type="text"
          name="name"
          placeholder="Фамилия Имя Отчество"
        />
        <input
          className={style.input}
          type="text"
          name="phone"
          placeholder="Телефон"
        />
        <input
          className={style.input}
          type="email"
          name="email"
          placeholder="E-mail"
        />
        <input
          className={style.input}
          type="text"
          name="address"
          placeholder="Адрес доставки"
        />
        <textarea
          className={style.textarea}
          placeholder="Комментарий к заказу"
          name="comments"></textarea>
      </fieldset>
      <fieldset className={style.fieldsetRadio}>
        <legend className={style.legend}>Доставка</legend>
        <label className={style.radio}>
          <input
            className={style.radioInput}
            type="radio"
            name="deliveryType"
            value="delivery"
            defaultChecked
          />
          Доставка
        </label>
        <label className={style.radio}>
          <input
            className={style.radioInput}
            type="radio"
            name="deliveryType"
            value="pickup"
          />
          Самовывоз
        </label>
      </fieldset>
      <fieldset className={style.fieldsetRadio}>
        <legend className={style.legend}>Оплата</legend>
        <label className={style.radio}>
          <input
            className={style.radioInput}
            type="radio"
            name="paymentType"
            value="card"
            defaultChecked
          />
          Картой при получении
        </label>
        <label className={style.radio}>
          <input
            className={style.radioInput}
            type="radio"
            name="paymentType"
            value="cash"
          />
          Наличными при получении
        </label>
      </fieldset>
    </form>
  );
};
