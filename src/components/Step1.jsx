import step1_main from "src/img/step1/step1_main.png";
export default function Step1() {
  return (
    <article
      style={{
        width: "100%",
        height: 1080,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
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
    </article>
  );
}
