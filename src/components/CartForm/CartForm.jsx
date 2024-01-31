import { useDispatch, useSelector } from "react-redux";
import style from "./CartForm.module.scss";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { submitCartForm } from "../../store/formCart/formCartSlice";

export const CartForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const orderStatus = useSelector((state) => state.formCart);

  useEffect(() => {
    if (orderStatus.success) {
      navigate(`/order/${orderStatus.orderId}`);
    }
  }, [orderStatus, navigate]);

  const handleOnSubmit = (data) => {
    dispatch(submitCartForm(data));
  };

  return (
    <form
      className={style.form}
      id="orderForm"
      onSubmit={handleSubmit(handleOnSubmit)}>
      <h2 className={style.subtitle}>Данные для доставки</h2>
      <fieldset className={style.fieldsetInput}>
        <label>
          <input
            className={style.input}
            type="text"
            {...register("name", { required: true })}
            placeholder="Фамилия Имя Отчество"
          />
          {errors.name && <p className={style.error}>Это поле обязательно</p>}
        </label>
        <label>
          <input
            className={style.input}
            type="text"
            {...register("phone", { required: true })}
            placeholder="Телефон"
          />
          {errors.phone && <p className={style.error}>Это поле обязательно</p>}
        </label>
        <label>
          <input
            className={style.input}
            type="email"
            {...register("email", { required: true })}
            placeholder="E-mail"
          />
          {errors.email && <p className={style.error}>Это поле обязательно</p>}
        </label>
        <label>
          <input
            className={style.input}
            type="text"
            {...register("address", { required: true })}
            placeholder="Адрес доставки"
          />
          {errors.address && (
            <p className={style.error}>Это поле обязательно</p>
          )}
        </label>

        <textarea
          className={style.textarea}
          placeholder="Комментарий к заказу"
          {...register("comments")}></textarea>
      </fieldset>
      <fieldset className={style.fieldsetRadio}>
        <legend className={style.legend}>Доставка</legend>
        <label className={style.radio}>
          <input
            className={style.radioInput}
            type="radio"
            {...register("deliveryType")}
            value="delivery"
            defaultChecked
          />
          Доставка
        </label>
        <label className={style.radio}>
          <input
            className={style.radioInput}
            type="radio"
            {...register("deliveryType")}
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
            {...register("paymentType")}
            value="card"
            defaultChecked
          />
          Картой при получении
        </label>
        <label className={style.radio}>
          <input
            className={style.radioInput}
            type="radio"
            {...register("paymentType")}
            value="cash"
          />
          Наличными при получении
        </label>
      </fieldset>
    </form>
  );
};
