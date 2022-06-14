import React from "react";

const button = (props: any) => {
  const { name } = props;
  return (
    <button className="bg-blue text-white py-4 px-6 rounded-md">{name}</button>
  );
};

export default button;
