import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const MenuFrame = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/upload");
  }, [navigate]);

  return (
    <section className="self-stretch flex flex-row items-start justify-start py-0 px-[13px] text-left text-base text-darkgray-200 font-nunito">
      <div className="flex flex-col items-start justify-start gap-[39px]">
        <div className="flex flex-row items-center justify-start gap-[14px]">
          <img
            className="h-6 w-6 relative object-cover min-h-[24px]"
            loading="eager"
            alt=""
            src="/iconlyboldcategory@2x.png"
          />
          <div className="h-[22px] relative font-semibold inline-block">
            Dashboard
          </div>
        </div>
        <button
          className="cursor-pointer [border:none] pt-0 px-0 pb-px bg-[transparent] flex flex-row items-start justify-start relative gap-[14px]"
          onClick={onGroupButtonClick}
        >
          <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
            <img
              className="w-6 h-[26.4px] relative object-cover"
              alt=""
              src="/iconlyboldchart@2x.png"
            />
          </div>
          <div className="relative text-base font-semibold font-nunito text-mediumslateblue-300 text-left">
            Upload
          </div>
          <div className="h-12 w-[105px] absolute my-0 mx-[!important] top-[-11px] left-[-33px] rounded-tl-none rounded-tr-8xs rounded-br-8xs rounded-bl-none [background:linear-gradient(90deg,_rgba(172,_169,_255,_0.2),_rgba(172,_169,_255,_0))] z-[1]" />
        </button>
        <div className="h-6 flex flex-row items-start justify-start gap-[14px] ">
          <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
            <img
              className="w-6 h-[16.4px] relative object-cover"
              loading="eager"
              alt=""
              src="/iconlyboldticket@2x.png"
            />
          </div>
          <div className="relative font-semibold inline-block h-[13.6px]">
            Invoice
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[14px]">
          <img
            className="h-[26.4px] w-6 relative object-cover"
            loading="eager"
            alt=""
            src="/iconlybolddocument@2x.png"
          />
          <div className="h-[22px] relative font-semibold inline-block">
            Schedule
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[14px]">
          <img
            className="h-[26.4px] w-6 relative object-cover"
            loading="eager"
            alt=""
            src="/calendar@2x.png"
          />
          <div className="h-[22px] relative font-semibold inline-block">
            Calendar
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[14px]">
          <img
            className="h-[26.4px] w-6 relative object-cover"
            loading="eager"
            alt=""
            src="/iconlyboldnotification@2x.png"
          />
          <div className="h-[22px] relative font-semibold inline-block">
            Notification
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[14px]">
          <img
            className="h-[26.4px] w-6 relative object-cover"
            loading="eager"
            alt=""
            src="/iconlyboldsetting@2x.png"
          />
          <div className="relative font-semibold">Settings</div>
        </div>
      </div>
    </section>
  );
};

export default MenuFrame;
