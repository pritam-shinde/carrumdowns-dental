"use client";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

const CompareSlider1 = () => {
  return (
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src="/Veneers/slider-images/before-slider1.jpg" alt="Before" />}
      itemTwo={<ReactCompareSliderImage src="/Veneers/slider-images/after-slider1.jpg" alt="After" />}
      style={{ width: "100%", height: "400px" }}
    />
  );
};

export default CompareSlider1;