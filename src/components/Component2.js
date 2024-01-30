import { useState, useCallback } from "react";
import Menu from "./Menu";
import PortalPopup from "./PortalPopup";

const Component2 = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const openMenu = useCallback(() => {
    setMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <>
      <header className="self-stretch [background:linear-gradient(180deg,_#fff,_#fff)] flex flex-row items-start justify-between p-5 gap-[20px] top-[0] z-[99] sticky text-left text-xl text-text font-nunito">
        <div className="flex flex-row items-center justify-start gap-[29px]">
          <div className="flex items-center justify-between relative mt-[6px] w-[113px]">
            <img
              className="h-3 w-4 relative cursor-pointer z-[1]"
              alt=""
              src="/burgerregular.svg"
              onClick={openMenu}
            />
            <img
              className="h-[26px] w-[26px] relative my-0 mx-[!important]  overflow-hidden shrink-0 object-cover z-[2]"
              loading="eager"
              alt=""
              src="/frame@2x.png"
            />
            <h3 className="m-0 h-[27px] relative text-inherit font-semibold font-inherit inline-block">
              Base
            </h3>
          </div>
        </div>
        <div className="overflow-hidden flex flex-row items-center justify-start py-0 pr-px pl-0 gap-[5px]">
          <div className="h-10 w-10 relative">
            <div className="absolute top-[0px] left-[0.4px] rounded-31xl w-full h-full" />
            <img
              className="absolute top-[8.5px] left-[0.4px] w-[18px] h-[23px] z-[1]"
              alt=""
              src="/vector-12.svg"
            />
          </div>
          <img
            className="h-[30px] w-[30px] relative object-cover"
            loading="eager"
            alt=""
            src="/mask-group1@2x.png"
          />
        </div>
      </header>
      {isMenuOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="left"
          onOutsideClick={closeMenu}
        >
          <Menu onClose={closeMenu} />
        </PortalPopup>
      )}
    </>
  );
};

export default Component2;
