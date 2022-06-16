import React from "react";

const FooterIcons = () => {
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
    <div>
      <h1 className="text-darkblue text-2xl font-semibold py-5 dark:text-lightgray">
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
  );
};

export default FooterIcons;
