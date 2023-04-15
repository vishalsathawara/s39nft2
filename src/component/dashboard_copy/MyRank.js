import React from "react";
import "./Myrank.css";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const MyRank = () => {
  return (
    <div className="px-8 w-full flex h-fit justify-between flex-col  ">
      <div className=" mb-6  ">
        <h1 className="text-base font-medium break-normal">My Rank</h1>
        <p className="mt-1 text-slate-400 text-base break-normal">
          It is awarded according to the rank status scheme. The status is
          earned automatically when a certain status turnover is reached. This
          status is awarded once when a certain rank is reached.
        </p>
      </div>
      <section className="box-border block ">
        <div className="grid gap-6 ">
          <div className="flex box-border shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-md w-full ">
            <div className="p-4 box-border w-full ">
              <div className="flex  justify-between  mediaForMyRankdiv_1">
                <div className="flex  ">
                  <div className="grid  place-items-center ">
                    <span className="m-2">
                      <img
                        className="h-9"
                        alt="img"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAMAAADQmBKKAAAC+lBMVEUAAAD68bj78LD37q368Lj68Lf966P78bf78bvNv2r36JLYyHG9sF21qVytoFjt3oXr35jDtWbTxGz68Ljf0Hjz5I24q1uzpln565f68bvp2oLRwmrn2IDm1n768Lfu4Iz68brAsVq8rVqpnVj565nz5IutoVn15o7PwGj88br58bT57qjm1n768br3543+8KqAcjJ/czf65obVxWqrlzeZiDT86YqIdBj9645+czqAcS+5pkiLdxn0332YgiD55oi2o0SAczSMfDP98Kbfxl/Ht13HtViWhjTm1XujkTWPeRj97ZqumjqllDqIezju2HWhiyjo0W7bym6+q02cijOPfzL97p3YyG6JeTKunkO0oECikjmejTSEchmSehb965LNul26qU6wnT+DdDGmjijy4onq02/CsFOXhSeTgSeUfyDPvmT244O/rVGzoEORgjmBdTaolDWSgTKOdxb97Jby3Hrh0HbbzHPiymOolzyFeDmgjzaOfB6Xfhbw34XfznPnz2rMvGKzo0mtmz+LfjmOgDiEdzWdhyX976HLt1rFslW3p02rmTyhhx/i0nmcjDiVhjh+cC+ehBzt3YT45IP04IHq1XPQvV/EtFq9qUqAdTrkzWe2pEmUgzVmXS2liyKagRjs24Dp2H3KumCwoEemkzWGdzGZiCz788Pp2YH34oDCsle/r1a8rFKynTyzmzWhjjKkkC/56Y/w2nfs1nLWw2eskyqqkCf25ovw3X7t2XnZx2riy2fTwGOZiTd8cDadiy7+8ayfjzmvli6TfRvSwmepki69pkOymTD565rDr0/QwGf89c2Zijq2njh8bzOslTB2ayxqXyXezHC5o0CumDSOfSf67qnz5IxuZC6omUG5oTuKeS3kz23Is1Lk0nb9+Nz99ci1p1enm1f999T78ryUhjyIeCR7ahT57KH565XawVnBq0j677ByZib9+eL78LR1azStoFeEdi1wYROCdC3z5Zd7bieBciS7rVn66Y7NtE6aj0347K24EgaCAAAALXRSTlMAnz8f32MQj38f+4FaQKM/LxDbz52UkHvFv72fWtyv9+/nz7+mdOrftU9/f/rPGUX1AAAPzklEQVR42uyUP4uDMBjGjec/Oh106lK6doj3IRxv9xv0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"
                      />
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-400">
                      My Rank
                    </p>
                    <p className="text-base font-medium mt-2 text-slate-500">
                      Amber
                    </p>
                  </div>
                </div>
                <div className=" order-last teamTurnovrtDIvFIrst ">
                  <p className="text-xs font-normal text-slate-400 mediaForMyRankdiv_1Span">
                    Total Team Turnover
                  </p>
                  <span className=" grid place-items-end mt-2 text-xl text-slate-600 font-normal mediaForMyRankdiv_1Span ">
                    0 EUR
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex box-border shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  w-full">
            <div className="p-4 box-border w-full ">
              <div className="flex  justify-between ">
                <div className="flex  ">
                  <div className="grid  place-items-center ">
                    <span className="m-2">
                      <img
                        className="h-9"
                        alt="img"
                        src="data:image/png;base64,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"
                      />
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-400">
                      Next Rank
                    </p>
                    <p className="text-base font-medium mt-2 text-slate-500">
                      Jade
                    </p>
                  </div>
                </div>
                <div className=" order-last">
                  <p className="text-xs font-normal text-slate-400">
                    Rank Turnover
                  </p>
                  <span className=" grid place-items-end mt-2 text-xl text-slate-600 font-normal">
                    5 000 EUR
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/***    ggggggggggggggggggggggggggg     leg rule btn responsive */}
        <div className="border-t-[1px] border-slate-100 pt-6 flex gap-6 gridColomtoRow shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] grid-cols-2 h-28 ">
          <div className=" ml-6 w-5/6">
            <div className="  flex justify-between mb-2 flex-wrap">
              <p>
                <span className="text-sm font-medium text-slate-600 ">0 </span>
                <span className="text-sm font-medium text-slate-300">
                  / 5 000 EUR
                </span>
              </p>
              <p className="text-sm font-medium text-slate-600"> 0 % </p>
            </div>
            <div className="  flex h-6 truncate relative box-border bg-slate-100 rounded-full ">
              <div className=" bg-[#4bb34b] h-6 text-xs  w-7 border_radius_left flex items-center justify-center">
                0%
              </div>
              <div className="bg-[#21bee8] h-6 text-xs  mx-2 w-7 flex items-center justify-center">
                0%
              </div>
              <div className="bg-[#ffa000] h-6 text-xs  w-7 border_radius_right flex items-center justify-center">
                0%
              </div>
            </div>
            <div className=" mt-1 flex">
              <div className="flex m-1 items-center justify-center">
                <p className="h-2 w-2 mr-2   bg-[#4bb34b]"></p>
                <p className="text-xs font-normal text-slate-500"> 50%</p>
              </div>
              <div className="flex m-1 items-center justify-center">
                <p className="h-2 w-2 mr-2 bg-[#21bee8]"></p>
                <p className="text-xs font-normal text-slate-500"> 30%</p>
              </div>
              <div className="flex m-1 items-center justify-center">
                <p className="h-2 w-2 mr-2 bg-[#ffa000]"></p>
                <p className="text-xs font-normal text-slate-500"> All Team</p>
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-center  ibuttonFlexDivbtn ">
            <button className="items-center justify-center rounded bg-sky-500/50 h-11 w-24 text-slate-50 mr-7 ibuttonFlexDivbtn_btn">
              Leg Rules
            </button>
          </div>
        </div>
      </section>
      <section className="mt-6">
        {/** red border div  */}
        <div className="flex-col border-2 mb-4 rounded border-blue-400">
          <div className="mb-4  pt-4 pl-2  ">
            <div className="pt-4">
              <div className="flex mb-4">
                <div className="flex grow">
                  <div className="mr-2 h-6 w-6 ">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAMAAADQmBKKAAAC+lBMVEUAAAD68bj78LD37q368Lj68Lf966P78bf78bvNv2r36JLYyHG9sF21qVytoFjt3oXr35jDtWbTxGz68Ljf0Hjz5I24q1uzpln565f68bvp2oLRwmrn2IDm1n768Lfu4Iz68brAsVq8rVqpnVj565nz5IutoVn15o7PwGj88br58bT57qjm1n768br3543+8KqAcjJ/czf65obVxWqrlzeZiDT86YqIdBj9645+czqAcS+5pkiLdxn0332YgiD55oi2o0SAczSMfDP98Kbfxl/Ht13HtViWhjTm1XujkTWPeRj97ZqumjqllDqIezju2HWhiyjo0W7bym6+q02cijOPfzL97p3YyG6JeTKunkO0oECikjmejTSEchmSehb965LNul26qU6wnT+DdDGmjijy4onq02/CsFOXhSeTgSeUfyDPvmT244O/rVGzoEORgjmBdTaolDWSgTKOdxb97Jby3Hrh0HbbzHPiymOolzyFeDmgjzaOfB6Xfhbw34XfznPnz2rMvGKzo0mtmz+LfjmOgDiEdzWdhyX976HLt1rFslW3p02rmTyhhx/i0nmcjDiVhjh+cC+ehBzt3YT45IP04IHq1XPQvV/EtFq9qUqAdTrkzWe2pEmUgzVmXS2liyKagRjs24Dp2H3KumCwoEemkzWGdzGZiCz788Pp2YH34oDCsle/r1a8rFKynTyzmzWhjjKkkC/56Y/w2nfs1nLWw2eskyqqkCf25ovw3X7t2XnZx2riy2fTwGOZiTd8cDadiy7+8ayfjzmvli6TfRvSwmepki69pkOymTD565rDr0/QwGf89c2Zijq2njh8bzOslTB2ayxqXyXezHC5o0CumDSOfSf67qnz5IxuZC6omUG5oTuKeS3kz23Is1Lk0nb9+Nz99ci1p1enm1f999T78ryUhjyIeCR7ahT57KH565XawVnBq0j677ByZib9+eL78LR1azStoFeEdi1wYROCdC3z5Zd7bieBciS7rVn66Y7NtE6aj0347K24EgaCAAAALXRSTlMAnz8f32MQj38f+4FaQKM/LxDbz52UkHvFv72fWtyv9+/nz7+mdOrftU9/f/rPGUX1AAAPzklEQVR42uyUP4uDMBjGjec/Oh106lK6doj3IRxv9xv0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"
                      alt="load"
                      className="inline-block"
                    />
                  </div>
                  <p className="text-sm font-medium	flex items-center justify-center ">
                    Amber
                  </p>
                </div>
                <span className="font-normal text-sm border-2 rounded-full text-cyan-600  bg-cyan-300 pr-2 w-28  mr-2 flex items-center justify-center   ">
                  currunt Rank
                </span>
              </div>
            </div>
          </div>
          <div className="box-border">
            <div className=" bg-slate-100 mx-2 h-10 rounded flex">
              <div className="box-border w-52  flex justify-center items-center">
                <p className="text-xs font-normal  flex justify-center items-center  ">
                  Team Turnover
                </p>
              </div>
              <div className=" w-80 ">
                <div>
                  <p className="text-xs font-normal flex items-center justify-center">
                    1st Line Turnover
                  </p>
                </div>
                <div className="flex text-xs justify-between ">
                  <span className="text-xs font-normal text-slate-400">
                    50 % rule
                  </span>
                  <span className="text-xs font-normal text-slate-400">
                    30 % rule
                  </span>
                </div>
              </div>
            </div>
            <div className="  mx-2 h-10  flex">
              <div className="box-border w-52  flex justify-center items-center">
                <p className="text-xs font-normal  flex justify-center items-center  ">
                  0 €
                </p>
              </div>
              <div className=" w-80 ">
                <div className="flex text-xs  justify-between ">
                  <div className="text-xs font-normal  text-slate-400 flex items-center justify-center h-10  ">
                    <p className=" ">-</p>
                  </div>
                  <div className="text-xs font-normal text-slate-400 flex items-center justify-center h-10">
                    <p>-</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/**888888888 */}
        <div className="flex-col border-2 mb-4 rounded border-green-400">
          <div className="mb-4  pt-4 pl-2  ">
            <div className="pt-4">
              <div className="flex mb-4">
                <div className="flex grow">
                  <div className="mr-2 h-6 w-6 ">
                    <img
                      src="data:image/png;base64,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"
                      alt="load"
                      className="inline-block"
                    />
                  </div>
                  <p className="text-sm font-medium	flex items-center justify-center ">
                    Jade
                  </p>
                </div>
                <span className="font-normal text-sm border-2 rounded-full text-lime-500  bg-green-200 pr-2 w-28  mr-2 flex items-center justify-center   ">
                  Next Rank
                </span>
              </div>
            </div>
          </div>
          <div className="box-border">
            <div className=" bg-slate-100 mx-2 h-10 rounded flex">
              <div className="box-border w-52  flex justify-center items-center">
                <p className="text-xs font-normal  flex justify-center items-center  ">
                  Team Turnover
                </p>
              </div>
              <div className=" w-80 ">
                <div>
                  <p className="text-xs font-normal flex items-center justify-center">
                    1st Line Turnover
                  </p>
                </div>
                <div className="flex text-xs justify-between ">
                  <span className="text-xs font-normal text-slate-400">
                    50 % rule
                  </span>
                  <span className="text-xs font-normal text-slate-400">
                    30 % rule
                  </span>
                </div>
              </div>
            </div>
            <div className="  mx-2 h-10  flex">
              <div className="box-border w-52  flex justify-center items-center">
                <p className="text-xs font-normal  flex justify-center items-center  ">
                  5 000 €
                </p>
              </div>
              <div className=" w-80 ">
                <div className="flex text-xs  justify-between ">
                  <div className="text-xs font-normal  flex items-center justify-center h-10  ">
                    <p className=" "> 2 500 €</p>
                  </div>
                  <div className="text-xs font-normal flex items-center justify-center h-10">
                    <p> 1 500 €</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t-[1px] border-gray-100 m-2 "></div>
          <div className=" pt-6 flex gap-6    grid-cols-2 h-28 ">
            <div className=" ml-3 w-screen mr-2">
              <div className="  flex justify-between mb-2 flex-wrap">
                <p>
                  <span className="text-sm font-medium text-slate-600 ">0</span>
                  <span className="text-sm font-medium text-slate-300">
                    / 5 000 EUR
                  </span>
                </p>
                <p className="text-sm font-medium text-slate-600"> 0 % </p>
              </div>
              <div className="  flex h-6  truncate relative box-border bg-slate-100 rounded-full ">
                <div className="bg-[#4bb34b] h-6 text-xs  w-7 border_radius_left flex items-center justify-center">
                  0%
                </div>
                <div className="bg-[#21bee8] h-6 text-xs  mx-2 w-7 flex items-center justify-center">
                  0%
                </div>
                <div className="bg-[#ffa000] h-6 text-xs  w-7 border_radius_right flex items-center justify-center">
                  0%
                </div>
              </div>
              <div className=" mt-1 flex">
                <div className="flex m-1 items-center justify-center">
                  <p className="h-2 w-2 mr-2 bg-[#4bb34b]"></p>
                  <p className="text-xs font-normal text-slate-500"> 50%</p>
                </div>
                <div className="flex m-1 items-center justify-center">
                  <p className="h-2 w-2 mr-2 bg-[#21bee8]"></p>
                  <p className="text-xs font-normal text-slate-500"> 30%</p>
                </div>
                <div className="flex m-1 items-center justify-center">
                  <p className="h-2 w-2 mr-2 bg-[#ffa000]"></p>
                  <p className="text-xs font-normal text-slate-500">All Team</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-4 mt-6 flex ibuttonFlexDiv ">
            <div className="flex  ">
              <div
                className="ml-1.5 
              "
              >
                <p>
                  <InfoOutlinedIcon />
                </p>
              </div>
              <div>
                <p className="text-sm font-normal text-current break-words">
                  To reach the rank, your team turnover required for raising the
                  rank must be the following proportions: no more than 2 500 EUR
                  in the strongest leg, 1 500 EUR in the second strongest leg
                  and 1 000 EUR from all other legs.
                </p>
              </div>
            </div>
            <div className=" flex items-center justify-center  ibuttonFlexDivbtn ">
              <button className="items-center justify-center rounded bg-sky-500/50 h-11 w-24 text-slate-50 mr-7 ibuttonFlexDivbtn_btn">
                Leg Rules
              </button>
            </div>
          </div>
        </div>
        {/** pearl  */}
        <div className="flex-col border-2 mb-4 rounded ">
          <div className="mb-4  pt-4 pl-2  ">
            <div className="pt-4">
              <div className="flex mb-4">
                <div className="flex grow">
                  <div className="mr-2 h-6 w-6 ">
                    <img
                      src="data:image/png;base64,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"
                      alt="load"
                      className="inline-block"
                    />
                  </div>
                  <p className="text-sm font-medium	flex items-center justify-center ">
                    Pearl
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="box-border">
            <div className=" bg-slate-100 mx-2 h-10 rounded flex">
              <div className="box-border w-52  flex justify-center items-center">
                <p className="text-xs font-normal  flex justify-center items-center  ">
                  Team Turnover
                </p>
              </div>
              <div className=" w-80 ">
                <div>
                  <p className="text-xs font-normal flex items-center justify-center">
                    1st Line Turnover
                  </p>
                </div>
                <div className="flex text-xs justify-between ">
                  <span className="text-xs font-normal text-slate-400">
                    50 % rule
                  </span>
                  <span className="text-xs font-normal text-slate-400">
                    30 % rule
                  </span>
                </div>
              </div>
            </div>
            <div className="  mx-2 h-10  flex">
              <div className="box-border w-52  flex justify-center items-center">
                <p className="text-xs font-normal  flex justify-center items-center  ">
                  10 000 €
                </p>
              </div>
              <div className=" w-80 ">
                <div className="flex text-xs  justify-between ">
                  <div className="text-xs font-normal   flex items-center justify-center h-10  ">
                    <p className=" ">5 000 €</p>
                  </div>
                  <div className="text-xs font-normal flex items-center justify-center h-10">
                    <p>3 000 €</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/***/}
        {/** sappfire */}
        <div className="flex-col border-2 mb-4 rounded ">
          <div className="mb-4  pt-4 pl-2  ">
            <div className="pt-4">
              <div className="flex mb-4">
                <div className="flex grow">
                  <div className="mr-2 h-6 w-6 ">
                    <img
                      src="data:image/png;base64,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"
                      alt="load"
                      className="inline-block"
                    />
                  </div>
                  <p className="text-sm font-medium	flex items-center justify-center ">
                    Sapphire
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="box-border">
            <div className=" bg-slate-100 mx-2 h-10 rounded flex">
              <div className="box-border w-52  flex justify-center items-center">
                <p className="text-xs font-normal  flex justify-center items-center  ">
                  Team Turnover
                </p>
              </div>
              <div className=" w-80 ">
                <div>
                  <p className="text-xs font-normal flex items-center justify-center">
                    1st Line Turnover
                  </p>
                </div>
                <div className="flex text-xs justify-between ">
                  <span className="text-xs font-normal text-slate-400">
                    50 % rule
                  </span>
                  <span className="text-xs font-normal text-slate-400">
                    30 % rule
                  </span>
                </div>
              </div>
            </div>
            <div className="  mx-2 h-10  flex">
              <div className="box-border w-52  flex justify-center items-center">
                <p className="text-xs font-normal  flex justify-center items-center  ">
                  25 000 €
                </p>
              </div>
              <div className=" w-80 ">
                <div className="flex text-xs  justify-between ">
                  <div className="text-xs font-normal   flex items-center justify-center h-10  ">
                    <p className=" "> 12 500 €</p>
                  </div>
                  <div className="text-xs font-normal  flex items-center justify-center h-10">
                    <p> 7 500 €</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/** ruby */}
        <div className="flex-col border-2 mb-4 rounded ">
          <div className="mb-4  pt-4 pl-2  ">
            <div className="pt-4">
              <div className="flex mb-4">
                <div className="flex grow">
                  <div className="mr-2 h-6 w-6 ">
                    <img
                      src="data:image/png;base64,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"
                      alt="load"
                      className="inline-block"
                    />
                  </div>
                  <p className="text-sm font-medium	flex items-center justify-center ">
                    Ruby
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="box-border">
            <div className=" bg-slate-100 mx-2 h-10 rounded flex">
              <div className="box-border w-52  flex justify-center items-center">
                <p className="text-xs font-normal  flex justify-center items-center  ">
                  Team Turnover
                </p>
              </div>
              <div className=" w-80 ">
                <div>
                  <p className="text-xs font-normal flex items-center justify-center">
                    1st Line Turnover
                  </p>
                </div>
                <div className="flex text-xs justify-between ">
                  <span className="text-xs font-normal text-slate-400">
                    50 % rule
                  </span>
                  <span className="text-xs font-normal text-slate-400">
                    30 % rule
                  </span>
                </div>
              </div>
            </div>
            <div className="  mx-2 h-10  flex">
              <div className="box-border w-52  flex justify-center items-center">
                <p className="text-xs font-normal  flex justify-center items-center  ">
                  50 000 €
                </p>
              </div>
              <div className=" w-80 ">
                <div className="flex text-xs  justify-between ">
                  <div className="text-xs font-normal    flex items-center justify-center h-10  ">
                    <p>25 000 €</p>
                  </div>
                  <div className="text-xs font-normal  flex items-center justify-center h-10">
                    <p>15 000 €</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/** emerlamd */}
        <div className="flex-col border-2 mb-4 rounded ">
          <div className="mb-4  pt-4 pl-2  ">
            <div className="pt-4">
              <div className="flex mb-4">
                <div className="flex grow">
                  <div className="mr-2 h-6 w-6 ">
                    <img
                      src="data:image/png;base64,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"
                      alt="load"
                      className="inline-block"
                    />
                  </div>
                  <p className="text-sm font-medium	flex items-center justify-center ">
                    Emerald
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="box-border">
            <div className=" bg-slate-100 mx-2 h-10 rounded flex">
              <div className="box-border w-52  flex justify-center items-center">
                <p className="text-xs font-normal  flex justify-center items-center  ">
                  Team Turnover
                </p>
              </div>
              <div className=" w-80 ">
                <div>
                  <p className="text-xs font-normal flex items-center justify-center">
                    1st Line Turnover
                  </p>
                </div>
                <div className="flex text-xs justify-between ">
                  <span className="text-xs font-normal text-slate-400">
                    50 % rule
                  </span>
                  <span className="text-xs font-normal text-slate-400">
                    30 % rule
                  </span>
                </div>
              </div>
            </div>
            <div className="  mx-2 h-10  flex">
              <div className="box-border w-52  flex justify-center items-center">
                <p className="text-xs font-normal  flex justify-center items-center  ">
                  100 000 €
                </p>
              </div>
              <div className=" w-80 ">
                <div className="flex text-xs  justify-between ">
                  <div className="text-xs font-normal  flex items-center justify-center h-10  ">
                    <p>50 000 €</p>
                  </div>
                  <div className="text-xs font-normal  flex items-center justify-center h-10">
                    <p>30 000 €</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/** diamond*/}
        <div className="flex-col border-2 mb-4 rounded ">
          <div className="mb-4  pt-4 pl-2  ">
            <div className="pt-4">
              <div className="flex mb-4">
                <div className="flex grow">
                  <div className="mr-2 h-6 w-6 ">
                    <img
                      src="data:image/png;base64,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"
                      alt="load"
                      className="inline-block"
                    />
                  </div>
                  <p className="text-sm font-medium	flex items-center justify-center ">
                    Diamond
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="box-border">
            <div className=" bg-slate-100 mx-2 h-10 rounded flex">
              <div className="box-border w-52  flex justify-center items-center">
                <p className="text-xs font-normal  flex justify-center items-center  ">
                  Team Turnover
                </p>
              </div>
              <div className=" w-80 ">
                <div>
                  <p className="text-xs font-normal flex items-center justify-center">
                    1st Line Turnover
                  </p>
                </div>
                <div className="flex text-xs justify-between ">
                  <span className="text-xs font-normal text-slate-400">
                    50 % rule
                  </span>
                  <span className="text-xs font-normal text-slate-400">
                    30 % rule
                  </span>
                </div>
              </div>
            </div>
            <div className="  mx-2 h-10  flex">
              <div className="box-border w-52  flex justify-center items-center">
                <p className="text-xs font-normal  flex justify-center items-center  ">
                  250 000 €
                </p>
              </div>
              <div className=" w-80 ">
                <div className="flex text-xs  justify-between ">
                  <div className="text-xs font-normal   flex items-center justify-center h-10  ">
                    <p>125 000 €</p>
                  </div>
                  <div className="text-xs font-normal  flex items-center justify-center h-10">
                    <p> 75 000 €</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/**blue diampmd */}
        <div className="flex-col border-2 mb-4 rounded ">
          <div className="mb-4  pt-4 pl-2  ">
            <div className="pt-4">
              <div className="flex mb-4">
                <div className="flex grow">
                  <div className="mr-2 h-6 w-6 ">
                    <img
                      src="data:image/png;base64,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"
                      alt="load"
                      className="inline-block"
                    />
                  </div>
                  <p className="text-sm font-medium	flex items-center justify-center ">
                    Blue Diamond
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="box-border">
            <div className=" bg-slate-100 mx-2 h-10 rounded flex">
              <div className="box-border w-52  flex justify-center items-center">
                <p className="text-xs font-normal  flex justify-center items-center  ">
                  Team Turnover
                </p>
              </div>
              <div className=" w-80 ">
                <div>
                  <p className="text-xs font-normal flex items-center justify-center">
                    1st Line Turnover
                  </p>
                </div>
                <div className="flex text-xs justify-between ">
                  <span className="text-xs font-normal text-slate-400">
                    50 % rule
                  </span>
                  <span className="text-xs font-normal text-slate-400">
                    30 % rule
                  </span>
                </div>
              </div>
            </div>
            <div className="  mx-2 h-10  flex">
              <div className="box-border w-52  flex justify-center items-center">
                <p className="text-xs font-normal  flex justify-center items-center  ">
                  500 000 €
                </p>
              </div>
              <div className=" w-80 ">
                <div className="flex text-xs  justify-between ">
                  <div className="text-xs font-normal   flex items-center justify-center h-10  ">
                    <p className=" ">250 000 €</p>
                  </div>
                  <div className="text-xs font-normal  flex items-center justify-center h-10">
                    <p>150 000 €</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/** green diamond  */}
        <div className="flex-col border-2 mb-4 rounded ">
          <div className="mb-4  pt-4 pl-2  ">
            <div className="pt-4">
              <div className="flex mb-4">
                <div className="flex grow">
                  <div className="mr-2 h-6 w-6 ">
                    <img
                      src="data:image/png;base64,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"
                      alt="load"
                      className="inline-block"
                    />
                  </div>
                  <p className="text-sm font-medium	flex items-center justify-center ">
                    Green Diamond
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="box-border  ">
            <div className=" bg-slate-100 mx-2 h-10 rounded flex ">
              <div className="box-border w-52  flex justify-center items-center">
                <p className="text-xs font-normal  flex justify-center items-center  ">
                  Team Turnover
                </p>
              </div>
              <div className=" w-80 ">
                <div>
                  <p className="text-xs font-normal flex items-center justify-center">
                    1st Line Turnover
                  </p>
                </div>
                <div className="flex text-xs justify-between ">
                  <span className="text-xs font-normal text-slate-400">
                    50 % rule
                  </span>
                  <span className="text-xs font-normal text-slate-400">
                    30 % rule
                  </span>
                </div>
              </div>
            </div>
            <div className="  mx-2 h-10  flex">
              <div className="box-border w-52  flex justify-center items-center">
                <p className="text-xs font-normal  flex justify-center items-center  ">
                  1 000 000 €
                </p>
              </div>
              <div className=" w-80 ">
                <div className="flex text-xs  justify-between ">
                  <div className="text-xs font-normal   flex items-center justify-center h-10  ">
                    <p className=" "> 500 000 €</p>
                  </div>
                  <div className="text-xs font-normal  flex items-center justify-center h-10">
                    <p>300 000 €</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/** perple diamond  */}
        <div className="flex-col border-2 mb-4 rounded ">
          <div className="mb-4  pt-4 pl-2  ">
            <div className="pt-4">
              <div className="flex mb-4">
                <div className="flex grow">
                  <div className="mr-2 h-6 w-6 ">
                    <img
                      src="data:image/png;base64,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"
                      alt="load"
                      className="inline-block"
                    />
                  </div>
                  <p className="text-sm font-medium	flex items-center justify-center ">
                    Purple Diamond
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="box-border">
            <div className=" bg-slate-100 mx-2 h-10 rounded flex">
              <div className="box-border w-52  flex justify-center items-center">
                <p className="text-xs font-normal  flex justify-center items-center  ">
                  Team Turnover
                </p>
              </div>
              <div className=" w-80 ">
                <div>
                  <p className="text-xs font-normal flex items-center justify-center">
                    1st Line Turnover
                  </p>
                </div>
                <div className="flex text-xs justify-between ">
                  <span className="text-xs font-normal text-slate-400">
                    50 % rule
                  </span>
                  <span className="text-xs font-normal text-slate-400">
                    30 % rule
                  </span>
                </div>
              </div>
            </div>
            <div className="  mx-2 h-10  flex">
              <div className="box-border w-52  flex justify-center items-center">
                <p className="text-xs font-normal  flex justify-center items-center  ">
                  2 000 000 €
                </p>
              </div>
              <div className=" w-80 ">
                <div className="flex text-xs  justify-between ">
                  <div className="text-xs font-normal   flex items-center justify-center h-10  ">
                    <p className=" ">1 000 000 €</p>
                  </div>
                  <div className="text-xs font-normal  flex items-center justify-center h-10">
                    <p> 600 000 €</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/** red diamond  */}
        <div className="flex-col border-2 mb-4 rounded ">
          <div className="mb-4  pt-4 pl-2  ">
            <div className="pt-4">
              <div className="flex mb-4">
                <div className="flex grow">
                  <div className="mr-2 h-6 w-6 ">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAMAAADQmBKKAAAC+lBMVEUAAAD68bj78LD37q368Lj68Lf966P78bf78bvNv2r36JLYyHG9sF21qVytoFjt3oXr35jDtWbTxGz68Ljf0Hjz5I24q1uzpln565f68bvp2oLRwmrn2IDm1n768Lfu4Iz68brAsVq8rVqpnVj565nz5IutoVn15o7PwGj88br58bT57qjm1n768br3543+8KqAcjJ/czf65obVxWqrlzeZiDT86YqIdBj9645+czqAcS+5pkiLdxn0332YgiD55oi2o0SAczSMfDP98Kbfxl/Ht13HtViWhjTm1XujkTWPeRj97ZqumjqllDqIezju2HWhiyjo0W7bym6+q02cijOPfzL97p3YyG6JeTKunkO0oECikjmejTSEchmSehb965LNul26qU6wnT+DdDGmjijy4onq02/CsFOXhSeTgSeUfyDPvmT244O/rVGzoEORgjmBdTaolDWSgTKOdxb97Jby3Hrh0HbbzHPiymOolzyFeDmgjzaOfB6Xfhbw34XfznPnz2rMvGKzo0mtmz+LfjmOgDiEdzWdhyX976HLt1rFslW3p02rmTyhhx/i0nmcjDiVhjh+cC+ehBzt3YT45IP04IHq1XPQvV/EtFq9qUqAdTrkzWe2pEmUgzVmXS2liyKagRjs24Dp2H3KumCwoEemkzWGdzGZiCz788Pp2YH34oDCsle/r1a8rFKynTyzmzWhjjKkkC/56Y/w2nfs1nLWw2eskyqqkCf25ovw3X7t2XnZx2riy2fTwGOZiTd8cDadiy7+8ayfjzmvli6TfRvSwmepki69pkOymTD565rDr0/QwGf89c2Zijq2njh8bzOslTB2ayxqXyXezHC5o0CumDSOfSf67qnz5IxuZC6omUG5oTuKeS3kz23Is1Lk0nb9+Nz99ci1p1enm1f999T78ryUhjyIeCR7ahT57KH565XawVnBq0j677ByZib9+eL78LR1azStoFeEdi1wYROCdC3z5Zd7bieBciS7rVn66Y7NtE6aj0347K24EgaCAAAALXRSTlMAnz8f32MQj38f+4FaQKM/LxDbz52UkHvFv72fWtyv9+/nz7+mdOrftU9/f/rPGUX1AAAPzklEQVR42uyUP4uDMBjGjec/Oh106lK6doj3IRxv9xv0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"
                      alt="load"
                      className="inline-block"
                    />
                  </div>
                  <p className="text-sm font-medium	flex items-center justify-center ">
                    Amber
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="box-border">
            <div className=" bg-slate-100 mx-2 h-10 rounded flex">
              <div className="box-border w-52  flex justify-center items-center">
                <p className="text-xs font-normal  flex justify-center items-center  ">
                  Team Turnover
                </p>
              </div>
              <div className=" w-80 ">
                <div>
                  <p className="text-xs font-normal flex items-center justify-center">
                    1st Line Turnover
                  </p>
                </div>
                <div className="flex text-xs justify-between ">
                  <span className="text-xs font-normal text-slate-400">
                    50 % rule
                  </span>
                  <span className="text-xs font-normal text-slate-400">
                    30 % rule
                  </span>
                </div>
              </div>
            </div>
            <div className="  mx-2 h-10  flex">
              <div className="box-border w-52  flex justify-center items-center">
                <p className="text-xs font-normal  flex justify-center items-center  ">
                  0 €
                </p>
              </div>
              <div className=" w-80 ">
                <div className="flex text-xs  justify-between ">
                  <div className="text-xs font-normal  text-slate-400 flex items-center justify-center h-10  ">
                    <p className=" ">-</p>
                  </div>
                  <div className="text-xs font-normal text-slate-400 flex items-center justify-center h-10">
                    <p>-</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/** black diamind  */}
        <div className="flex-col border-2 mb-4 rounded ">
          <div className="mb-4  pt-4 pl-2  ">
            <div className="pt-4">
              <div className="flex mb-4">
                <div className="flex grow">
                  <div className="mr-2 h-6 w-6 ">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAMAAADQmBKKAAAC+lBMVEUAAAD68bj78LD37q368Lj68Lf966P78bf78bvNv2r36JLYyHG9sF21qVytoFjt3oXr35jDtWbTxGz68Ljf0Hjz5I24q1uzpln565f68bvp2oLRwmrn2IDm1n768Lfu4Iz68brAsVq8rVqpnVj565nz5IutoVn15o7PwGj88br58bT57qjm1n768br3543+8KqAcjJ/czf65obVxWqrlzeZiDT86YqIdBj9645+czqAcS+5pkiLdxn0332YgiD55oi2o0SAczSMfDP98Kbfxl/Ht13HtViWhjTm1XujkTWPeRj97ZqumjqllDqIezju2HWhiyjo0W7bym6+q02cijOPfzL97p3YyG6JeTKunkO0oECikjmejTSEchmSehb965LNul26qU6wnT+DdDGmjijy4onq02/CsFOXhSeTgSeUfyDPvmT244O/rVGzoEORgjmBdTaolDWSgTKOdxb97Jby3Hrh0HbbzHPiymOolzyFeDmgjzaOfB6Xfhbw34XfznPnz2rMvGKzo0mtmz+LfjmOgDiEdzWdhyX976HLt1rFslW3p02rmTyhhx/i0nmcjDiVhjh+cC+ehBzt3YT45IP04IHq1XPQvV/EtFq9qUqAdTrkzWe2pEmUgzVmXS2liyKagRjs24Dp2H3KumCwoEemkzWGdzGZiCz788Pp2YH34oDCsle/r1a8rFKynTyzmzWhjjKkkC/56Y/w2nfs1nLWw2eskyqqkCf25ovw3X7t2XnZx2riy2fTwGOZiTd8cDadiy7+8ayfjzmvli6TfRvSwmepki69pkOymTD565rDr0/QwGf89c2Zijq2njh8bzOslTB2ayxqXyXezHC5o0CumDSOfSf67qnz5IxuZC6omUG5oTuKeS3kz23Is1Lk0nb9+Nz99ci1p1enm1f999T78ryUhjyIeCR7ahT57KH565XawVnBq0j677ByZib9+eL78LR1azStoFeEdi1wYROCdC3z5Zd7bieBciS7rVn66Y7NtE6aj0347K24EgaCAAAALXRSTlMAnz8f32MQj38f+4FaQKM/LxDbz52UkHvFv72fWtyv9+/nz7+mdOrftU9/f/rPGUX1AAAPzklEQVR42uyUP4uDMBjGjec/Oh106lK6doj3IRxv9xv0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"
                      alt="load"
                      className="inline-block"
                    />
                  </div>
                  <p className="text-sm font-medium	flex items-center justify-center ">
                    Amber
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="box-border">
            <div className=" bg-slate-100 mx-2 h-10 rounded flex">
              <div className="box-border w-52  flex justify-center items-center">
                <p className="text-xs font-normal  flex justify-center items-center  ">
                  Team Turnover
                </p>
              </div>
              <div className=" w-80 ">
                <div>
                  <p className="text-xs font-normal flex items-center justify-center">
                    1st Line Turnover
                  </p>
                </div>
                <div className="flex text-xs justify-between ">
                  <span className="text-xs font-normal text-slate-400">
                    50 % rule
                  </span>
                  <span className="text-xs font-normal text-slate-400">
                    30 % rule
                  </span>
                </div>
              </div>
            </div>
            <div className="  mx-2 h-10  flex">
              <div className="box-border w-52  flex justify-center items-center">
                <p className="text-xs font-normal  flex justify-center items-center  ">
                  0 €
                </p>
              </div>
              <div className=" w-80 ">
                <div className="flex text-xs  justify-between ">
                  <div className="text-xs font-normal  text-slate-400 flex items-center justify-center h-10  ">
                    <p className=" ">-</p>
                  </div>
                  <div className="text-xs font-normal text-slate-400 flex items-center justify-center h-10">
                    <p>-</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyRank;
