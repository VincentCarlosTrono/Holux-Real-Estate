import React from "react";
import home from "../Media/img/home.jpg";
import Button from "./button";

const Hero = () => {
  const subscriptions = [
    {
      total: "9K",
      text: "Premium Products",
    },
    {
      total: "2K",
      text: "Happy Customer",
    },
    {
      total: "28K",
      text: "Awards Winning",
    },
  ];

  return (
    <div
      className="grid-container pt-28 md:pt-80 bg-gradient-to-tl from-lightblack to-darkblue"
      id="#"
    >
      <div className="container">
        <div className="block md:flex gap-44 items-center">
          <div data-aos="fade-right">
            <h1 className="md:text-7xl text-5xl max-w-md md:max-w-lg font-bold py-10 text-white">
              Discover Most Suitable Property
            </h1>
            <p className="max-w-sm text-md text-gray-400">
              Find a variety of properties that suit you very easily, forget all
              difficulties in finding a resindence for you.
            </p>
            <div className="py-7">
              <div className=" flex items-center md:gap-3 px-2 py-2 dark:bg-darkblue bg-white md:justify-between rounded-xl">
                <div className="flex items-center md:gap-2">
                  <box-icon color="blue" name="location-plus"></box-icon>

                  <input
                    className="py-3 w-full  md:px-7 border-l-2 dark:bg-darkblue"
                    type="text"
                    placeholder="search by location"
                  />
                </div>
                <Button name="Search" />
              </div>
            </div>
            <div className="flex md:gap-10 py-5">
              {subscriptions.map((subscription: any) => {
                const { total, text } = subscription;
                return (
                  <div>
                    <div className="flex">
                      <h1 className="md:text-4xl text-2xl font-semibold text-white">
                        {total}
                      </h1>
                      <p className="md:text-4xl text-2xl font-semibold text-orange-600">
                        +
                      </p>
                    </div>

                    <p className="text-gray-400 md:max-w-xs ">{text}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className="p-5  bg-lightgray rounded-t-full   block"
            data-aos="fade-left"
          >
            <div className="rounded-t-full  overflow-hidden shadow-2xl   opacity-100 -mb-10">
              <img className="md:h-full h-80 w-full" src={home} alt="home" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
