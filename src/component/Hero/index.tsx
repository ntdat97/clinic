export const Herotitle = () => {
  return (
    <section className="relative ">
      <div className="relative px-4 mx-auto ">
        <div className="flex flex-wrap items-center -mx-4 bg-[#ede3d5]">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="flex flex-col justify-center items-center">
              <div
                className="mt-8 mb-6 lg:mb-10 lg:pr-8 leading-[0.9em]  font-thin text-center text-[#404040] text-[32px] lg:text-[77px]"
                style={{ fontFamily: "playfair display,serif" }}
              >
                the next
                <br />
                chapter
                <br />
                of your skin
              </div>
              <a className="transition duration-300 ease-in-out bg-transparent rounded-full border border-gray-700  hover:bg-[#404040]">
                <div className="flex items-center flex-grow justify-center overflow-hidden transition-all duration-200 ease-in-out transition-none h-full w-full">
                  <span className="transition font-thin text-sm md:text-sm md:text-[1em] tracking-wider leading-3 text-gray-600 hover:text-white px-4 py-1.5 " >discover now</span>
                  </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center relative w-full lg:h-[849px] lg:w-1/2 py-20 bg-[#ede3d5]">
            <img
              className="rounded-full object-cover lg:h-128 w-[300px] h-[300px] lg:w-[590px] lg:h-[590px]"
              src="https://images.unsplash.com/photo-1524508762098-fd966ffb6ef9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
      <img
        className="hidden xl:block absolute top-0 right-0 mt-52"
        src="zeus-assets/icons/dots/yellow-dot-right-shield.svg"
        alt=""
      />
    </section>
  );
};
