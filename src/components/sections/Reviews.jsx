"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const testimonials = [
  {
    text: "DirectBookingz completely transformed our online presence! They built us a stunning, responsive website that loads quickly and is optimized for SEO. Within weeks, we started seeing more traffic and better customer engagement. Highly recommend their website creation service!",
    name: "Mr. Michael Eisenberg",
    position: "Furnished Habitat LLC",
    initial: "M",
    color: "#FCD34D",
  },
  {
    text: "The social media marketing team at DirectBookingz is incredible. They created engaging content and strategies that grew our follower base in just a few months. Our community feels more connected, and sales have gone up significantly thanks to their efforts.",
    name: "Natalia",
    position: "Nyc Rentals",
    initial: "N",
    color: "#01C76B",
  },
  {
    text: "We started using DirectBookingz for Google Ads and email marketing campaigns, and the results have been outstanding. Our ad campaigns brought in high-quality leads, and the email campaigns turned them into loyal customers. It’s been a real game-changer for our business.",
    name: "Ben",
    position: "Searchastay.com",
    initial: "B",
    color: "#E76F51",
  },
  {
    text: "DirectBookingz helped us climb the Google rankings with their SEO optimization. Now, when customers search for our services, we’re right there at the top! Their professional approach and clear results have made a big difference in our growth.",
    name: "Chan",
    position: "Corporate Rentals Group",
    initial: "C",
    color: "#00CFFF",
  },
];

const Reviews = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [slideWidth, setSlideWidth] = useState(300);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 1300);

      if (width <= 700) setSlideWidth(230);
      else setSlideWidth(300);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  if (isMobile) {
    return (
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={15}
        slidesPerView="auto"
        breakpoints={{
          700: {
            spaceBetween: 30
          }
        }}
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i} style={{ width: `${slideWidth}px` }}>
            <Card testimonial={t} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }


  return (
    <div className="flex justify-between gap-[22px] max-[700px]:gap-[18px]">
      {testimonials.map((t, i) => (
        <Card key={i} testimonial={t} />
      ))}
    </div>
  );
};


const Card = ({ testimonial }) => (
  <div>
    <div
      className="relative mb-8
      after:w-0 after:h-0 after:content-[''] after:absolute after:left-[26px] after:-bottom-4
      after:border-l-[0px] after:border-r-[24px] after:border-t-[20px] after:border-l-transparent after:border-r-transparent after:border-t-[#3A3A3A]"
    >
      <div className="min-h-[375px] p-4 rounded-[10px] bg-[#3A3A3A] relative z-10 max-[1600px]:min-h-[350px] max-[1200px]:min-h-[300px] max-[700px]:p-3 max-[700px]:min-h-[260px]">
        <img src="/images/icons/5-stars.png" alt="" className="mb-[9px] max-[1600px]:w-[130px]" />
        <p className="font-outfit text-[22px] max-[1600px]:text-lg max-[1200px]:text-base max-[700px]:text-sm">{testimonial.text}</p>
      </div>
    </div>
    <div className="flex items-center justify-between font-outfit">
      <div
        className="size-[53px] flex items-center justify-center text-[34px] rounded-full max-[700px]:size-9 max-[700px]:text-2xl"
        style={{ backgroundColor: testimonial.color, color: "#000" }}
      >
        {testimonial.initial}
      </div>
      <div className="w-[calc(100%-53px-18px)] max-[700px]:w-[calc(100%-36px-12px)]">
        <h3 className="text-[30px] single-line max-[1600px]:text-2xl max-[1200px]:text-xl max-[700px]:text-base">{testimonial.name}</h3>
        <p className="text-[15px] max-[1600px]:text-sm">{testimonial.position}</p>
      </div>
    </div>
  </div>
);

export default Reviews;
