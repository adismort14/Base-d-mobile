import Component2 from "../components/Component2";
import NewFrame from "../components/NewFrame";
import UploadedListComp from "../components/UploadedListComp";

const Uploaded = () => {
  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-[47px] box-border gap-[28px] tracking-[normal] text-left text-base text-light-popo font-ui-type-text-md-s">
      <Component2/>
      <NewFrame />
      <div className="font-['Nunito'] text-base font-bold w-full ml-16">
        Uploads
      </div>
      <UploadedListComp />
    </div>
  );
};

export default Uploaded;
