"use client";
import Slider from "@/utils/slider/slider";
import styles from "./imageSlider.module.css";

export default function ImageSlider() {
  const images = [
    { url: "/1.webp" },
    { url: "/2.jpg" },
    { url: "/3.jpg" },
    { url: "/4.jpg" },
    { url: "/5.jpg" },
  ];
  return (
    <div>
      <div className={styles.container}>
        <Slider
          imageList={images}
          width="100%"
          loop={true}
          autoPlay={false}
          autoPlayInterval={5000}
          showArrowControls={true}
          showDotControls={true}
        />
      </div>
    </div>
  );
}
