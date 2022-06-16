import React from "react";
import { ButtonPropsInterface } from "src/type";

const button = (props: ButtonPropsInterface) => {
  const { name } = props;
  return (
    <div>
      <button className="bg-blue shadow-md shadow-blue text-white py-4 px-6 rounded-md">
        {name}
      </button>
    </div>
  );
};

export default button;
