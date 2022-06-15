import React from "react";

const Start = () => {
  return (
    <div className="grid-container py-14 md:py-28" id="start">
      <div className="container bg-lightblue dark:bg-gray-700 p-3 rounded-3xl">
        <div className="text-center bg-blue dark:bg-darkblue py-10 md:py-20 rounded-3xl">
          <h1 className="md:text-5xl text-2xl font-semibold  text-white">
            Get Started With Holux
          </h1>
          <p className="md:px-96 text-md  text-lightgray py-10">
            Subscribe and find super attractive price qoutes from us, find your
            residence soon.
          </p>
          <a href="/">
            <button className="text-white text-md md:text-xl bg-lightblue hover:bg-blue border-white border-2 p-3 rounded-2xl">
              Get Started
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Start;
