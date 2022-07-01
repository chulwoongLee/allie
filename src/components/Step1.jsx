import { useEffect, useState } from "react";
import step1_main from "src/img/step1/step1_main.png";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
export default function Step1() {
  return (
    <article
      style={{
        width: "100%",
        height: 1080,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        backgroundImage: `URL(${step1_main})`,
      }}
    >
      <section
        style={{
          width: 1280,
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <section>
          <div style={{ fontSize: 42, fontWeight: 600, color: "#fff" }}>
            Hello, Guys!
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 100,
              color: "#fff",
              letterSpacing: -1.08,
            }}
          >
            반갑습니다.
            <br />
            디자이너 조아해입니다.
          </div>
          <div style={{ fontSize: 18, color: "#fff", letterSpacing: -0.27 }}>
            I mean I like you who watching this. XD
            <br />
            Let’s WORK TOGETHER! Let’s WORK TOGETHER!
            <br />I mean I like you who watching this. XD Let’s WORK TOGETHER!
          </div>
        </section>
        <div style={{ flexGrow: 1 }} />
        <section>
          <div
            style={{
              fontSize: 13,
              color: "#fff",
              lineHeight: 1.54,
              transform: "rotate(90deg)",
            }}
          >
            Product UI/UX Designer
            <br />
            Based in Seoul, Republic of Korea
          </div>
        </section>
      </section>
      <section style={{ marginBottom: 40 }}>
        <div
          style={{
            border: "solid 2.5px #fff",
            width: 31,
            height: 42,
            borderRadius: 14,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Wheel />
        </div>
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <DoubleArrowIcon
            style={{
              marginTop: 7,
              transform: "rotate(90deg)",
              color: "#fff",
              opacity: 0.5,
            }}
          />
        </div>
      </section>
    </article>
  );
}

function Wheel() {
  const [status, setStatus] = useState(0);
  let fakeStatus = 0;
  let wheelInterval = null;
  useEffect(() => {
    wheelInterval = setInterval(() => {
      fncChangeStatus();
    }, 500);
    return () => {
      clearInterval(wheelInterval);
    };
  }, []);
  function fncChangeStatus() {
    if (fakeStatus > 3) {
      fakeStatus = 0;
    } else {
      fakeStatus = fakeStatus + 1;
    }
    setStatus(fakeStatus);
  }
  return (
    <article>
      <div
        style={{
          width: 5,
          height: fakeStatus > 2 ? 60 : fakeStatus > 1 ? 20 : 5,
          transition: "all 0.4s",
        }}
      ></div>
      <div
        style={{
          width: 5,
          height: status === 2 ? 15 : 5,
          backgroundColor: "#fff",
          opacity: status === 0 || status === 4 ? 0 : 1,
          transition: "all 0.4s",
        }}
      ></div>
      <div
        style={{
          width: 5,
          height: status > 1 ? 5 : 20,
          transition: "all 0.4s",
        }}
      ></div>
    </article>
  );
}
