const Component = () => {
  return (
    <header className="self-stretch bg-mediumslateblue-300 flex flex-row items-start justify-between p-5 text-left text-xl text-gray-100 font-nunito">
      <div className="h-20 w-[360px] relative bg-mediumslateblue-300 hidden" />
      <div className="h-10 w-[79px] relative">
        <img
          className="absolute top-[7px] left-[0px] w-[26px] h-[26px] hidden z-[2]"
          alt=""
          src="/subtract.svg"
        />
        <div className="absolute top-[0.5px] left-[0px] flex flex-row items-center justify-start py-[7px] pr-3.5 pl-0">
          <div className="h-full w-full absolute my-0 mx-[!important] top-[-0.5px] right-[0px] bottom-[0.5px] left-[0px] rounded-31xl z-[1]" />
          <img
            className="h-[26px] w-[26px] relative z-[3]"
            loading="eager"
            alt=""
            src="/subtract.svg"
          />
        </div>
        <div className="absolute top-[6.5px] left-[37px] font-semibold z-[2]">
          Base
        </div>
      </div>
      <div className="h-10 w-10 relative rounded-31xl z-[1]" />
    </header>
  );
};

export default Component;
