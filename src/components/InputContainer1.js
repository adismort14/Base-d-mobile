import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const InputContainer1 = () => {
  const navigate = useNavigate();

  const onSizemdIconLeftTypePrimaClick = useCallback(() => {
    navigate("/uploading");
  }, [navigate]);

  return (
    <section className="w-[328px] h-[352px] rounded-3xs bg-light-gohan shadow-[4px_4px_15px_rgba(0,_0,_0,_0.04)] flex flex-col items-center justify-end pt-0 px-4 pb-4 box-border gap-[16px] max-w-full text-center text-sm text-dark-trunks font-figtree">
      <div className="self-stretch h-[258px] rounded-lg box-border overflow-hidden shrink-0 flex flex-col items-center justify-center border-[1px] border-dashed border-light-beerus-hover">
        <div className="flex flex-col items-center justify-start py-0 px-5 gap-[16px]">
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
        </div>
      </div>
      <button
        className="cursor-pointer [border:none] py-2 pr-4 pl-2 bg-mediumslateblue-300 self-stretch h-[46px] rounded-lg overflow-hidden shrink-0 flex flex-row items-center justify-center box-border gap-[8px] hover:bg-mediumslateblue-200"
        onClick={onSizemdIconLeftTypePrimaClick}
      >
        <img className="h-6 w-6 relative" alt="" src="/icon.svg" />
        <div className="relative text-sm leading-[24px] font-semibold font-figtree text-light-gohan text-left">
          Upload
        </div>
      </button>
    </section>
  );
};

export default InputContainer1;
