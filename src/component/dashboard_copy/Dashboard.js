import React from 'react'

const Dashboard = () => {
  return (
    <>
    
    <div className="px-8 w-full flex h-fit justify-between flex-col">
    <div className="flex ">
      <div className="bg-slate-50 flex justify-start items-center border h-12 w-full">
        <div className="flex justify-start items-center px-6 text-lg w-full text-gray-400 ">
          Referral link
          <span className="ml-4 text-gray-700">
            https://platinworld.com/en/2714042821
          </span>
        </div>
        <div className="text-gray-500 flex px-4">
          <img src="/svg/qrcode.svg" alt="" className="cursor-pointer" />
          <img
            src="/svg/copy.svg"
            alt=""
            className="px-4 cursor-pointer"
          />
        </div>
      </div>
      <div className="h-fit">
        <button className="py-3 px-6 bg-cyan-100 ml-2 text-blue-400 rounded-sm whitespace-nowrap">
          Public page
        </button>
      </div>
    </div>
    <div className="text-xs cursor-pointer underline mt-2 text-slate-600">
      Terms and conditions of sale and distribution
    </div>
    <div className="mt-4">
      <h3 className="text-lg">My available balance</h3>
      <div className="grid grid-flow-col">
        <div className="mt-4">
          <div className="w-48 h-56 border p-4 grid">
            <div className="flex">
              <div>
                <img
                  src="/icons/logo_copy.png"
                  alt="xpic"
                  className="w-8"
                />
              </div>
              <div className="ml-2 mt-1">X-Pic+</div>
            </div>
            <div className="flex items-center text-xl font-semibold">
              0.00 <span className="text-gray-500 ml-2">X-Pic+</span>{" "}
            </div>
            <div className="flex justify-center items-end">
              <button className="rounded-sm bg-cyan-200 px-10 py-2 text-cyan-600 hover:border-gray-300 border border-transparent">
                Payout
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="w-48 h-56 border p-4 grid">
            <div className="flex">
              <div>
                <img
                  src="/icons/logo_copy.png"
                  alt="xpic"
                  className="w-8"
                />
              </div>
              <div className="ml-2 mt-1">X-Pic</div>
            </div>
            <div className="flex items-center text-xl font-semibold">
              0.00 <span className="text-gray-500 ml-2">X-Pic</span>{" "}
            </div>
            <div className="flex justify-center items-end">
              <button className="rounded-sm bg-cyan-200 px-10 py-2 text-cyan-600 hover:border-gray-300 border border-transparent">
                Payout
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="w-48 h-56 border"></div>
        </div>
        <div className="mt-4">
          <div className="w-48 h-56  border"></div>
        </div>
      </div>
    </div>
    <div>
      <div className="mt-6 bg-slate-50 grid grid-flow-col">
        <div className="w-40 py-4 cursor-pointer">
          <div className="flex justify-center py-2">
            <img src="/thumbnail/download.png" alt="" />
          </div>
          <div className="text-center text-base font-semibold text-gray-600">
            Introducing X-Pic World!
          </div>
        </div>
        <div className="w-40 py-4 cursor-pointer">
          <div className="flex justify-center py-2">
            <img src="/thumbnail/download.png" alt="" />
          </div>
          <div className="text-center text-base font-semibold text-gray-600">
            Introducing X-Pic World!
          </div>
        </div>
        <div className="w-40 py-4 cursor-pointer">
          <div className="flex justify-center py-2">
            <img src="/thumbnail/download.png" alt="" />
          </div>
          <div className="text-center text-base font-semibold text-gray-600">
            Introducing X-Pic World!
          </div>
        </div>
        <div className="w-40 py-4 cursor-pointer">
          <div className="flex justify-center py-2">
            <img src="/thumbnail/download.png" alt="" />
          </div>
          <div className="text-center text-base font-semibold text-gray-600">
            Introducing X-Pic World!
          </div>
        </div>
      </div>
      <div className="grid grid-flow-col">
        <div className="mt-4 mr-2">
          <div>Total Bonus</div>
          <div className="flex bg-gray-50 mt-4 w-full mr-2 flex-col p-4 shadow-md">
            <div className="text-xs font-semibold">USDT</div>
            <div className="text-xl font-semibold text-gray-600 ">
              $300
            </div>
            <div className="text-xs font-semibold mt-4">X-Pic</div>
            <div className="text-xl font-semibold text-gray-600 ">
              5 X-Pic
            </div>
          </div>
        </div>
        <div className="mt-4 mx-2">
          <div>My Position</div>
          <div className="flex shadow-md mt-4 w-full flex-col">
            <div className="flex">
              <div>
                <img src="/thumbnail/stone.png" alt="" className="w-16" />
              </div>
              <div className=" p-4 text-gray-600 ">
                <div className="text-sm">My Position</div>
                <div className="text-lg">Agent</div>
              </div>
            </div>
            <div className="flex flex-col items-center p-4 bg-slate-100">
              <div className="text-sm">Turnover</div>
              <div className="text-xl mt-2">0 XPIC</div>
            </div>
            <div className="flex">
              <div>
                <img src="/thumbnail/stone.png" alt="" className="w-16" />
              </div>
              <div className=" p-4 text-gray-600 ">
                <div className="text-sm">My Next Position</div>
                <div className="text-lg">General Manager</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 mx-2">
          <div>Diamond Bonus</div>
          <div className="flex bg-gray-50 mt-4 w-full shadow-md">
            <div className="text-xl p-4 font-semibold text-gray-600 ">
              $300
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
    </>
  )
}

export default Dashboard
