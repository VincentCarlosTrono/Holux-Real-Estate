import React, { useEffect, useState } from "react";
import Button from "./button";

const Header = () => {
  const headerLists = [
    {
      name: "Home",
    },
    {
      name: "Residences",
    },
    {
      name: "Value",
    },
    {
      name: "Contact",
    },
  ];

  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, []);

  return (
    <div
      className={`grid-container fixed w-full text-white ${
        scroll && "bg-white shadow-md text-black"
      }`}
    >
      <div className="container flex justify-between py-5 items-center text-lg font-semibold">
        <div className="flex items-center gap-2">
          <h1 className=""> Holux</h1>
          <box-icon
            color={scroll ? "black" : "white"}
            name="building-house"
          ></box-icon>
        </div>
        <div className="flex gap-14 justify-between items-center">
          <ul className="flex justify-center gap-10 ">
            {headerLists.map((headerList: any) => {
              const { name } = headerList;
              return (
                <li className="hover:text-blue hover:cursor-pointer">{name}</li>
              );
            })}
          </ul>
          <box-icon color={scroll ? "black" : "white"} name="moon"></box-icon>
          <Button name="Subscribe" />
        </div>
      </div>
    </div>
  );
};

export default Header;
