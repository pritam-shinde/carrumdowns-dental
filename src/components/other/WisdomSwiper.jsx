"use client";

import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import Slider1 from "../../../public/WisdomTeeth/Slider1.jpg";
import Slider2 from "../../../public/WisdomTeeth/Slider2.jpg";
import Slider3 from "../../../public/WisdomTeeth/Slider3.jpg";
import Slider4 from "../../../public/WisdomTeeth/Slider4.jpg";

const WisdomSwiper = () => {
    return (
        <Swiper
            spaceBetween={30}
            effect={"fade"}
            navigation={true}
            pagination={{ clickable: true }}
            className="slide-text mySwiper"
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
        >
            {[
                { id: "wisdom-tooth-x-ray", image: Slider1 },
                { id: "wisdom-tooth-x-ray2", image: Slider2 },
                { id: "new-wisdom-tooth-x-ray", image: Slider3 },
                { id: "wisdom-tooth-improper-positioning", image: Slider4 },
            ].map((item) => (
                <SwiperSlide key={item.id}>
                    <Image
                        src={item.image}
                        alt={item.id}
                        width={1500}
                        height={586}
                        priority
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default WisdomSwiper;
