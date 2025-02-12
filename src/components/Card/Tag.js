const Tag = ({ tagName }) => {
  return (
    <div className="w-[32px] h-[22px] bg-[#FFECE1] flex justify-center items-center p-2 rounded-xl">
      <p className="text-[10px] text-[#FF6D00] font-semibold">{tagName}</p>
    </div>
  );
};

export default Tag;
