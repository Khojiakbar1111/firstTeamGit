import "./portfoliyo.css";

import portfolioImg from "../../assets/portfolioImg.png";
import { FaArrowRightLong } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { NavLink } from "react-router-dom";

function Portfoliyo() {
  return (
    <div className="portfoliyo" id="portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio-carusel">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="swiper-slide">
            <div className="slider-img">
              <img src={portfolioImg} alt="" />
            </div>
            <div className="slider-detail">
              <h1>Landing Ice-cream</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ut orci eu elit consequat posuere ut sed elit. Nulla et
                tristique felis. Morbi quis orci non purus blandit fringilla.
                Etiam et mollis eros. Duis venenatis vulputate lacus, non
                tristique eros placerat vel. Nam nec magna lacus. Etiam euismod
                egestas mauris nec mollis. Phasellus efficitur et ex vel
                condimentum. Cras enim purus, tempor sed massa vel, accumsan
                bibendum magna. Nullam hendrerit cursus purus, sit amet viverra
                arcu gravida vel.
              </p>
              <NavLink to={"/readmore"}>
                More <FaArrowRightLong />{" "}
              </NavLink>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="slider-img">
              <img src={portfolioImg} alt="" />
            </div>
            <div className="slider-detail">
              <h1>Landing Ice-cream</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ut orci eu elit consequat posuere ut sed elit. Nulla et
                tristique felis. Morbi quis orci non purus blandit fringilla.
                Etiam et mollis eros. Duis venenatis vulputate lacus, non
                tristique eros placerat vel. Nam nec magna lacus. Etiam euismod
                egestas mauris nec mollis. Phasellus efficitur et ex vel
                condimentum. Cras enim purus, tempor sed massa vel, accumsan
                bibendum magna. Nullam hendrerit cursus purus, sit amet viverra
                arcu gravida vel.
              </p>
              <NavLink to={"/readmore"}>
                More <FaArrowRightLong />{" "}
              </NavLink>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="slider-img">
              <img src={portfolioImg} alt="" />
            </div>
            <div className="slider-detail">
              <h1>Landing Ice-cream</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ut orci eu elit consequat posuere ut sed elit. Nulla et
                tristique felis. Morbi quis orci non purus blandit fringilla.
                Etiam et mollis eros. Duis venenatis vulputate lacus, non
                tristique eros placerat vel. Nam nec magna lacus. Etiam euismod
                egestas mauris nec mollis. Phasellus efficitur et ex vel
                condimentum. Cras enim purus, tempor sed massa vel, accumsan
                bibendum magna. Nullam hendrerit cursus purus, sit amet viverra
                arcu gravida vel.
              </p>
              <NavLink to={"/readmore"}>
                More <FaArrowRightLong />{" "}
              </NavLink>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Portfoliyo;
