import { useTransitionEffect } from "@/hooks/transition-effect";

export const Welcome = () => {
  const { ref, isVisible } = useTransitionEffect();
  return (
    <section
      className=" max-h-[950px]  h-[200px] lg:h-screen relative overflow-hidden"
      style={{ backgroundImage: "url('./store-bg.jpg')" }}
    >
      <div
        className="lg:bg-fixed bg-cover bg-center bg-no-repeat  absolute inset-0 z-0  "
        style={{ backgroundImage: "url('./store-bg.jpg')" }}
      />
      <div className="relative z-10 flex items-center justify-center flex-col h-full">
        <div
          className={` container mx-auto px-4 text-center lg:max-w-[980px] opacity-100 flex z-10  items-center justify-center flex-col`}
        >
          <h1
            ref={ref}
            className={` ${
              isVisible
                ? " translate-x-0 opacity-100 "
                : " -translate-x-36 opacity-0"
            }  transition  duration-[1400ms] text-[45px] lg:text-[166px] mb-6 lg:mb-0 font-extrabold lg:font-bold  text-[#404040] text-center`}
          >
            Chào bạn.
          </h1>
          <a
            className="underline font-black text-[20px] lg:text-[24px] text-[#404040] font-bold tracking-wide  transition-all  hover:tracking-[0.15em] hover:text-white"
            href="#"
          >
            Khám phá thêm
          </a>
        </div>
      </div>

      <div className="absolute inset-0 z-0 bg-[#bfbfbf] opacity-50"></div>
    </section>
  );
};
