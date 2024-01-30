import MenuFrame from "./MenuFrame";

const Menu = ({ onClose }) => {
  return (
    <div className="w-[300px] h-[600px] rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none bg-light-gohan overflow-hidden flex flex-col items-center justify-start pt-7 pb-[261px] pr-[21px] pl-5 box-border gap-[43px] max-w-full max-h-full text-left text-xl text-text font-nunito">
      <div className="self-stretch flex flex-row items-center justify-start gap-[11px]">
        <div className="flex-1 flex flex-col items-start justify-start">
          <div className="h-[27px] relative font-semibold inline-block">
            Base
          </div>
        </div>
        <div className="h-10 w-10 relative">
          <div className="absolute top-[0px] left-[0px] rounded-31xl w-10 h-10" />
          <div onClick={onClose}>
            {" "}
            <img
              className="absolute top-[9px] left-[8.4px] w-[22.6px] h-[22.6px] object-contain z-[1]"
              loading="eager"
              alt=""
              src="/plus.svg"
            />
          </div>
        </div>
      </div>
      <MenuFrame />
    </div>
  );
};

export default Menu;
