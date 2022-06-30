import { useState } from "react";

export default function Step5() {
  const [pickYear, setPickYear] = useState(0);
  const workList = [
    {
      year: "2022",
      list: [
        {
          period: "Apr,2020 - Now",
          title:
            "비대면 헬스케어 서비스 ‘올라케어’ 웹사이트 및 모바일앱 구축 프로젝트",
          content: (
            <div>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  letterSpacing: -0.18,
                  color: "#d53131",
                }}
              >
                #이프 디자인 어워드 ‘헬스케어 부문’ 본상 수상
              </span>
            </div>
          ),
        },
      ],
    },
    {
      year: "2021",
      list: [
        {
          period: "Apr,2020 - Now",
          title:
            "비대면 헬스케어 서비스 ‘올라케어’ 웹사이트 및 모바일앱 구축 프로젝트",
          content: (
            <div>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  letterSpacing: -0.18,
                  color: "#d53131",
                }}
              >
                #이프 디자인 어워드 ‘헬스케어 부문’ 본상 수상
              </span>
            </div>
          ),
        },
      ],
    },
    {
      year: "2020",
      list: [
        {
          period: "Sep - Nov,2020",
          title: (
            <div>
              롯데홈쇼핑 신규 커머스 ‘아이투(iTOO)’ 모바일앱 구축 프로젝트
              <br />
              롯데홈쇼핑 신규 비디오커머스 ‘와이드(wyd)’ 모바일앱 구축 프로젝트
            </div>
          ),
          content: "",
        },
      ],
    },
    {
      year: "2019",
      list: [
        {
          period: "Sep - Nov,2019",
          title: "LG U+ 웹사이트 및 모바일앱 디자인 운영",
          content: "",
        },
        {
          period: "Sep,2018 - Jun,2019",
          title: "스포츠 커뮤니티 ‘타운즈컵(Towns Cup)’ 모바일앱 구축 프로젝트",
          content: "",
        },
      ],
    },
    {
      year: "2018",
      list: [
        {
          period: "Sep,2018 - Jun,2019",
          title: "스포츠 커뮤니티 ‘타운즈컵(Towns Cup)’ 모바일앱 구축 프로젝트",
          content: "",
        },
        {
          period: "Feb - Aug,2018",
          title: (
            <div>
              ‘모던 마스터 덴탈 세라믹스(Modern master dental ceramics Ltd.)’
              <br />
              명함 디자인 및 모바일앱 구축 프로젝트
            </div>
          ),
          content: "",
        },
      ],
    },
    {
      year: "2017",
      list: [
        {
          period: "Jan,2017 - Jan,2018",
          title: "소개팅 커뮤니티 ‘베리미(BERRY ME)’ 모바일앱 구축 프로젝트",
          content: "",
        },
      ],
    },
    {
      year: "2016",
      list: [
        {
          period: "Oct,2016 - Jan,2017",
          title: "신한카드 모바일웹 리뉴얼 구축 프로젝트",
          content: (
            <div>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  letterSpacing: -0.18,
                  color: "#d53131",
                  marginRight: 10,
                }}
              >
                #웹 어워드 코리아 ‘최고대상’
              </span>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  letterSpacing: -0.18,
                  color: "#5b73ed",
                }}
              >
                #스마트 앱 어워드 ‘대상’
              </span>
            </div>
          ),
        },
        {
          period: "Sep - Oct,2016",
          title: "SC제일은행 비대면 모바일앱 구축 프로젝트",
          content: (
            <span
              style={{
                fontSize: 12,
                fontWeight: "bold",
                letterSpacing: -0.18,
                color: "#5b73ed",
              }}
            >
              #스마트 앱 어워드 ‘우수상’
            </span>
          ),
        },
        {
          period: "Mar - Aug,2016",
          title: "코엑스 아쿠아리움 사내 웹사이트 구축 프로젝트",
          content: "",
        },
      ],
    },
    {
      year: "2015",
      list: [
        {
          period: "Feb - Oct,2015",
          title:
            "O2O결제 플랫폼 ‘포켓모바일’ 모바일앱 및 POS기기 구축 프로젝트",
          content: (
            <div>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  letterSpacing: -0.18,
                  color: "#d53131",
                  marginRight: 10,
                }}
              >
                #레드닷 디자인 어워드 ‘모바일 앱 부문’ 본상
              </span>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  letterSpacing: -0.18,
                  color: "#ff8e8e",
                }}
              >
                #이프 디자인 어워드 본상
              </span>
            </div>
          ),
        },
        {
          period: "Apr,2015",
          title: (
            <div>
              SPC 해피포인트 모바일앱 디자인 운영
              <br />
              SPC 기프트샵 ‘셀렉토리(CELECTORY)’ 모바일앱 디자인 운영
            </div>
          ),
          content: "",
        },
      ],
    },
    {
      year: "2014",
      list: [
        {
          period: "May,2014 - Jan,2015",
          title:
            "유한킴벌리 유아동 쇼핑몰 ‘맘큐(momQ)’ 웹사이트 및 모바일앱 구축 프로젝트",
          content: (
            <div>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  letterSpacing: -0.18,
                  color: "#e5c45b",
                }}
              >
                #모바일 어워드 코리아 ‘대상’
              </span>
            </div>
          ),
        },
        {
          period: "May,2014 - Jan,2015",
          title:
            "브레이브 이노베이션 타이포그래피 제작 및 브랜드 아이덴티티 구축 프로젝트",
          content: "",
        },
        {
          period: "May,2014 - Jan,2015",
          title: "밴드 재팬 웹사이트 이벤트 디자인",
          content: "",
        },
        {
          period: "May,2014 - Jan,2015",
          title: "소리바다 웹사이트 및 모바일앱 디자인 운영",
          content: "",
        },
      ],
    },
    {
      year: "2013",
      list: [
        {
          period: "Dec,2013 - Jan,2014",
          title: "‘위닉스 뽀송’ 프로모션 마스크 제품 디자인",
          content: "",
        },
        {
          period: "Dec,2013",
          title: "삼성뮤직 모바일앱 이벤트 디자인",
          content: "",
        },
        {
          period: "Sep,2013 - Jan,2014",
          title: "멜론뮤직 PC player GUI",
          content: "",
        },
      ],
    },
  ];
  return (
    <article
      style={{
        width: "100%",
        height: 700,
        alignItems: "center",
        justifyContent: "flex-start",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#181818",
      }}
    >
      <section
        style={{
          width: 700,
          marginTop: 140,
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          borderBottom: "solid 1px #2F2F2F",
        }}
      >
        {workList.map((dataList, index) => (
          <div
            style={{
              fontSize: 15,
              fontWeight: "bold",
              letterSpacing: -0.23,
              color: "#444",
              marginLeft: index === 0 ? 0 : 38,
              borderBottom: "solid 0px #fff",
              borderBottomWidth: index === pickYear ? 1 : 0,
              cursor: "pointer",
            }}
            onClick={() => {
              setPickYear(index);
            }}
            key={index}
          >
            {dataList.year}
          </div>
        ))}
      </section>
      <section style={{ marginTop: 28, width: 700 }}>
        {workList[pickYear].list.map((dataList, index) => (
          <div key={index}>
            <div
              style={{
                marginTop: 19.5,
                fontSize: 12,
                fontWeight: "bold",
                letterSpacing: -0.3,
                color: "#777",
              }}
            >
              {dataList.period}
            </div>
            <div
              style={{
                marginTop: 6,
                fontSize: 20,
                fontWeight: "bold",
                letterSpacing: -0.3,
                color: "#fff",
              }}
            >
              {dataList.title}
            </div>
            <div>{dataList.content}</div>
            <div
              style={{
                marginTop: 20,
                width: "100%",
                height: 1,
                backgroundColor: "#fff",
                opacity: 0.06,
              }}
            />
          </div>
        ))}
      </section>
    </article>
  );
}
