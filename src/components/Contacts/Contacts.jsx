import style from "../../views/Footer/Footer.module.scss";

import PhoneSVG from "/src/assets/phone.svg?react";
import VkSVG from "/src/assets/vk.svg?react";
import YoutubeSVG from "/src/assets/youtube.svg?react";
import TelegramSVG from "/src/assets/telegram.svg?react";

export const Contacts = () => (
  <div className={style.contacts}>
    <a
      href="tel:+79398391297"
      className={style.phone}
      aria-label="Ссылка на телефон компании">
      <PhoneSVG />
      +7 (939) 839 12 97
    </a>
    <div className={style.socials}>
      <a href="https://vk.com/" aria-label="Ссылка на группу в Вконтакте">
        <VkSVG />
      </a>
      <a href="https://youtube.com/" aria-label="Ссылка на канал в Youtube">
        <YoutubeSVG />
      </a>
      <a href="https://teleram.com/" aria-label="Ссылка на канал в телеграм">
        <TelegramSVG />
      </a>
    </div>
  </div>
);
