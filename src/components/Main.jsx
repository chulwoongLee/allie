import Header from "./Header";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Bottom from "./Bottom";
import { useState, useRef, useEffect } from "react";
export default function Main() {
  const [pickContent, setPickContent] = useState(0);
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);
  const step4Ref = useRef(null);
  const step5Ref = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 3239) {
        setPickContent(3);
      } else if (window.scrollY > 2159) {
        setPickContent(2);
      } else if (window.scrollY > 1079) {
        setPickContent(1);
      } else {
        setPickContent(0);
      }
    });
  }, []);
  function fncSlideComponent(index) {
    if (index === 0) {
      setPickContent(0);
      step1Ref.current.scrollIntoView({ behavior: "smooth" });
    } else if (index === 1) {
      setPickContent(1);
      step2Ref.current.scrollIntoView({ behavior: "smooth" });
    } else if (index === 2) {
      setPickContent(2);
      step3Ref.current.scrollIntoView({ behavior: "smooth" });
    } else if (index === 3) {
      setPickContent(3);
      step4Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  useEffect(() => {
    /*
    if (pickContent === 0) {
      if (step1Ref.current) {
        console.log("맞는가~?");
        step1Ref.current.scrollIntoView({ behavior: "smooth" });
      } else {
        console.log("아닌가~?");
      }
    } else if (pickContent === 1) {
      if (step2Ref.current) {
        step2Ref.current.scrollIntoView({ behavior: "smooth" });
      }
    } else if (pickContent === 2) {
      step3Ref.current.scrollIntoView({ behavior: "smooth" });
    } else if (pickContent === 3) {
      step4Ref.current.scrollIntoView({ behavior: "smooth" });
    } else if (pickContent === 4) {
      step5Ref.current.scrollIntoView({ behavior: "smooth" });
    }
    */
  }, [pickContent]);
  return (
    <article
      style={{
        width: 1920,
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Header pickContent={pickContent} fncSlideComponent={fncSlideComponent} />
      <div style={{ width: "100%" }} ref={step1Ref}>
        <Step1 />
      </div>
      <div style={{ width: "100%" }} ref={step2Ref}>
        <Step2 />
      </div>
      <div style={{ width: "100%" }} ref={step3Ref}>
        <Step3 />
      </div>
      <div style={{ width: "100%" }} ref={step4Ref}>
        <Step4 />
      </div>
      <div style={{ width: "100%" }} ref={step5Ref}>
        <Step5 />
      </div>
      <Bottom />
    </article>
  );
}
