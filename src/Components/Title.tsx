import React from "react";

const Title = (residences: any) => {
  const { title, subtitle, dot, detail } = residences;
  return (
    <div>
      <p className="text-orange-700 py-2 font-semibold">{title}</p>
      <h1 className="text-5xl pb-10 font-semibold text-blue dark:text-lightgray">
        {subtitle}
        <span className="text-orange-500">{dot}</span>
      </h1>
      <p className="max-w-md text-gray-400 ">{detail}</p>
    </div>
  );
};

export default Title;
