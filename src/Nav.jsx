import React from "react";
function Nav({ handleClick }) {
  return (
    <div className="nav">
      <button className=" text-2xl md:text-4xl font-bold text-middleGreen font-spaceGrotesk" onClick={() => handleClick("/")}>
        Home
      </button>
      <button
        className=" text-2xl md:text-4xl font-bold text-middleGreen font-spaceGrotesk"
        onClick={() => handleClick("/about")}
      >
        About
      </button>
    </div>
  );
}

export default Nav;
