import Image from "next/image";
import React from "react";

const AlertBox = ({ title, description, type }) => {
  const colorPerType = {
    error: {
      bgColor: "bg-[#FFF8F8]",
      borderColor: "border-[#F85640]",
      titleColor: "text-[#F85640]",
      descriptionColor: "text-[#79170A]",
    },
    attention: {
      bgColor: "bg-[#FFF8F8]",
      borderColor: "border-[#FBA63C]",
      titleColor: "text-[#E18109]",
      descriptionColor: "text-[#BC741A]",
    },
    success: {
      bgColor: "bg-[#DCF3EB]",
      borderColor: "border-[#34A770]",
      titleColor: "text-[#13854E]",
      descriptionColor: "text-[#10673E]",
    },
    other: {
      bgColor: "bg-[#E1F2FC]",
      borderColor: "border-[#08A0F7]",
      titleColor: "text-[#08A0F7]",
      descriptionColor: "text-[#3387B7]",
    },
  };

  const { bgColor, borderColor, titleColor, descriptionColor } =
    colorPerType[type];

  return (
    <div
      className={`w-[340px] h-[80px] border-[2px] rounded-md flex items-center justify-center ${bgColor} ${borderColor}`}
    >
      <div className="w-3/12 h-full flex items-center justify-center">
        <Image
          width={30}
          height={30}
          src={`/AlertBoxIcons/${type}.png`}
          alt={`${type} icon`}
        />
      </div>
      <div className="w-9/12 flex flex-col gap-[5px]">
        <h3 className={`text-[14px] font-bold ${titleColor}`}>{title}</h3>
        <p className={`text-[12px] font-medium ${descriptionColor}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default AlertBox;
