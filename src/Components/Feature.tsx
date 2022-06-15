import React from "react";
import logo1 from "../Media/img/logo1.png";
import logo2 from "../Media/img/logo2.png";
import logo3 from "../Media/img/logo3.png";
import logo4 from "../Media/img/logo4.png";

const Feature = () => {
  const logos = [
    {
      image: logo1,
    },
    {
      image: logo2,
    },
    {
      image: logo3,
    },
    {
      image: logo4,
    },
  ];

  return (
    <div className="grid-container">
      <div className="container">
        <div className="flex py-32  gap-10">
          {logos.map((logo: any) => {
            const { image } = logo;
            return (
              <div className="hover:opacity-100 opacity-50">
                <img src={image} alt="logos" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Feature;
