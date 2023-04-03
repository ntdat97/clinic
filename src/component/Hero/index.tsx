export const Herotitle = () => {
  return (
    <section className="relative py-20">
    <div className="relative container px-4 mx-auto">
      <div className="flex flex-wrap items-center -mx-4 bg-[#ede3d5]">
        <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
          <div className="max-w-lg">
            <div className="mt-8 mb-6 lg:mb-10 lg:pr-8 leading-[0.9em]  font-thin text-center text-[#404040] text-[32px] lg:text-[77px]" style={{fontFamily: "playfair display,serif"}}>the next<br/>chapter<br/>of your skin</div>
           
          </div>
        </div>
        <div className="flex justify-center items-center relative w-full lg:w-1/2 py-20 bg-[#f2eadf]">
          <img className="rounded-full object-cover lg:h-128 w-[300px] h-[300px] lg:w-[470px] lg:h-[470px]" src="https://images.unsplash.com/photo-1524508762098-fd966ffb6ef9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
        </div>
      </div>
    </div>
    <img className="hidden xl:block absolute top-0 right-0 mt-52" src="zeus-assets/icons/dots/yellow-dot-right-shield.svg" alt="" />
  </section>
  );
};
