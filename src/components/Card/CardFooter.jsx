const { default: Image } = require("next/image");
const { default: React } = require("react");

const CardFooter = ({ creationDay, creationMonth }) => {
  return (
    <div className="h-[23%] p-4 mb-1">
      <div className="w-full h-[1px] bg-[#FFFFFF] my-2" />
      <div className="flex justify-between text-white">
        <span>Priority 1</span>
        <div className="flex items-center gap-2">
          <Image
            src="/calendarIcon.png"
            alt="Calendar Icon"
            width={20}
            height={20}
            priority
          />
          <div className="flex gap-[1px] text-[#FFFFFF]">
            <span>{creationDay}</span>
            <span>{creationMonth}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFooter;
