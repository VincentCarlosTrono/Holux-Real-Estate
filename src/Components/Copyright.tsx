import React from "react";

const Copyright = () => {
  return (
    <div className="md:pt-32 pt-10 md:flex justify-between text-gray-500">
      <div className="md:flex hidden  ">
        <box-icon color="gray" name="copyright"></box-icon>
        <h1>Vince, All right reserved</h1>
      </div>
      <div className="flex gap-5">
        <h1>Terms & Agreement</h1>
        <h1>Privacy Policy</h1>
      </div>
      <div className="flex md:hidden pt-10 items-center justify-center">
        <box-icon color="gray" name="copyright"></box-icon>
        <h1>Vince, All right reserved</h1>
      </div>
    </div>
  );
};

export default Copyright;
