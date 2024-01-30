import Component from "../components/Component";
import WhiteButtonFrame from "../components/WhiteButtonFrame";

const Login = () => {
  return (
    <div className="w-[360px] relative bg-ghostwhite flex flex-col items-center justify-start pt-0 px-0 pb-[46px] box-border gap-[29px] text-left text-5xl text-light-popo font-ui-type-text-md-s">
      
      <Component />
      <div className="w-[360px] h-[57px] flex flex-row items-start justify-start py-0 px-5 box-border font-montserrat">
        <div className="self-stretch w-[177px] flex flex-col items-start justify-start gap-[8px]">
          <h3 className="m-0 w-[143.8px] relative text-inherit font-bold font-inherit inline-block">
            Sign In
          </h3>
          <div className="self-stretch flex-1 relative text-xs font-lato">
            Sign in to your account
          </div>
        </div>
      </div>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-4 pb-3">
        <WhiteButtonFrame />
      </section>
      <div className="flex flex-row items-center justify-start py-0 px-5 gap-[16px]">
        <img
          className="h-7 w-7 relative object-cover"
          loading="eager"
          alt=""
          src="/vector-1@2x.png"
        />
        <img
          className="h-[26px] w-[27px] relative object-cover"
          loading="eager"
          alt=""
          src="/vector-2@2x.png"
        />
        <div className="h-[30px] w-[31px] relative overflow-hidden shrink-0">
          <img
            className="absolute h-[74.67%] w-[75.16%] top-[13.67%] right-[12.26%] bottom-[11.67%] left-[12.58%] max-w-full overflow-hidden max-h-full"
            loading="eager"
            alt=""
            src="/vector-3.svg"
          />
        </div>
        <div className="h-[30px] w-8 relative overflow-hidden shrink-0">
          <img
            className="absolute h-[9%] w-[23.75%] top-[47.67%] right-[38.44%] bottom-[43.33%] left-[37.81%] max-w-full overflow-hidden max-h-full"
            loading="eager"
            alt=""
            src="/vector-4.svg"
          />
          <img
            className="absolute h-[81.33%] w-[71.25%] top-[13.67%] right-[14.38%] bottom-[5%] left-[14.37%] max-w-full overflow-hidden max-h-full z-[1]"
            alt=""
            src="/vector-5.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
