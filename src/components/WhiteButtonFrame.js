import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const WhiteButtonFrame = () => {
  const navigate = useNavigate();

  const onButtonPrimaryClick = useCallback(() => {
    navigate("/upload");
  }, [navigate]);

  return (
    <form className="m-0 h-[489.8px] flex-1 relative">
      <button className="cursor-pointer [border:none] pt-[9px] px-4 pb-[7px] bg-[transparent] absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-[9px]">
        <div className="h-[calc(100%_-_0.1px)] w-[calc(100%_-_0.6px)] absolute my-0 mx-[!important] top-[0.3px] right-[0.6px] bottom-[-0.2px] left-[0px]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs bg-light-gohan" />
        </div>
        <img
          className="h-3 w-3 relative overflow-hidden shrink-0 object-cover z-[1]"
          alt=""
          src="/googleicon-1@2x.png"
        />
        <div className="relative text-3xs font-montserrat text-secondary-text text-center z-[1]">
          Sign in with Google
        </div>
      </button>
      <button className="cursor-pointer [border:none] pt-2 px-5 pb-[7px] bg-[transparent] absolute top-[0px] left-[174px] h-[33px] flex flex-row items-start justify-start box-border gap-[9px]">
        <div className="h-[calc(100%_-_0.1px)] w-[calc(100%_+_0.4px)] absolute my-0 mx-[!important] top-[0.3px] right-[-0.8px] bottom-[-0.2px] left-[0.4px]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs bg-light-gohan" />
        </div>
        <img
          className="h-[15.4px] w-[9.8px] relative overflow-hidden shrink-0 object-cover z-[1]"
          alt=""
          src="/apple-1@2x.png"
        />
        <div className="relative text-3xs font-montserrat text-secondary-text text-center z-[1]">
          Sign in with Apple
        </div>
      </button>
      <div className="absolute top-[60px] left-[0px] w-[328px] h-[352px] flex flex-col items-center justify-start pt-[33px] pb-[34px] pr-[25px] pl-[26px] box-border gap-[23px]">
        <div className="w-full h-[calc(100%_-_4px)] absolute my-0 mx-[!important] top-[0.2px] right-[0px] bottom-[3.8px] left-[0px]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl bg-light-gohan" />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[13px]">
          <div className="w-[111.6px] relative text-base font-lato text-light-popo text-left inline-block z-[1]">
            Email address
          </div>
          <div className="flex flex-row items-center justify-start">
            <div className="h-[43.9px] w-[276.9px] relative z-[1]">
              <div className="absolute h-full w-full top-[-0.11%] right-[0.14%] bottom-[0.11%] left-[-0.14%] rounded-3xs bg-background" />
            </div>
            <input
              className="w-[239px] [border:none] [outline:none] font-lato text-base bg-[transparent] h-[19px] relative text-light-popo text-left inline-block z-[2] ml-[-264px]"
              placeholder=""
              type="text"
            />
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[13px]">
          <div className="relative text-base font-lato text-light-popo text-left z-[1]">
            Password
          </div>
          <div className="flex flex-row items-center justify-start">
            <div className="h-[43.9px] w-[276.9px] relative z-[1]">
              <div className="absolute h-full w-full top-[-0.11%] right-[0.14%] bottom-[0.11%] left-[-0.14%] rounded-3xs bg-background" />
            </div>
            <input
              className="w-[239px] [border:none] [outline:none] font-lato text-base bg-[transparent] h-[19px] relative text-light-popo text-left inline-block z-[2] ml-[-264px]"
              placeholder=""
              type="password"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start">
          <div className="w-[153.1px] relative text-base font-lato text-link text-left inline-block shrink-0 z-[1]">
            Forgot password?
          </div>
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch h-11 relative"
          onClick={onButtonPrimaryClick}
        >
          <div className="absolute top-[0.4px] left-[-0.4px] w-[276.9px] h-[43.9px] z-[1]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-mediumslateblue-300 cursor-pointer" />
          </div>
          <b className="absolute top-[10.2px] left-[99.7px] text-base inline-block font-montserrat text-light-gohan text-center w-[77.7px] z-[2]">
            Sign In
          </b>
        </button>
      </div>
      <div className="absolute top-[433.1px] left-[62.9px] text-base font-lato text-center inline-block w-[202.6px]">
        <p className="m-0 text-secondary-text">{`Don’t have an account? `}</p>
        <p className="m-0 text-link">&nbsp;</p>
        <p className="m-0 text-link">Register here</p>
      </div>
    </form>
  );
};

export default WhiteButtonFrame;
