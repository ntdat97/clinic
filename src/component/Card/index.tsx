import localFont from "next/font/local";
const myFont = localFont({ src: "../../fonts/DidotW01Italic.woff2" });
/* const didot = Labrada({ preload: false,weight: "400" }); */
export const Card = () => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/4 p-1.5">
      <div className="p-5 pb-7 lg:pb-8 lg:pt-9 h-full  bg-[#4d4d4d] flex flex-col ">
        <div className="relative h-[45%]  flex justify-center items-center  overflow-hidden rounded-md ">
          <span className=" leading-relaxed text-white text-[50px] lg:text-[100px] font-thin tracking-wider    m-0 p-0">
            <span className={myFont.className}>01</span>
          </span>
        </div>
        <div className="h-[5%] border-t-[3px] border-white lg:border-t w-[50px] mb-2 lg:mt-4 lg:mb-0 flex justify-center items-center m-auto" />
        <div className="h-[50%]  flex justify-center items-center text-center text-white font-sans">
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
