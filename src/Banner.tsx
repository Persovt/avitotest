import React from "react";
import Draggable from "react-draggable";
import { propsType } from "./App";

interface props {
  testInit: (atg: HTMLDivElement) => void;
  data: propsType;
}

const banner = ({ testInit, data }: props) => {
  return (
    <div
      className="banner"
      ref={testInit}
      style={{ background: data.BgColor }}
      onDoubleClick={() => (window.location.href = data.redirectURL)}
    >
      <Draggable bounds="parent">
        <img
          draggable="false"
          style={{ maxWidth: 500 }}
          src={data.imageURL}
          alt="Banner Image"
        />
      </Draggable>
      <Draggable bounds="parent">
        <p style={{ width: 300, color: data.FontColor }} className="card-text">
          {data.cardText}
        </p>
      </Draggable>
    </div>
  );
};

export default banner;
