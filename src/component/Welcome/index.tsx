export const Welcome = () => {
  return (
    <section
      className=" max-h-[950px] h-screen relative overflow-hidden"
      style={{ backgroundImage: "url('./store-bg.jpg')" }}
    >
      <div
        className="bg-fixed bg-cover bg-center bg-no-repeat  absolute inset-0 z-0  "
        style={{ backgroundImage: "url('./store-bg.jpg')" }}
      />
      <div className="relative z-10 flex items-center justify-center flex-col h-full">
      <div className="container mx-auto px-4 text-center lg:max-w-[980px] opacity-100 flex z-10  items-center justify-center flex-col">
        <h1 className="text-[166px] font-bold text-[#404040] text-center ">
          Chào bạn.
        </h1>
        <a
          className="underline text-[24px] text-[#404040] font-bold tracking-wide  transition-all  hover:tracking-[0.15em] hover:text-white"
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
