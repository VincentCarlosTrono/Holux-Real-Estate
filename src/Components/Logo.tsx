import React from "react";

const Logo = ({ scroll }) => {
  return (
    <div className="flex items-center gap-2">
      <a href="/">
        <h1
          className={
            scroll
              ? "text-blue hover:text-lightblue hover:cursor-pointer"
              : "white hover:cursor-pointer hover:text-blue"
          }
        >
          Holux
        </h1>
      </a>
      <box-icon
        color={scroll ? "blue" : "white"}
        name="home-alt-2"
        type="solid"
      ></box-icon>
    </div>
  );
};

export default Logo;
