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
    <div className="grid-container pt-80 bg-black">
      <div className="container">
        <div className=" flex gap-44 items-center">
          <div>
            <h1 className="text-7xl max-w-lg font-bold py-10 text-white">
              Discover Most Suitable Property
            </h1>
            <p className="max-w-sm text-md text-gray-500">
              Find a variety of properties that suit you very easily, forget all
              difficulties in finding a resindence for you.
            </p>
            <div className="py-7">
              <div className=" flex items-center gap-3 px-2 py-2 bg-white justify-between rounded-xl">
                <div className="flex items-center gap-2">
                  <box-icon color="blue" name="location-plus"></box-icon>
                  <input
                    className="py-3 px-7 border-l-2"
                    type="text"
                    placeholder="search by location"
                  />
                </div>
                <Button name="Search" />
              </div>
            </div>
            <div className="flex gap-10">
              {subscriptions.map((subscription: any) => {
                const { total, text } = subscription;
                return (
                  <div>
                    <div className="flex ">
                      <h1 className="text-4xl font-semibold text-white">
                        {total}
                      </h1>
                      <p className="text-4xl font-semibold text-orange-600">
                        +
                      </p>
                    </div>

                    <p className="text-gray-500 max-w-xs">{text}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="p-5 bg-lightgray rounded-t-full">
            <div className="rounded-t-full overflow-hidden shadow-2xl  opacity-100 -mb-10">
              <img src={home} alt="home" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
