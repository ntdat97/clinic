import { useTransitionEffect } from "@/hooks/transition-effect";
import { Card } from "../Card";
export const CardSection = () => {
  const { ref:refClinic, isVisible:isVisibleClinic } = useTransitionEffect();
  const { ref:refTreatment, isVisible:isVisibleTreatment } = useTransitionEffect();
  return (
    <section className="py-4 mx-auto overflow-hidden bg-black">
      <div className="container   mx-auto lg:px-4 max-w-[900px]">
        <div className="flex justify-center items-center flex-col py-3 lg:py-5">
          <div
            className={`${
              isVisibleClinic
                ? " translate-x-0 visible"
                : " -translate-x-36 invisible"
            } transition  duration-[1400ms] mb-1 lg:mb-7 text-white text-[19px] font-bold`}
            ref={refClinic}
          >
            <span>Giải pháp tại LÁNG'S CLINIC</span>
          </div>
          <div ref={refTreatment} className={`${
              isVisibleTreatment
                ? " translate-x-0 opacity-100"
                : " translate-x-8 opacity-0 "
            } transition  duration-[800ms]  mb-1 lg:mb-7 px-2 text-white text-[22px] lg:text-[26px] leading-normal text-center`}>
            <span>TOÀN DIỆN PHÁC ĐỒ ĐIỀU TRỊ KẾT HỢP ĐA PHƯƠNG THỨC </span>
          </div>
        </div>
        <div className="flex flex-wrap -m-3 justify-center">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex justify-center items-center flex-col my-10">
          <div className=" text-white text-[14px] tracking-[0.14em] lg:max-w-[606px] text-center leading-9">
            <span>
              ĐỘI NGŨ CHUYÊN VIÊN ĐỒNG HÀNH 1:1 CÙNG BẠN VỚI SỰ THEO DÕI CỦA BÁC
              SĨ DA LIỄU TRONG SUỐT QUÁ TRÌNH ĐIỀU TRỊ
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
