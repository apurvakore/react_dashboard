import React from "react";

export const ProjectItem = ({ image, title, icon1, icon2, icon3, icon4, budget, width, color1, color2 }) => {
  const gradientStyle = {
    background: `linear-gradient(to bottom right, ${color1}, ${color2})`,
    width: width
  };

  return (
    <div className="row px-4 flex space-x-2 border-t py-1">
      <div className="col-1 w-[45%] flex space-x-2 items-center justify-start">
        <img className="w-[40px]" src={image} alt={title} />
        <div className="text-sm font-semibold text-[#344767]">{title}</div>
      </div>

      <div className="col-2 w-[15%] pr-[3px] py-4">
        <div className="flex -space-x-2 rtl:space-x-reverse">
          {icon1 && <img className="w-6 h-6 border-2 border-white rounded-full" src={icon1} alt="" />}
          {icon2 && <img className="w-6 h-6 border-2 border-white rounded-full" src={icon2} alt="" />}
          {icon3 && <img className="w-6 h-6 border-2 border-white rounded-full" src={icon3} alt="" />}
          {icon4 && <img className="w-6 h-6 border-2 border-white rounded-full" src={icon4} alt="" />}
        </div>
      </div>

      <div className="col-3 w-[10%] py-4 text-[13px] font-semibold text-[#68758F]">
        {budget}
      </div>

      <div className="col-4 w-[30%] flex items-center px-2">
        <div className="w-full flex items-center bg-gray-200 rounded-full h-1">
          <div
            className="h-1.5 rounded-full"
            style={gradientStyle}
          ></div>
        </div>
      </div>
    </div>
  );
};
