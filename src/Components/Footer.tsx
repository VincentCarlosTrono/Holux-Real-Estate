import React from "react";

const Footer = () => {
  const footerInfos = [
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

  const footerIcons = [
    {
      icon: <box-icon color="blue" name="facebook" type="logo"></box-icon>,
    },
    {
      icon: <box-icon color="blue" name="instagram-alt" type="logo"></box-icon>,
    },
    {
      icon: <box-icon color="blue" name="pinterest" type="logo"></box-icon>,
    },
  ];
  return (
    <div className="grid-container py-28">
      <div className="container">
        <div className=" flex justify-between">
          <div>
            <div className="flex gap-2 items-center">
              <h1 className="font-semibold text-blue text-2xl py-2">Holux</h1>
              <box-icon color="blue" name="home-alt-2" type="solid"></box-icon>
            </div>
            <p className="max-w-xs text-gray-500">
              Our vision is to make all people the best place to live for them.
            </p>
          </div>
          <div className="flex gap-20">
            {footerInfos.map((footerInfo: any) => {
              const { title, info1, info2, info3 } = footerInfo;
              return (
                <div>
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
          <div>
            <h1 className="text-darkblue text-2xl font-semibold pb-5 dark:text-lightgray">
              Follow Us
            </h1>
            <div className="flex gap-2">
              {footerIcons.map((footerIcon: any) => {
                const { icon } = footerIcon;
                return (
                  <div className="opacity-50 hover:opacity-100 hover:cursor-pointer">
                    {icon}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="pt-32 flex justify-between text-gray-500">
          <div className="flex">
            <box-icon color="gray" name="copyright"></box-icon>
            <h1>Vince, All right reserved</h1>
          </div>
          <div className="flex gap-5">
            <h1>Terms & Agreement</h1>
            <h1>Privacy Policy</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;