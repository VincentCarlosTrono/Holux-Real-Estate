import React from "react";
import Copyright from "./Copyright";
import FooterIcons from "./FooterIcons";
import FooterInformation from "./FooterInformation";

const Footer = () => {
  return (
    <div className="grid-container py-14 md:py-28" data-aos="fade-up">
      <div className="container">
        <div className=" md:flex  justify-between">
          <div className="">
            <div className="flex gap-2 items-center">
              <h1 className="font-semibold text-blue text-2xl py-2 ">Holux</h1>
              <box-icon color="blue" name="home-alt-2" type="solid"></box-icon>
            </div>
            <p className="max-w-xs text-gray-500">
              Our vision is to make all people the best place to live for them.
            </p>
          </div>
          <FooterInformation />
          <FooterIcons />
        </div>
        <Copyright />
      </div>
    </div>
  );
};

export default Footer;
