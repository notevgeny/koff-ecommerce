import { Container } from "../Container/Container";
import { Logo } from "../../components/Logo/Logo";
import { Search } from "../../components/Search/Search";
import { Control } from "../../components/Control/Control";

import style from "./Header.module.scss";

export const Header = () => (
  <header className={style.header}>
    <Container className={style.container}>
      <div className={style.logo}>
        <Logo />
      </div>
      <div className={style.search}>
        <Search />
      </div>
      <div className={style.control}>
        <Control />
      </div>
    </Container>
  </header>
);
