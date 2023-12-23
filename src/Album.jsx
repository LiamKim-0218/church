import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination])

function Album() {
  return(
    <div>
      <Swiper
        style={{
            width: "100%",
            height: "100%",
            // backgroundColor: "#FFF5F1",
            // borderRadius: "12px",
            }}
        className="banner"
        spaceBetween={50}
        slidesPerView={1}
        width={300}
        height={250}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide><img src="logo192.png" alt="logo192" /></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  )
}


export default Album;