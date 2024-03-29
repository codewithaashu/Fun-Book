import React from "react";
import { MdOutlineSocialDistance } from "react-icons/md";

const Logo = () => {
  return (
    <div className="flex gap-1 w-fit items-center">
      <div className="p-2 rounded-full bg-blue">
        <MdOutlineSocialDistance size={"14px"} />
      </div>
      <p className="text-lg font-semibold text-blue">FunBook</p>
    </div>
  );
};

export default Logo;
