import React from "react";

function Header2() {
  return (
    <div className="w-full flex justify-center border-b flex-col items-center">
      <div className="max-w-6xl w-full flex justify-between items-center">
        <div className="h-16 flex items-center">
          <img src="/icons/Xpic.png" alt="" className="w-20" />
        </div>
        <div className="flex h-full items-center border-r ">
          <div className="border-r flex h-full items-center">
            <div>
              <img src="/svg/bell.svg" alt="" className="w-7" />
            </div>
            <div className="px-6">
              <img src="/svg/download.svg" alt="" className="w-7" />
            </div>
          </div>
          <div className="px-6 flex h-full items-center ">
            <div className=" hover:bg-gray-50 rounded-full my-2 flex  items-center">
              <div>
                <img src="/svg/download.svg" alt="" className="w-7" />
              </div>
              <div className="px-4 flex items-center justify-center cursor-pointer ">
                Yug Pawar
                <div className="mt-1">
                  <svg
                    data-v-a2b08f46=""
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="plc-svgIcon profileNav__icon"
                  >
                    <path d="M3.5 5L8 10l4.5-5h-9z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header2;
