import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slider";

import bgImg1 from "../../assets/images/carousel1.jpg";
import bgImg2 from "../../assets/images/carousel2.jpg";
import bgImg3 from "../../assets/images/carousel3.jpg";

const Banner = () => {
  return (
    <div className="container px-6 py-10 ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide img={bgImg1} title={"original text coming soon"} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide img={bgImg2} title={"original text coming soon"} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide img={bgImg3} title={"original text coming soon"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
