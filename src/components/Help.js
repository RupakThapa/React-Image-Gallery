import React from "react";
import "./Help.css";
import { BiHelpCircle } from "react-icons/bi";

const Help = () => {
  return (
    <div className="help">
      <a href="https://droiddynasty.com/tutorialwebapp">
        <BiHelpCircle className="helpcircle" size={32} color={"white"} />
      </a>
    </div>
  );
};

export default Help;
