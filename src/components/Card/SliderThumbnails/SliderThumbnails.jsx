import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";

import style from "../Card.module.scss";
import { API_URL } from "../../../const";

export const SliderThumbnails = ({ setThumbsSwiper, images }) => {
  return (
    <div className={style.sliderThumbnails}>
      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[Thumbs]}
        watchSlidesProgress
        spaceBetween={14}
        slidesPerView={4}>
        {images?.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={`${API_URL}${item}`}
              alt={`Фото ${name} #${index}`}
              className={style.img}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
