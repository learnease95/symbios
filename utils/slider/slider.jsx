import React, { useState, useEffect } from "react";
import styles from "./slider.module.css";

const Slider = ({
  imageList,
  width,
  height,
  loop = true,
  autoPlay = true,
  autoPlayInterval = 3000,
  showArrowControls = true,
  showDotControls = true,
  bgColor = "none",
}) => {
  let [active, setActive] = useState(0);

  const setPreviousImage = () => {
    if (active !== 0) {
      setActive((active -= 1));
    } else {
      if (loop) {
        setActive((active = imageList.length - 1));
      }
    }
  };

  const setNextImage = () => {
    if (active !== imageList.length - 1) {
      setActive((active += 1));
    } else {
      if (loop) {
        setActive((active = 0));
      }
    }
  };

  const leftClickHandle = () => {
    setPreviousImage();
  };

  const rightClickHandle = () => {
    setNextImage();
  };

  const dotClickHandler = (e) => {
    const dotNum = e.target.getAttribute("data-key");
    setActive((active = parseInt(dotNum)));
  };

  useEffect(() => {
    if (autoPlay) {
      let autoSlider = setInterval(setNextImage, autoPlayInterval);
      return () => clearInterval(autoSlider);
    }
  }, [active]);

  return (
    <div class={styles.container} style={{ backgroundColor: bgColor }}>
      {((showArrowControls && !loop && active !== 0) ||
        (showArrowControls && loop)) && (
        <button className={styles.left_click} onClick={leftClickHandle}>
          &lt;
        </button>
      )}
      <img src={imageList[active].url} className={styles.image} alt="image" />
      {((showArrowControls && !loop && active !== imageList.length - 1) ||
        (showArrowControls && loop)) && (
        <button className={styles.right_click} onClick={rightClickHandle}>
          &gt;{" "}
        </button>
      )}
      {showDotControls && (
        <div className={styles.dot_container}>
          {imageList.map((el, index) => {
            if (index !== active) {
              return (
                <div
                  className={styles.dot_container}
                  key={index}
                  className={styles.dot}
                  data-key={index}
                  onClick={dotClickHandler}
                />
              );
            } else {
              return <div key={index} className={styles.activeDot}></div>;
            }
          })}
        </div>
      )}
    </div>
  );
};

export default Slider;
