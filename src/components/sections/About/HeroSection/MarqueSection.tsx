import React, { useEffect } from "react";

const MarqueSection = () => {
  useEffect(() => {
    document.querySelectorAll(".logos").forEach((logosContainer) => {
      const copy = logosContainer
        ?.querySelector(".logos-slide")
        ?.cloneNode(true);
      if (copy) {
        logosContainer?.appendChild(copy);
      }
    });
  }, []);
  return (
    <>
      {/* <!-- ====================================== User Branding Marquee Section ===================================== --> */}
      <div className="header_full_sec overflow-hidden">
        <div className="logos">
          <div className="logos-slide">
            <div className="ticker__item">Architecture Design</div>
            <div className="ticker__item ticker__item_dark">Optimization</div>
            <div className="ticker__item">Security</div>
            <div className="ticker__item ticker__item_dark">Unit Test</div>
            <div className="ticker__item">Documentation</div>
          </div>
        </div>
      </div>
      {/* <!-- ====================================== User Branding Marquee Section ===================================== --> */}
    </>
  );
};
export default MarqueSection;
