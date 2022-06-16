import React, { useState } from "react";
import Title from "./Title";
import Markets from "./Markets";
import valueImg from "../Media/img/value.jpg";

const Value = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="grid-container" id="value">
      <div className="container md:flex md:gap-12 justify-between">
        <div
          className="dark:bg-gray-900 bg-lightgray rounded-t-full p-5"
          data-aos="fade-right"
        >
          <div className="rounded-t-full  overflow-hidden ">
            <img src={valueImg} alt="valueImage" />
          </div>
        </div>

        <div data-aos="fade-left">
          <Title
            title="Our Value"
            subtitle="Value We Give To You"
            detail="We always ready to help by providing the best service for you. We
            believe a good place to live can make your life better."
          />
          <Markets open={open} setOpen={setOpen} />
        </div>
      </div>
    </div>
  );
};

export default Value;
