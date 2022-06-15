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

  const [open, setOpen] = useState(false);

  const { darkmode, setDarkmode } = useContext(ThemeContext);

  return (
    <div
      className={`grid-container sticky top-0 w-full bg-darkblue  text-white z-10 ${
        scroll && "dark:bg-lightblack text-blue bg-white shadow-md "
      }`}
    >
      <div className="container max-w-full flex justify-between py-5 items-center text-lg font-semibold">
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
        <div className="md:flex hidden gap-14 justify-between items-center">
          <ul className="flex justify-center gap-10 ">
            {headerLists.map((headerList: any) => {
              const { name, path } = headerList;
              return (
                <a href={path}>
                  <li
                    className={`text-white hover:text-blue hover:cursor-pointer  ${
                      scroll && " text-lightblack dark:text-lightgray"
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
        <div className="md:hidden block">
          <button
            onClick={() => {
              setOpen(!open);
            }}
          >
            <box-icon
              color={scroll ? "blue" : "white"}
              name="grid-alt"
            ></box-icon>
          </button>
          {open && (
            <ul className="absolute text-2xl top-16 right-0 text-right px-5 py-10 w-full bg-lightblue">
              {headerLists.map((headerList: any) => {
                const { name, path } = headerList;
                return (
                  <a href={path}>
                    <li
                      onClick={() => {
                        setOpen(!open);
                      }}
                      className={`text-white leading-10 hover:text-blue hover:cursor-pointer${
                        scroll && "text-lightblack dark:text-lightgray"
                      }`}
                    >
                      {name}
                    </li>
                  </a>
                );
              })}
            </ul>
          )}
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
        </div>
      </div>
    </div>
  );
};

export default Header;
