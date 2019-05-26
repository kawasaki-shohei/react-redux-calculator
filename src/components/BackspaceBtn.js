import React from "react";

const BackspaceBtn = ({ onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      ←
    </button>
  );
};

export default BackspaceBtn;
