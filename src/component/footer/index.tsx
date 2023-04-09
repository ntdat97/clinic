import Image from "next/image";

export const Footer = () => {
  return (
    <footer className=" py-6 ">
      <div className="custom-container mx-auto px-4">
        <div className="flex justify-center  items-center flex-wrap flex-col font-sans">
          <div className="py-8">
            <div className="flex items-center">
              <a href="#" className="text-gray-600 hover:text-gray-800 mr-4">
              <Image src="/svg-icon/fb.svg" alt="My Icon" width={20} height={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
              <Image src="/svg-icon/ins.svg" alt="My Icon" width={20} height={20} />
              </a>
            </div>
          </div>
          <div className=" text-center ">
            <p className="text-gray-600">&copy;2021 by Láng's clinic.</p>
          </div>
          <br />
          <div className=" text-center ">
            <p className="text-gray-600">
              Chi nhánh 1: 73 Mac Dinh Chi, Quan 1, HCM
            </p>
            <p className="text-gray-600">
              Chi nhánh 2: 116 Yersin, Quan 1, HCM
            </p>
          </div>
          <div className="  text-center">
            <p className="text-gray-600">028 2253 3273</p>
            <p className="text-gray-600">support@olangvien.com</p>
          </div>
          <div className="mt-5">
          <Image src="/bct.webp" alt="My Icon" width={148} height={56}/>
          </div>
        </div>
      </div>
    </footer>
  );
};
