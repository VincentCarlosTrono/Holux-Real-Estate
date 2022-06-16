import React from "react";
import {
  HeaderListInterface,
  HeaderLists,
  MenuListPropsInterface,
} from "src/type";

const MenuList = (props: MenuListPropsInterface) => {
  const { open, setOpen, scroll } = props;

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
  return (
    <>
      {open && (
        <ul className="absolute text-2xl top-16 right-0 text-right px-5 py-10 w-full bg-lightblue">
          {headerLists.map((headerList: HeaderListInterface) => {
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
    </>
  );
};

export default MenuList;
