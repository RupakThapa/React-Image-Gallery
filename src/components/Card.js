import React, { useState } from "react";
import "./Card.css";
import { IoMdDownload } from "react-icons/io";
import Modal from "react-modal";
import { AiFillCloseCircle } from "react-icons/ai";

const Card = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalopen, setmodalopen] = useState(0);

  function toggleModal() {
    setIsOpen(!isOpen);
    setmodalopen(2);
  }

  // function Returnclick() {
  //   return (
  //     <a className="testbutton" href={props.src + ".png"}>
  //       <IoMdDownload />
  //     </a>
  //   );
  // }
  return (
    <div onClick={toggleModal} className="cardx" src={props.src}>
      <img className="mainimg" src={props.src + "t.png"} />
      <a
        className={modalopen < 1 ? "testbutton" : "testbutton2"}
        href={props.src + ".png"}
      >
        <IoMdDownload /> Download
      </a>
      {/* <Returnclick /> */}
      {/* <button onClick={toggleModal}>Open modal</button> */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
      >
        <div className="overlayholder">
          <img className="mainimg" src={props.src + "t.png"} />
          <h2>How to Download in High Quality</h2>
          <p>Close this and click download icon</p>
        </div>

        {/* <Returnclick /> */}
        {/* <a href={props.src}>clcik here</a>{" "} */}

        <div onClick={toggleModal}>
          <AiFillCloseCircle size={32} />
        </div>
      </Modal>
    </div>
  );
};

export default Card;
