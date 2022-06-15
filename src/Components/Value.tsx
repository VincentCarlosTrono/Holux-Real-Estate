import React, { useState } from "react";
import Title from "./Title";
import valueImg from "../Media/img/value.jpg";

const Value = () => {
  const [open, setOpen] = useState(false);

  console.log(open);

  const markets = [
    {
      text: "Best interest rates on the market",
      icon: <box-icon color="blue" name="shield-x" type="solid"></box-icon>,
      description:
        "Price we provides is the best for you, we guarantee no price changes on your property due to various unexpected costs that may come",
    },
    {
      text: "Prevent unstable prices",
      icon: <box-icon color="blue" name="x-square" type="solid"></box-icon>,
      description:
        "Price we provides is the best for you, we guarantee no price changes on your property due to various unexpected costs that may come",
    },
    {
      text: "Best prices on the market",
      icon: <box-icon color="blue" name="deezer" type="logo"></box-icon>,
      description:
        "Price we provides is the best for you, we guarantee no price changes on your property due to various unexpected costs that may come",
    },
    {
      text: "Security of your data",
      icon: <box-icon color="blue" name="checkbox-checked"></box-icon>,
      description:
        "Price we provides is the best for you, we guarantee no price changes on your property due to various unexpected costs that may come",
    },
  ];

  return (
    <div className="grid-container" id="value">
      <div className="container md:flex md:gap-12 justify-between">
        <div className="dark:bg-gray-900 bg-lightgray rounded-t-full p-5">
          <div className="rounded-t-full  overflow-hidden ">
            <img src={valueImg} alt="valueImage" />
          </div>
        </div>

        <div>
          <Title
            title="Our Value"
            subtitle="Value We Give To You"
            dot="."
            detail="We always ready to help by providing the best service for you. We
            believe a good place to live can make your life better."
          />
          <div className="md:py-10 py-5 px-2">
            {markets.map((market: any) => {
              const { text, icon, description } = market;
              return (
                <div className="shadow-md dark:shadow-darkblue p-3">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                      {icon}
                      <h1 className="text-darkblue dark:text-lightgray text-sm md:text-xl font-semibold py-5">
                        {text}
                      </h1>
                    </div>

                    <button
                      onClick={() => {
                        setOpen(!open);
                      }}
                    >
                      <div className="bg-lightgray dark:bg-darkblue h-6">
                        <box-icon color="blue" name="caret-down"></box-icon>
                      </div>
                    </button>
                  </div>

                  {open && (
                    <p className="max-w-md px-10 text-gray-400">
                      {description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Value;
