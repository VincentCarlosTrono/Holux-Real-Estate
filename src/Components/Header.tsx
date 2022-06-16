import React, { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../ContextAPI/ThemeContext";
import HeaderNavLists from "./HeaderNavLists";
import Logo from "./Logo";
import MenuList from "./MenuList";

const Header = () => {
  const [scroll, setScroll] = useState(0);
  const [open, setOpen] = useState(false);
  const { darkmode, setDarkmode } = useContext(ThemeContext);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, []);

  return (
    <div
      className={`grid-container sticky top-0 w-full bg-darkblue  text-white z-10 ${
        scroll && "dark:bg-lightblack text-blue bg-white shadow-md "
      }`}
    >
      <div className="container max-w-full flex justify-between py-5 items-center text-lg font-semibold">
        <Logo scroll={scroll} />
        <HeaderNavLists />
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
          <MenuList open={open} setOpen={setOpen} scroll={scroll} />
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
