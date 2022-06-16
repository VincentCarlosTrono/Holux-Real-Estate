import React, { useContext, useEffect, useState } from "react";
import Button from "../Components/button";
import { ThemeContext } from "src/ContextAPI/ThemeContext";
import { HeaderListInterface, HeaderLists } from "src/type";

const HeaderNavLists = () => {
  const headerLists: HeaderLists = [
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
    <div className="md:flex hidden gap-14 justify-between items-center ">
      <ul className="flex justify-center gap-10 ">
        {headerLists.map((headerList: HeaderListInterface) => {
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
          <box-icon color={scroll ? "blue" : "white"} name="moon"></box-icon>
        )}
      </button>

      <a href="#start">
        <Button name="Subscribe" />
      </a>
    </div>
  );
};

export default HeaderNavLists;
