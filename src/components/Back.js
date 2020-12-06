import React from "react";
import "./Back.css";

import { IoIosArrowBack } from "react-icons/io";

const Back = () => {
  return (
    <div className="back">
      <a href="market://details?id=com.gaming.logomaker">
        <IoIosArrowBack className="backarrow" size={32} color={"white"} />
      </a>
    </div>
  );
};

export default Back;
