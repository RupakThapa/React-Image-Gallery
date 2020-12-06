import React, { useState } from "react";
import "./App.css";
import Back from "./Back";
import Card from "./Card";
import Help from "./Help";
import logo from "./data";
import Lazyload from "react-lazyload";

const Spinner = () => (
  <div className="post loading">
    <img src="https://i.imgur.com/m7lErCM.gif" />
  </div>
);

function shuffle(arra1) {
  var ctr = arra1.length,
    temp,
    index;

  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);

    ctr--;
    temp = arra1[ctr];
    arra1[ctr] = arra1[index];
    arra1[index] = temp;
  }
  return arra1;
}
const randArray = shuffle(logo);

function cardfunction() {
  return <Card src={logo.src} download={logo.download} />;
}

function App() {
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });

  return (
    <div className="outerDiv">
      <div className="App">
        <div className="container">
          {/* <div className="topbar">
            <p style={{ color: "white" }}>If you have problems click ? icon</p>
            <Help className="helpicon" />
          </div> */}
          <div className="heading">
            <h2>Logo Gallery</h2>
            <p>Download your Logo.</p>
          </div>
        </div>
        {/* the above container is for having margin */}
        <div className="roundeddiv">
          <h2 className="recent">Recently Added</h2>

          <div className="gridcontainer">
            {randArray.map((logo) => {
              return (
                <Lazyload
                  key={logo.src}
                  height={100}
                  offset={[-100, 100]}
                  placeholder={<Spinner />}
                >
                  <Card key={logo.src} src={logo.src} />
                </Lazyload>
              );
            })}
          </div>
        </div>

        {/* <div className="ad">
          <a href="https://droiddynasty.com/outfromwebapp">
            <img src="https://i.imgur.com/0C5pdXG.gif" alt="" />
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default App;
