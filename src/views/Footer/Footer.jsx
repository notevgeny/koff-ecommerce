import { Container } from "../Container/Container";
import style from "./Footer.module.scss";

import { Logo } from "../../components/Logo/Logo";
import { Contacts } from "../../components/Contacts/Contacts";
import { Developers } from "../../components/Developers/Developers";
import { Copyright } from "../../components/Copyright/Copyright";

export const Footer = () => (
  <footer className={style.footer}>
    <Container className={style.container}>
      <Logo className={style.logo} />
      <Contacts />
      <div className={style.developerList}>
        <Developers />
      </div>
      <Copyright />
    </Container>
  </footer>
);
