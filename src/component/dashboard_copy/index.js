import React, { useState } from "react";
import Header2 from "../Header2";
import Dashboard from "./Dashboard";
import MyRank from "./MyRank";
import MyTeam from "./MyTeam";
import OurEvents from "./OurEvents";

import GroupsIcon from '@mui/icons-material/Groups';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [page, setPage] = useState(<OurEvents />);

  return (
    <div className="w-full flex justify-center flex-col items-center">
      <Header2 />
      <div className="w-full flex justify-center  max-w-6xl mt-5">
        <div className="flex flex-col">
          <div className="w-64 h-48 border">
            <div className="flex p-4">
              <div>
                <img
                  src="https://www.gravatar.com/avatar/f24da3394d699328615cd0c9cadf6e30?s=300&d=mm&r=g"
                  alt=""
                  className="rounded-full w-12"
                />
              </div>
              <div className="ml-6">
                <h6 className="text-lg">Yug Pawar</h6>
                <h6 className="text-gray-400">Not verified</h6>
              </div>
            </div>
            <div className="p-4 flex flex-col ">
              <div className="bg-gray-50 flex justify-start items-center flex-col">
                <div className="text-gray-400 mt-2">inactive</div>
                <div className="text-lg pb-6">Since 07.04.2023</div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex mt-5 w-full bg-gray-50 font-semibold text-gray-600">
              <ul className="flex flex-col w-full px-1">
                <li className="flex px-2 w-full py-3 cursor-pointer hover:bg-white hover:text-blue-400 mt-1">
                  <img src="/svg/dashboard.svg" alt="" />
                  <h4 className="ml-4" onClick={() => setPage(<Dashboard />)}>
                    Dashboard
                  </h4>
                </li>
                <li className="flex px-2 w-full py-3 cursor-pointer hover:bg-white hover:text-blue-400 mt-1">
                  <img src="/svg/myrank.svg" alt="" />
                  <h4 className="ml-4" onClick={() => setPage(<MyRank />)}>
                    My Rank
                  </h4>
                </li>
                <li className="flex px-2 w-full py-3 cursor-pointer hover:bg-white hover:text-blue-400 mt-1">
                  <img src="/svg/myrank.svg" alt="" />
                  <h4 className="ml-4">My Stone</h4>
                </li>
                <li className="flex px-2 w-full py-3 cursor-pointer hover:bg-white hover:text-blue-400 mt-1">
                  {/**<img src="/svg/dashboard.svg" alt="" /> */}
                  <GroupsIcon/>
                  <h4 className="ml-4" onClick={() => setPage(<MyTeam />)}>
                    My Team
                  </h4>
                </li>
                <li className="flex px-2 w-full py-3 cursor-pointer hover:bg-white hover:text-blue-400 mt-1">
                 {/** <img src="/svg/dashboard.svg" alt="" />  */}
                 <CalendarMonthIcon/>
                  <h4 className="ml-4" onClick={() => setPage(<OurEvents />)}>
                    Our Events
                  </h4>
                </li>
                <li className="px-3">
                  Bonuses <span className="w-max px-1 border-b"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/** dashboard component */}
        {/**<Dashboard/>*/}
        {/** my rank component */}
        {/**  <MyRank/>  */}
        {/** my team component */}
        {/** <MyTeam/> */}
        {/** our events component  */}
        {/** <MyTeam/> */}
        {page}
      </div>
      <div className="mt-48"></div>
    </div>
  );
}

export default index;
