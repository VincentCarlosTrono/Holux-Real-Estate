import React from "react";
import { FooterInfoInterface, FooterInfos } from "src/type";

const FooterInformation = () => {
  const footerInfos: FooterInfos = [
    {
      title: "About",
      info1: "About Us",
      info2: "Features",
      info3: "News & Blog",
    },
    {
      title: "Company",
      info1: "How We Work?",
      info2: "Capital",
      info3: "Security",
    },
    {
      title: "Support",
      info1: "FAQs",
      info2: "Support Center",
      info3: "Contact Us",
    },
  ];
  return (
    <div className="grid md:grid-cols-3 grid-cols-2 gap-5 md:gap-20 pt-5">
      {footerInfos.map((footerInfo: FooterInfoInterface) => {
        const { title, info1, info2, info3 } = footerInfo;
        return (
          <div className=" md:pb-10">
            <h1 className="font-semibold text-darkblue pb-5 text-2xl dark:text-lightgray">
              {title}
            </h1>
            <div className="text-gray-500 ">
              <p className="py-1 hover:text-blue">{info1}</p>
              <p className="py-1 hover:text-blue">{info2}</p>
              <p className="py-1 hover:text-blue">{info3}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FooterInformation;
