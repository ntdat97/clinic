import { ItemHeader } from "./component/item";

export const Header = () => {
  return (
    <section className="static  overflow-hidden">
      <nav className="relative lg:fixed top-0 bg-[#e8dfd2] left-0 w-full flex px-16 py-14 lg:py-0 justify-between z-50">
        <div className="lg:pr-14 flex items-center">
          <a
            className="inline-block text-xl text-white font-medium font-heading"
            href="#"
          >
            <img
              className="h-auto w-64 lg:w-54"
              width="auto"
              src="./logo-mobile.webp"
              alt=""
            />
          </a>
        </div>
        <div className="hidden lg:block ml-auto mr-10 pt-14 pb-4">
          <ul className="flex items-center">
            <ItemHeader href="#" text="Trang chủ" />
            <ItemHeader href="#" text="Dịch vụ" />
            <ItemHeader href="#" text="Điều trị da" />
            <ItemHeader href="#" text="Về chúng tôi" />
            <ItemHeader href="#" text="Sản phẩm" />
            <ItemHeader href="#" text="Liên hệ" />
            <li>
              <a
                className="inline-flex items-center justify-center py-3 px-6 rounded-full hover:bg-[#dfd6c9] transform duration-200"
                href="#"
              >
                <svg
                  data-bbox="0 0 50 50"
                  data-type="shape"
                  fill="#6e776e"
                  className="mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 50 50"
                >
                  <g>
                    <path d="M25 48.077c-5.924 0-11.31-2.252-15.396-5.921 2.254-5.362 7.492-8.267 15.373-8.267 7.889 0 13.139 3.044 15.408 8.418-4.084 3.659-9.471 5.77-15.385 5.77m.278-35.3c4.927 0 8.611 3.812 8.611 8.878 0 5.21-3.875 9.456-8.611 9.456s-8.611-4.246-8.611-9.456c0-5.066 3.684-8.878 8.611-8.878M25 0C11.193 0 0 11.193 0 25c0 .915.056 1.816.152 2.705.032.295.091.581.133.873.085.589.173 1.176.298 1.751.073.338.169.665.256.997.135.515.273 1.027.439 1.529.114.342.243.675.37 1.01.18.476.369.945.577 1.406.149.331.308.657.472.98.225.446.463.883.714 1.313.182.312.365.619.56.922.272.423.56.832.856 1.237.207.284.41.568.629.841.325.408.671.796 1.02 1.182.22.244.432.494.662.728.405.415.833.801 1.265 1.186.173.154.329.325.507.475l.004-.011A24.886 24.886 0 0 0 25 50a24.881 24.881 0 0 0 16.069-5.861.126.126 0 0 1 .003.01c.172-.144.324-.309.49-.458.442-.392.88-.787 1.293-1.209.228-.232.437-.479.655-.72.352-.389.701-.78 1.028-1.191.218-.272.421-.556.627-.838.297-.405.587-.816.859-1.24a26.104 26.104 0 0 0 1.748-3.216c.208-.461.398-.93.579-1.406.127-.336.256-.669.369-1.012.167-.502.305-1.014.44-1.53.087-.332.183-.659.256-.996.126-.576.214-1.164.299-1.754.042-.292.101-.577.133-.872.095-.89.152-1.791.152-2.707C50 11.193 38.807 0 25 0"></path>
                  </g>
                </svg>
                Đăng nhập
              </a>
            </li>
          </ul>
        </div>

        <button className="fixed right-8 navbar-burger lg:hidden self-center">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y={6} width={24} height={2} fill="white" />
            <rect y={11} width={24} height={2} fill="white" />
            <rect y={16} width={24} height={2} fill="white" />
          </svg>
        </button>
      </nav>
      <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
        <nav className="relative flex flex-col py-8 px-10 w-full h-full bg-black border-r overflow-y-auto">
          <a
            className="inline-block text-xl text-white font-medium font-heading mb-16 md:mb-32"
            href="#"
          >
            <img
              className="h-8"
              width="auto"
              src="boldui-assets/logo/logo-boldui-light.svg"
              alt=""
            />
          </a>
          <ul className="mb-32">
            <li className="mb-10">
              <a className="flex items-center" href="#">
                <span className="mr-3 text-lg text-white">About</span>
                <svg
                  width={16}
                  height={9}
                  viewBox="0 0 16 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.01 3.48047H0V5.57278H12.01V8.71124L16 4.52663L12.01 0.34201V3.48047Z"
                    fill="#FFEC3E"
                  />
                </svg>
              </a>
            </li>
            <li className="mb-10">
              <a className="flex items-center" href="#">
                <span className="mr-3 text-lg text-white">Company</span>
                <svg
                  width={16}
                  height={9}
                  viewBox="0 0 16 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.01 3.48047H0V5.57278H12.01V8.71124L16 4.52663L12.01 0.34201V3.48047Z"
                    fill="#FFEC3E"
                  />
                </svg>
              </a>
            </li>
            <li className="mb-10">
              <a className="flex items-center" href="#">
                <span className="mr-3 text-lg text-white">Services</span>
                <svg
                  width={16}
                  height={9}
                  viewBox="0 0 16 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.01 3.48047H0V5.57278H12.01V8.71124L16 4.52663L12.01 0.34201V3.48047Z"
                    fill="#FFEC3E"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a className="flex items-center" href="#">
                <span className="mr-3 text-lg text-white">Contact</span>
                <svg
                  width={16}
                  height={9}
                  viewBox="0 0 16 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.01 3.48047H0V5.57278H12.01V8.71124L16 4.52663L12.01 0.34201V3.48047Z"
                    fill="#FFEC3E"
                  />
                </svg>
              </a>
            </li>
          </ul>
          <a
            className="flex mb-8 items-center justify-center py-4 px-6 rounded-full  hover:bg-[#dfd6c9] transform duration-200"
            href="#"
          >
            <svg
              className="mr-3"
              width={16}
              height={9}
              viewBox="0 0 16 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.01 3.16553H0V5.24886H12.01V8.37386L16 4.20719L12.01 0.0405273V3.16553Z"
                fill="black"
              />
            </svg>
            <span className="text-sm font-medium uppercase tracking-wider">
              Sign Up
            </span>
          </a>
          <a
            className="flex mb-10 items-center text-white hover:underline"
            href="#"
          >
            <span className="mr-2 text-sm">Log In</span>
            <svg
              width={16}
              height={10}
              viewBox="0 0 16 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.01 3.95383H0V6.04614H12.01V9.1846L16 4.99998L12.01 0.815369V3.95383Z"
                fill="#FFEC3E"
              />
            </svg>
          </a>
          <p className="text-sm text-gray-500">
            All rights reserved © BoldUI 2021
          </p>
        </nav>
      </div>
    </section>
  );
};
