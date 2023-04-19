import React from "react";
import { useState } from "react";
import OurEveUpcomng from "./OurEveUpcomng";
import OurEvePastcomng from "./OurEvePastcomng";
const OurEvents = () => {
  const [page, setPage] = useState(<OurEveUpcomng />);

  return (
    <>
      <div className="px-8 w-full flex h-fit justify-between flex-col">
        <div className="mb-6">
          <h1 className="text-base">Events</h1>
        </div>
        <div className="mb-6  rounded flex bg-slate-100 ">
          <div
            onClick={(e) => setPage(<OurEveUpcomng />)}
            className="text-center cursor-auto text-base py-3 px-6 font-medium  hover:text-blue-400"
          >
            Upcoming Events
          </div>

          <div
            onClick={(e) => setPage(<OurEvePastcomng />)}
            className="text-center py-3 cursor-auto px-6 text-base font-medium  hover:text-blue-400 "
          >
            Past Events
          </div>
        </div>

        <div>{page}</div>
      </div>
    </>
  );
};

export default OurEvents;
