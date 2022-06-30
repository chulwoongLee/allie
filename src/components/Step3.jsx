import step3Bg from "src/img/step3/step3Bg.png";
import step2_list1 from "src/img/step3/step2_list1.png";
import step2_list2 from "src/img/step3/step2_list2.png";
import step2_list3 from "src/img/step3/step2_list3.png";
import step2_list4 from "src/img/step3/step2_list4.png";
export default function Step3() {
  const otherList = [
    {
      img: step2_list1,
      title: "Brave inno",
      subTitle: "BX DESIGN",
      bottom: (
        <span>
          100% <span style={{ opacity: 0.25 }}> &nbsp;&nbsp;|&nbsp;&nbsp;</span>
          Mar - Sep,2014
        </span>
      ),
    },
    {
      img: step2_list2,
      title: "TOWNTY",
      subTitle: "APP UI/UX design",
      bottom: (
        <span>
          100% <span style={{ opacity: 0.25 }}> &nbsp;&nbsp;|&nbsp;&nbsp;</span>
          Sep,2018 - Jun,2019
        </span>
      ),
    },
    {
      img: step2_list3,
      title: (
        <div style={{ textAlign: "center" }}>
          modern master
          <br />
          dental ceramics ltd.
        </div>
      ),
      subTitle: "bx, APP UI design",
      bottom: (
        <span>
          100% <span style={{ opacity: 0.25 }}> &nbsp;&nbsp;|&nbsp;&nbsp;</span>
          Feb - Aug,2018
        </span>
      ),
    },
    {
      img: step2_list4,
      title: "Coex aquarium",
      subTitle: "WEB UI design",
      bottom: (
        <span>
          100% <span style={{ opacity: 0.25 }}> &nbsp;&nbsp;|&nbsp;&nbsp;</span>
          Mar - Aug,2016
        </span>
      ),
    },
  ];
  return (
    <article
      style={{
        width: "100%",
        height: 1080,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        backgroundImage: `URL(${step3Bg})`,
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
            OTHER
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
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          {otherList.map((dataList, index) => (
            <section
              style={{
                width: 260,
                height: 360,
                marginLeft: index === 0 ? 0 : 20,
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
              key={index}
            >
              {index === 1 && (
                <div
                  style={{
                    position: "absolute",
                    width: 180,
                    height: 180,
                    border: "2px solid #fff",
                    borderRadius: 96,
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    textAlign: "center",
                    fontSize: 24,
                    fontWeight: "bold",
                    lineHeight: 1.25,
                    letterSpacing: -0.48,
                    color: "#fff",
                    backgroundColor: "rgba(0,0,0,5.5)",
                  }}
                >
                  NOT
                  <br />
                  LAUNCH
                  <br />
                  YET
                </div>
              )}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: `URL(${dataList.img})`,
                  backgroundSize: "cover",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                  opacity: index === 1 ? 0.24 : 1,
                }}
              >
                <div
                  style={{
                    marginTop: 220,
                    fontSize: 24,
                    fontWeight: "bold",
                    letterSpacing: -0.48,
                    color: "#fff",
                    marginBottom: 8,
                  }}
                >
                  {dataList.title}
                </div>
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 300,
                    letterSpacing: -0.24,
                    color: "#fff",
                    marginBottom: 16,
                  }}
                >
                  {dataList.subTitle}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: "bold",
                    letterSpacing: -0.2,
                    color: "#fff",
                    marginBottom: 16,
                  }}
                >
                  {dataList.bottom}
                </div>
              </div>
            </section>
          ))}
        </section>
      </section>
    </article>
  );
}
