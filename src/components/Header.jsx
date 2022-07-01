import { useState, useEffect } from "react";
export default function Header(props) {
  const { pickContent, fncSlideComponent } = props;
  const [leftSize, setLeftSize] = useState(0);
  useEffect(() => {
    const bodySize = document.body.scrollHeight;
    window.addEventListener("scroll", (e) => {
      console.log("시작");
      console.log(bodySize);

      console.log(100 * window.scrollY);
      console.log("종료");
      setLeftSize((100 * window.scrollY) / bodySize);
    });
  }, []);
  return (
    <article
      style={{
        position: "fixed",
        top: 20,
        width: 1280,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <section
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <div
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "#fff",
            cursor: "pointer",
            opacity: pickContent === 0 ? 1 : 0.25,
            transition: "all 0.4s",
          }}
          onClick={() => {
            fncSlideComponent(0);
          }}
        >
          AHAE JO a.k.a. Allie.
        </div>
        <div style={{ flexGrow: 1 }} />
        <div
          style={{
            fontSize: 13,
            fontWeight: "bold",
            color: "#fff",
            cursor: "pointer",
            opacity: pickContent === 1 ? 1 : 0.25,
            transition: "all 0.4s",
          }}
          onClick={() => {
            fncSlideComponent(1);
          }}
        >
          WORK
        </div>
        <div style={{ width: 60 }} />
        <div
          style={{
            fontSize: 13,
            fontWeight: "bold",
            color: "#fff",
            cursor: "pointer",
            opacity: pickContent === 2 ? 1 : 0.25,
            transition: "all 0.4s",
          }}
          onClick={() => {
            fncSlideComponent(2);
          }}
        >
          graphic
        </div>
        <div style={{ width: 60 }} />
        <div
          style={{
            fontSize: 13,
            fontWeight: "bold",
            color: "#fff",
            cursor: "pointer",
            opacity: pickContent === 3 ? 1 : 0.25,
            transition: "all 0.4s",
          }}
          onClick={() => {
            fncSlideComponent(3);
          }}
        >
          HISTORY
        </div>
      </section>
      <section>
        <div
          style={{
            position: "absolute",
            left: `${leftSize}%`,
            backgroundColor: "#fff",
            width: 11,
            height: 11,
            transform: "rotate(45deg)",
          }}
        />
        <div
          style={{
            marginTop: 6.5,
            borderBottom: "solid 1px #ffffff",
            opacity: 0.4,
            width: 1280,
          }}
        />
      </section>
    </article>
  );
}
