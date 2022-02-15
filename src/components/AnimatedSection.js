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
    <div className="container-fluid">
      {/* <pre>{JSON.stringify({ show, inView })}</pre> */}
      <div
        className="row d-flex justify-content-center align-items-center fs-4 m-0"
        ref={ref}
      >
        <div
          className={
            "col-12 col-md-6 d-flex p-0 my-0 my-md-5  justify-content-center align-items-center animate-on-scroll" +
            (show ? " fade-from-left " : "  ")
          }
        >
          {leftComponet}
        </div>
        <div
          className={
            "col-12 col-md-6 d-flex p-0 my-0 my-md-5 justify-content-center align-items-center animate-on-scroll" +
            (show ? " fade-from-right " : "  ")
          }
        >
          {rightComponent}
        </div>
      </div>
    </div>
  );
}
