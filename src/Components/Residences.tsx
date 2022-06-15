import React from "react";
import house1 from "../Media/img/popular1.jpg";
import house2 from "../Media/img/popular2.jpg";
import house3 from "../Media/img/popular3.jpg";
import house4 from "../Media/img/popular4.jpg";
import house5 from "../Media/img/popular5.jpg";
import Title from "./Title";

const Residences = () => {
  const houses = [
    {
      image: house1,
      price: "47,046",
      name: "Aliva Private Garden",
      description:
        "Streen The Garden City Of Milaflores Lima - Peru Av. Sol #9876",
    },
    {
      image: house2,
      price: "66,356",
      name: "Garden City Assat",
      description:
        "Streen The Garden City Of Milaflores Lima - Peru Av. Sol #9876",
    },
    {
      image: house3,
      price: "35,159",
      name: "Grables Luxurious House",
      description:
        "Streen The Garden City Of Milaflores Lima - Peru Av. Sol #9876",
    },
    {
      image: house4,
      price: "75,043",
      name: "Garden Orchard City",
      description:
        "Streen The Garden City Of Milaflores Lima - Peru Av. Sol #9876",
    },
    {
      image: house5,
      price: "62,024",
      name: "Luxurious City Garden",
      description:
        "Streen The Garden City Of Milaflores Lima - Peru Av. Sol #9876",
    },
  ];

  return (
    <div className="grid-container py-16" id="residences">
      <div className="container">
        <Title title="Best Choices" subtitle="Popular Residences" dot="." />

        <div className="grid grid-cols-3 gap-14 p-10">
          {houses.map((house: any) => {
            const { image, price, name, description } = house;
            return (
              <div className="p-5 dark:hover:shadow-darkblue hover:shadow-xl rounded-md hover:cursor-pointer">
                <div className="rounded-xl overflow-hidden">
                  <img src={image} alt="houseImages" />
                </div>
                <div className="flex font-semibold py-3 text-2xl">
                  <h1 className="text-orange-500">$</h1>
                  <h1 className="text-gray-500 ">{price}</h1>
                </div>

                <h3 className="py-2 text-xl font-semibold text-darkblue dark:text-lightgray ">
                  {name}
                </h3>
                <p className="text-gray-400">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Residences;
