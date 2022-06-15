import React from "react";

const button = (props: any) => {
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
