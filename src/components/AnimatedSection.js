import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function AnimatedSection({ leftComponet, rightComponent }) {
  const [show, setShow] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.75 });

  useEffect(() => {
    if (!show && inView) {
      console.log("inview");
      setShow(true);
    }
  }, [inView, show]);

  return (
    <div>
      {/* <pre>{JSON.stringify({ show, inView })}</pre> */}
      <div className="row" ref={ref}>
        <div
          className={
            "col-6 col-md-6 d-flex justify-content-center align-items-center animate-on-scroll" +
            (show ? " fade-from-left " : "  ")
          }
        >
          {leftComponet}
        </div>
        <div
          className={
            "col-6 col-md-6 d-flex justify-content-center align-items-center animate-on-scroll" +
            (show ? " fade-from-right " : "  ")
          }
        >
          {rightComponent}
        </div>
      </div>
    </div>
  );
}
