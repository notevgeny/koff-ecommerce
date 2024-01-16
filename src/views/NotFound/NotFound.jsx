import { Container } from "../Container/Container";
import style from "./NotFound.module.scss";

export const NotFound = () => {
  return (
    <>
      <Container>
        <section className={style.notfound}>
          <h1 className={style.title}>404</h1>
          <h2 className={style.subtitle}>F*CK! Here we go again</h2>
          <p className={style.desc}>
            Страница не найдена. Проверьте корректность ссылки или попробуйте
            зайти позже
          </p>
        </section>
      </Container>
    </>
  );
};
