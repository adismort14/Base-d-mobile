const NewFrame = () => {
  return (
    <section className="self-stretch h-[418px] flex flex-col items-start justify-start py-0 px-4 box-border gap-[24px] text-left text-base text-text font-nunito">
      <div className="flex flex-row items-start justify-start py-0 px-4">
        <b className="relative">Upload CSV</b>
      </div>
      <div className="self-stretch rounded-3xs bg-light-gohan shadow-[4px_4px_15px_rgba(0,_0,_0,_0.04)] flex flex-col items-center justify-start p-4 gap-[16px] text-center text-sm text-dark-trunks font-figtree">
        <div className="self-stretch rounded-lg flex flex-col items-center justify-start py-[91px] px-14 gap-[16px] z-[1] border-[1px] border-dashed border-light-beerus-hover mq450:pl-5 mq450:pr-5 mq450:box-border">
          <img
            className="w-9 h-9 relative"
            loading="eager"
            alt=""
            src="/frame-7682.svg"
          />
          <div className="relative leading-[24px]">
            <span>{`Upload your excel sheet `}</span>
            <span className="text-mediumslateblue-300">{`here `}</span>
          </div>
          <div className="w-[296px] relative rounded-lg box-border h-[258px] hidden border-[1px] border-dashed border-light-beerus-hover" />
        </div>
        <button className="cursor-pointer [border:none] py-[11px] pr-[113px] pl-[105px] bg-mediumslateblue-300 self-stretch rounded-lg overflow-hidden flex flex-row items-start justify-center gap-[8px] opacity-[0.4] hover:bg-mediumslateblue-200 mq450:pl-5 mq450:pr-5 mq450:box-border">
          <img
            className="h-6 w-6 relative min-h-[24px]"
            alt=""
            src="/icon.svg"
          />
          <div className="relative text-sm leading-[24px] font-semibold font-figtree text-light-gohan text-left">
            Upload
          </div>
        </button>
      </div>
    </section>
  );
};

export default NewFrame;
