import { useTransitionEffect } from "@/hooks/transition-effect";
import localFont from "next/font/local";
const myFont = localFont({ src: "../../fonts/DidotW01Italic.woff2" });
/* const didot = Labrada({ preload: false,weight: "400" }); */
export const Card = () => {
  const { ref: ref1, isVisible: isVisible1 } = useTransitionEffect();
  const { ref: ref2, isVisible: isVisible2 } = useTransitionEffect();
  return (
    <div className="w-full sm:w-1/2 lg:w-1/4 p-1.5">
      <div className="p-5 pb-7 lg:pb-8 lg:pt-9 h-full  bg-[#4d4d4d] flex flex-col ">
        <div
          style={{ transform: isVisible1 ? "rotateY(0deg)" : "rotateY(90deg)" }}
          ref={ref1}
          className={` transition duration-[1400ms]  relative h-[45%]  flex justify-center items-center  overflow-hidden rounded-md`}
        >
          <span className=" leading-relaxed text-white text-[65px] lg:text-[100px] font-thin tracking-wider    m-0 p-0">
            <span className={myFont.className}>01</span>
          </span>
        </div>
        <div
          ref={ref2}
          className={` ${
            isVisible2 ? " translate-x-0 visible" : " -translate-x-36 invisible"
          } transition duration-[1400ms] h-[5%] border-t-[3px] border-white lg:border-t w-[50px] mb-2 lg:mt-4 lg:mb-0 flex justify-center items-center m-auto`}
        />
        <div className="h-[50%] text-[21px] lg:text-base leading-6 flex justify-center items-center text-center text-white font-sans">
          <span>
            tư vấn
            <br />
            thiết lập
            <br />
            phác đồ điều trị
          </span>
        </div>
      </div>
    </div>
  );
};
