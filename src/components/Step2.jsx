import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import step2Bg from "src/img/step2/step2Bg.png";
import step2_slide1 from "src/img/step2/step2_slide1.png";
import step2_slide2 from "src/img/step2/step2_slide2.png";
import step2_slide3 from "src/img/step2/step2_slide3.png";
import step2_slide4 from "src/img/step2/step2_slide4.png";
import step2_slide5 from "src/img/step2/step2_slide5.png";
import leftArrow from "src/img/step2/leftArrow.png";
import rightArrow from "src/img/step2/rightArrow.png";
import project1 from "src/img/step2/project1.png";
import project2 from "src/img/step2/project2.png";
import project3 from "src/img/step2/project3.png";
import project4 from "src/img/step2/project4.png";
import project5 from "src/img/step2/project5.png";
import project6 from "src/img/step2/project6.png";
import project7 from "src/img/step2/project7.png";
import project8 from "src/img/step2/project8.png";
import "swiper/css";
import { useState, useRef } from "react";
export default function Step2() {
  const swiper = useRef(null);
  const slideList = [
    {
      img: step2_slide1,
      title: "올라케어",
      content: "비대면 원격 진료 프로젝트",
      period: (
        <div>
          참여도 80%&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;Oct,2016 -
          Jan,2017
        </div>
      ),
      imglist: [project2],
    },
    {
      img: step2_slide2,
      title: "포켓모바일",
      content: "모바일 APP 디자인 구축 및 가이드 제작",
      period: (
        <div>
          Participation
          50%&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;15.02 - 15.10
        </div>
      ),
      imglist: [project1, project2],
    },
    {
      img: step2_slide3,
      title: "SC제일은행",
      content: "비대면 인증 모바일앱 구축 프로젝트",
      period: (
        <div>
          Participation
          40%&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;16.09 - 16.10
        </div>
      ),
      imglist: [project6],
    },
    {
      img: step2_slide4,
      title: "신한카드",
      content: "모바일웹 리뉴얼 프로젝트",
      period: (
        <div>
          Participation
          80%&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;16.10 - 17.01
        </div>
      ),
      imglist: [project3, project4],
    },
    {
      img: step2_slide5,
      title: "유한킴벌리",
      content: "유아동쇼핑몰 'momQ' 구축 프로젝트",
      period: (
        <div>
          Participation
          65%&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;14.05 - 15.01
        </div>
      ),
      imglist: [project8, project7, project5],
    },
  ];

  const [pickSlide, setPickSlide] = useState(0);
  return (
    <article
      style={{
        width: "100%",
        height: 1080,
        backgroundImage: `URL(${step2Bg})`,
      }}
    >
      <section
        style={{
          paddingTop: 162,
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          marginBottom: 83,
        }}
      >
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            marginBottom: 8,
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              width: 11,
              height: 11,
              transform: "rotate(45deg)",
            }}
          />
          <div
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "#fff",
              letterSpacing: 7.2,
              marginLeft: 12,
              marginRight: 12,
            }}
          >
            WORK
          </div>
          <div
            style={{
              backgroundColor: "#fff",
              width: 11,
              height: 11,
              transform: "rotate(45deg)",
            }}
          />
        </div>
        <div style={{ fontSize: 15, color: "#666666", letterSpacing: -0.23 }}>
          디자인된 이미지를 클릭해주세요.
        </div>
      </section>
      <section
        style={{
          //width: 968,
          width: "100%",
          height: 360,
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          marginBottom: 58,
        }}
      >
        <div style={{ width: 44, height: 44, cursor: "pointer" }}>
          {pickSlide > 0 && (
            <img
              src={leftArrow}
              style={{ width: 44, height: 44 }}
              onClick={() => {
                const slideValue = pickSlide - 1;
                setPickSlide(slideValue);
                swiper.current.swiper.slideTo(slideValue);
              }}
              alt="prevButton"
            />
          )}
        </div>
        <section>
          <Swiper
            ref={swiper}
            style={{ width: 840, height: 360 }}
            slidesPerView={1}
            initialSlide={pickSlide}
            pagination={true}
            onSlideChange={(e) => {
              setPickSlide(e.activeIndex);
            }}
          >
            {slideList.map((dataList, index) => (
              <SwiperSlide style={{ textAlign: "center" }} key={index}>
                <img src={dataList.img} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        <div style={{ width: 44, height: 44, cursor: "pointer" }}>
          {pickSlide < 4 && (
            <img
              src={rightArrow}
              style={{ width: 44, height: 44 }}
              onClick={() => {
                const slideValue = pickSlide + 1;
                setPickSlide(slideValue);
                swiper.current.swiper.slideTo(slideValue);
              }}
              alt="nextButton"
            />
          )}
        </div>
      </section>

      <section
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          marginBottom: 26,
        }}
      >
        <div
          style={{
            fontSize: 48,
            fontWeight: "bold",
            letterSpacing: -0.72,
            color: "#fff",
            marginBottom: 4,
          }}
        >
          {slideList[pickSlide].title}
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 100,
            letterSpacing: -0.48,
            color: "#fff",
            marginBottom: 6,
          }}
        >
          {slideList[pickSlide].content}
        </div>
        <div
          style={{
            fontSize: 15,
            fontWeight: "bold",
            letterSpacing: -0.23,
            color: "#5a5a5a",
            marginBottom: 6,
          }}
        >
          {slideList[pickSlide].period}
        </div>
      </section>
      <section
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        {slideList[pickSlide].imglist.map((dataList, index) => (
          <img
            src={dataList}
            style={{ width: 64, height: 64, marginLeft: index === 0 ? 0 : 10 }}
            key={index}
            alt="project"
          />
        ))}
      </section>
    </article>
  );
}
