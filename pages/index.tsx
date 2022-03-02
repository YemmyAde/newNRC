import React, { useState } from "react";
import Image from "next/image";
import Layout from "../components/layout";
import Button from "../components/button";
import Slider from "react-slick";
import slider1 from "../public/images/slider1.png";
import slider2 from "../public/images/slider2.png";
import slider3 from "../public/images/slider3.png";
import slider4 from "../public/images/slide4.jpg";
import slider5 from "../public/images/slide5.jpg";
import slider6 from "../public/images/slide6.jpg";
import slider7 from "../public/images/slide7.jpg";
import slider8 from "../public/images/slide8.jpg";

import router from "next/router";

const Home = () => {

  const images = [slider1, slider2, slider3, slider4, slider5, slider6, slider7, slider8];

  const text = {
    quotes: [
      {
        text: "Politics hates a vacuum. If it isn't filled with hope, someone will fill it with fear",
        name: " Naomi Klein, international bestselling author",
      },
      {
        text: "One of the penalties for refusing to participate in politics is that you end up being governed by your inferiors",
        name: " Naomi Klein, international bestselling author",
      },
    ],
    pictures: [
      {
        images: "/images/text2.jpg",
        text: "“Nigeria's unity is one for which enough blood has been spilled and many hundreds of thousands of lives have been lost. Many have paid for the unity of this country with their lives, and it will be wrong of us, as men and women of goodwill in this generation, to toy with those sacrifices that have been made” ",
        name: "~ Prof. Yemi Osinbajo ~",
      },
      {
        images: "/images/text1.jpg",
        text: "“You don't have to cheat or steal to be successful in life, but you must be ready to convert your challenges to opportunity.”",
        name: "~ Prof. Yemi Osinbajo ~",
      },
      {
        images: "/images/text4.jpg",
        text: "“No matter how much you pray or fast, our country cannot grow without some of us deciding to do the hard work that makes nations work.” ",
        name: "~ Prof. Yemi Osinbajo ~",
      },
    ],
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    fade: true,
    arrows: false,
    ease: "ease-in-out",
  };

  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: false,
    fade: true,
    arrows: false,
    ease: "ease-in-out",
  };
  const picture = text.pictures
  return (
    <Layout>
      <div className="bg-[url('/images/OsibanjoBannerr3.jpg')] sm:bg-[url('/images/OsibanjoBanner2.jpg')] bg-repeat md:bg-[url('/images/OsibanjoBannerr.jpg')] w-[100%] h-[511px] relative font-san">
        <div className="font-[400]  font-san text-center absolute top-[40%] md:top-[30%] left-4 md:left-16 w-[60%] md:w-[40%]">
          <h5 className="font-lora text-[#fff] text-center text-[30px] leading-[40px] md:text-[40px] md:leading-[50px]">
            Great Economies and Nations are Created by Men.
          </h5>
          <h6 className="mt-[20px] text-white text-[20px] md:text-[30px] font-lora">
            ~ Prof. Yemi Osinbajo ~
          </h6>
          <div className="text-center mt-[50px]">
            {/* <Button onClick={() => router.push("/#register")}>Register </Button> */}
          </div>
        </div>
      </div>
      <div
        className="mb-4 lg:flex justify-between items-center bg-[#ececec]"
        id="about"
      >
        <div className="pt-24 pb-16 lg:py-0 w-[100%] lg:w-[60%] px-[20px] lg:pl-[80px] order-first md:order-last">
          <div className="relative w-[70%] mx-[auto]">
            <Slider {...settings}>
              {text.quotes.map((items, idx) => (
                <div key={idx} className="text-center font-karla">
                  <h5 className="font-[400] text-[22px] lg:text-[25px] leading-[32px] font-karla text-center ">
                    {items.text}
                  </h5>
                  <p className="mt-[20px] font-[400] text-[16px] leading-[30px] font-karla text-center ">
                    {items.name}
                  </p>
                </div>
              ))}
            </Slider>
            <img
              src="/images/quote2.png"
              alt=""
              className="absolute top-[-90px] left-[-60px] lg:left-[-80px]"
            />
            <img
              src="/images/quote1.png"
              alt=""
              className="absolute bottom-[-40px] lg:bottom-[-90px] right-[-60px]"
            />
          </div>
        </div>

        <div className="order-last md:order-first w-[100%] lg:w-[40%] mb-[40px] lg:mb-0">
          <img src="/images/Osibanjo2.png" alt="" className="w-[100%]" />
        </div>

      </div>

      <div className="py-8 border-t-[1px] border-t-[#d9d6d6] mx-[auto] lg:mx-[10%] text-justify  text-[16px] leading-[32px] font-lora w-[95%] lg:w-[80%] px-[5%] ">
        <h5 className="font-[500] text-[24px] leading-[32px] font-san text-center ">
          ABOUT THE PROJECT
        </h5>
        <p className="text-justify lg:text-center">
          The two quotes above summarize the position that all well-meaning
          Nigerians of all works of life must take in the coming months as
          Nigeria advances towards another general election due for the first
          quarter of 2023. <br /> <br /> Hence, the Nigeria Renaissance Centre
          for Strategy as a conglomeration of Nigerian professionals has taken a
          stand to mobilize Nigerians in support of Professor Yemi Osinbajo, who
          we believe is the most reasonable and viable option for Presidency
          come 2023 together under the auspice of the REBIRTH NIGERIA PROJECT
          2023.
          <br /> <br /> We are driven by the conviction that it is time we
          reinvent the wheels of politics and leadership in Nigeria and active
          participation in the political process is key in achieving this.
        </p>
      </div>
      <div
        className="mb-8 lg:flex justify-between items-center bg-[#ececec] pt-[60px] pb-[40px] px-[40px]"
        id="about"
      >
        <div className="w-[100%] lg:w-[40%] mb-[40px] px-[20px] lg:mb-0">
          <img src="/images/ProfOsinbajo.png" alt="" className="w-[100%]" />
        </div>

        <div className="w-[100%] pl-[0] lg:w-[60%] lg:pl-[80px]">
          <p className="font-[400] text-[16px] leading-[32px] font-karla text-justify ">
            Hence, we are mobilizing and deploying intellectual capital and
            resources into the candidature and eventual emergence of Professor
            Yemi Osinbajo as President of Nigeria in 2023. In this regard, we
            are also pledged to mobilize at least 2 million Nigerians for the
            actualization of this.
          </p>
          <br />{" "}
          <p className="font-[400] text-[16px] leading-[32px] font-karla text-justify">
            As such we are seeking to band together with Nigerians who
            understand that the time is ripe for THE REBIRTH and who understand
            and believe that the current Vice President, His Excellency,
            Professor Yemi Osinbajo is the face and progenitor of this REBIRTH.
            If you feel so persuaded and convinced, waste no further time. Register!
          </p>
          <div className="text-center mt-[20px] mb-[30px]">
            <Button onClick={() => router.push("/#register")}>Register </Button>
          </div>
        </div>
      </div>

      <div
        id="NRC"
        className="mb-8 py-4 border-y-[1px] border-y-[#d9d6d6] lg:mx-[10%] text-justify  text-[16px] leading-[32px] font-lora w-[100%] lg:w-[80%] px-[5%] mx-[auto]"
      >
        <h5 className="font-[500] text-[24px] leading-[32px] font-san text-center ">
          ABOUT US
        </h5>
        <p className="text-justify lg:text-center">
          The Nigeria Renaissance Centre for Strategy, Research & Development is
          a duly registered strategy - centric community of well meaning, upward
          mobile Nigerians who are desirous to “build an intellectual trough of
          information for a prosperous Nigeria by developing policy models and
          offering policy advise.
          <br />
          As a membership-based organization, we leverage on the skills,
          expertise, and networks of members to design solutions to Nigeria’s
          numerous challenges.
        </p>
      </div>

      <div className="w-[100%]">
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div key={idx} className="text-center ">
              <Image src={img} layout="responsive" className="" />
            </div>
          ))}
        </Slider>
      </div>
      <div className=" border-y-[1px] border-y-[#d9d6d6]  mb-8 py-4 mx-[5%] sm:mx-[10%] text-justify  text-[16px] leading-[32px] font-lora box-border">
        <Slider {...settings2}>
          {picture.map((items, idx) => {
            return idx == 1 ? (
              <div key={idx} className="text-center relative">
                <img src={items.images} alt="" className="height-[600px]" />
                <div className="absolute left-[10px] lg:left-[30px] bottom-[0] md:bottom-[10px] lg:bottom-[50px] 0 text-white font-lora w-[100%] sm:w-[60%]">
                  <h5 className="font-[400] text-center lg:text-left text-[15px] leading-[23px] lg:text-[20px] lg:leading-[30px] font-lora ">
                    {items.text}
                  </h5>
                  <p className="mt-[10px] font-[400] text-[14px] leading-[20px] font-karla text-center ">
                    {items.name}
                  </p>
                </div>
              </div>
            ) : (
              <div key={idx} className="text-center relative">
                <img src={items.images} alt="" className="height-[600px]" />
                <div className="absolute sm:right-[10px] lg:right-[30px] bottom-[0] md:bottom-[10px] lg:bottom-[50px] 0 text-white font-lora w-[100%] sm:w-[60%]">
                  <h5 className="font-[400] text-center lg:text-left text-[12px] leading-[15px] sm:text-[16px] sm:leading-[20px] lg:text-[20px] lg:leading-[30px] font-lora">
                    {items.text}
                  </h5>
                  <p className=" mt-[3px] lg:mt-[10px] font-[400] text-[12px] leading-[18px] lg:text-[14px] lg:leading-[20px] font-karla text-center ">
                    {items.name}
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </Layout>
  );
};

export default Home;
