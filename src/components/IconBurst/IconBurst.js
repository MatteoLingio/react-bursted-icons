import React, { useState, useEffect } from "react";
import "./IconBurst.css";

const BurstIcon = ({ children, pulse }) => {
  //   const [element, setElement] = useState({});

  useEffect(() => {
    console.log(pulse);
  }, []);

  const pulsing = pulse ? 'icon' : ''

  return (
    <div className={pulsing}>
      {React.cloneElement(children, {})}
    </div>
  );
};

export default BurstIcon;
