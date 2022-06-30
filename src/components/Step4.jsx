import step2Bg from "src/img/step2/step2Bg.png";
import step4_list1 from "src/img/step4/step4_list1.png";
import step4_list2 from "src/img/step4/step4_list2.png";
import step4_list3 from "src/img/step4/step4_list3.png";
import step4_list4 from "src/img/step4/step4_list4.png";
import step4_list5 from "src/img/step4/step4_list5.png";
import step4_list6 from "src/img/step4/step4_list6.png";
import step4_list7 from "src/img/step4/step4_list7.png";
import step4_list8 from "src/img/step4/step4_list8.png";

export default function Step4() {
  const graphicList = [
    step4_list1,
    step4_list2,
    step4_list3,
    step4_list4,
    step4_list5,
    step4_list6,
    step4_list7,
    step4_list8,
  ];
  return (
    <article
      style={{
        width: "100%",
        height: 1080,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        backgroundImage: `URL(${step2Bg})`,
      }}
    >
      <section
        style={{
          width: 1280,
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            marginBottom: 80,
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
            GRAPHIC
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
        <section
          style={{
            width: 800,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {graphicList.map((dataList, index) => (
            <section
              style={{
                width: 180,
                height: 180,
                marginLeft: index === 0 || index === 4 ? 0 : 20,
                marginTop: index > 4 ? 20 : 0,
                backgroundImage: `URL(${dataList})`,
                backgroundSize: "cover",
              }}
              key={index}
            />
          ))}
        </section>
      </section>
    </article>
  );
}
