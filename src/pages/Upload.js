import Component2 from "../components/Component2";
import InputContainer1 from "../components/InputContainer1";

const Upload = () => {
  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-[294px] box-border gap-[26px] tracking-[normal] text-left text-base text-light-popo font-ui-type-text-md-s">
      <Component2 />
      <div className="w-[336px] flex flex-row items-start justify-start py-0 px-5 box-border max-w-full text-text font-nunito">
        <b className="relative">Upload CSV</b>
      </div>
      <InputContainer1 />
    </div>
  );
};

export default Upload;
