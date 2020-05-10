import React, { useState, useEffect } from "react";
import "./IconBurst.css";
import mojs from "mo-js";

const useBurst = ({ duration, element, color }) => {
  const [animationTimeline, setAnimationTimeline] = useState(
    new mojs.Timeline()
  );

  useEffect(() => {
    const circleBurst = new mojs.Burst({
      parent: element,
      radius: { 50: 75 },
      angle: 25,
      count: 10,
      duration: duration,
      children: {
        shape: "circle",
        fill: color,
        delay: 30,
        speed: 0.5,
        radius: { 3: 0 },
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
      },
    });

    const updatedAnimationTimeline = animationTimeline.add([circleBurst]);

    setAnimationTimeline(updatedAnimationTimeline);
  }, [animationTimeline, duration, element, color]);

  return animationTimeline;
};

const BurstIcon = ({ children, pulse, color }) => {
  //   const [element, setElement] = useState({});
  const divRef = React.createRef();
  const iconRef = React.createRef();

  const animationTimeline = useBurst({
    duration: 300,
    element: divRef,
    color
  });

  

  const handleClick = () => {
    animationTimeline.replay();
    iconRef.current.style.fill = color; 
  };

  const pulsing = pulse ? "icon" : "";

  return (
    <div
      onClick={handleClick}
      className={pulsing}
      ref={divRef}
      data-refkey="iconRef"
    >
      {React.cloneElement(children, {ref: iconRef})}
    </div>
  );
};

export default BurstIcon;
