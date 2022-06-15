/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useContext } from "react";
import Button from "./button";
import { ThemeContext } from "../ContextAPI/ThemeContext";

const Header = () => {
  const headerLists = [
    {
      name: "Home",
      path: "#",
    },
    {
      name: "Residences",
      path: "#residences",
    },
    {
      name: "Value",
      path: "#value",
    },
    {
      name: "Contact",
      path: "#contact",
    },
  ];

  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, []);

  const { darkmode, setDarkmode } = useContext(ThemeContext);

  return (
    <div
      className={`grid-container fixed w-full text-white z-10 ${
        scroll && "dark:bg-lightblack bg-white shadow-md text-darkblue"
      }`}
    >
      <div className="container flex justify-between py-5 items-center text-lg font-semibold">
        <div className="flex items-center gap-2">
          <a href="#">
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
        <div className="flex gap-14 justify-between items-center">
          <ul className="flex justify-center gap-10 ">
            {headerLists.map((headerList: any) => {
              const { name, path } = headerList;
              return (
                <a href={path}>
                  <li
                    className={`text-white hover:text-blue hover:cursor-pointer ${
                      scroll && "text-lightblack dark:text-lightgray"
                    }`}
                  >
                    {name}
                  </li>
                </a>
              );
            })}
          </ul>
          <button
            className="px-3"
            onClick={() => {
              setDarkmode(!darkmode);
            }}
          >
            {darkmode ? (
              <box-icon color={scroll ? "blue" : "white"} name="sun"></box-icon>
            ) : (
              <box-icon
                color={scroll ? "blue" : "white"}
                name="moon"
              ></box-icon>
            )}
          </button>

          <a href="#start">
            <Button name="Subscribe" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
