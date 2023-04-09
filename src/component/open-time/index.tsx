export const OpenTime = () => {
  return (
    <section className="lg:max-w-[980px] mx-auto bg-[#f7f7f7] text-center flex justify-center items-center flex-col gap-8 py-16">
      <div className="">Đến gặp Láng hôm nay</div>
      <div className="">
        <div className="">Thứ 2 - Thứ 6: 11am - 7pm</div>
        <div className="">Thứ 7 - Chủ nhật: 10am - 8pm</div>
      </div>
      <div className="">
        <button className="bg-black text-white px-8 py-2.5 lg:py-1.5 text-[18px] mr-8 lg:mr-12">
            Đặt lịch hẹn
        </button>
        <button className="bg-black text-white px-8 py-2.5 lg:py-1.5 text-[18px] ">
            Xem dịch vụ
        </button>
      </div>
    </section>
  );
};
