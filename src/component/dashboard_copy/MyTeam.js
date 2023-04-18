import React, { useState } from "react";
import "./MyTeam.css";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";

const MyTeam = () => {
  const [page, setPage] = useState(<SerchMyTeam />);
  return (
    <div className="px-8 w-full flex h-fit justify-between flex-col ">
      <div className="flex  media_for_refLink_or_publickPage_div">
        <div className="bg-slate-50 rounded flex justify-start items-center h-13     border  w-full media_for_refrralLink_div">
          <div className="flex justify-start items-center px-6 text-lg w-full flex-wrap text-gray-400  ">
            <div className="m-0.5"> Referral link : </div>
            <span className=" text-gray-700 m-0.5 text-base media_for_refrralLink_div_span">
              https://platinworld.com/en/2714042821
            </span>
          </div>
          <div className="text-gray-500 flex px-4">
            <img src="/svg/qrcode.svg" alt="" className="cursor-pointer" />
            <img src="/svg/copy.svg" alt="" className="px-4 cursor-pointer" />
          </div>
        </div>
        <div className="h-fit ">
          <button className="py-3 px-6  bg-cyan-100 ml-2  text-blue-400 rounded-sm whitespace-nowrap media_for_publicPage_btn">
            Public page
          </button>
        </div>
      </div>
      <div>
        <a
          className="text-xs font-normal underline underline-offset-2 mt-2 text-gray-400 cursor-pointer"
          href="https://platinworld.com/documents/en/EthicalRulesandGeneralTermsforDistributionPartnersPW.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Terms and conditions of sale and distribution
        </a>
      </div>
      <section className="mt-4">
        <div className="flex">
          <div className="mySponser_myTeam_div">
            <div className="mySponser_myTeam_div_2 w-96">
              <div className="mb-6">
                <h1 className="text-base font-medium">My sponsor </h1>
              </div>
              <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded">
                <div className="  p-4">
                  <div className="h-16 rounded   bg-slate-100 flex  ">
                    <div className=" ml-3 grid place-items-center">
                      <img
                        className="h-10 w-10 rounded-full align-middle"
                        alt="load..."
                        src="https://www.gravatar.com/avatar/f24da3394d699328615cd0c9cadf6e30?s=300&d=mm&r=g"
                      />
                    </div>
                    <div className="ml-3    grid place-items-center ">
                      <div>
                        <div className="text-base font-medium">Yug Pawar</div>
                        <div className="text-sm font-normal text-slate-400">
                          sponser
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4  text-center bg-sky-200  h-9 rounded align-middle border-2">
                    <a className="text-center" href="p">
                      Public Profile
                    </a>
                  </div>
                </div>
                <div className="border-t-2 h-32">
                  <div className="">
                    <div className="flex mt-4 ml-2 ">
                      <div className="  ">
                        <MailRoundedIcon color="secondary" fontSize="small" />
                      </div>
                      <div className="text-sm font-normal ml-2  ">
                        50536dp@gmail.com
                      </div>
                      <div>
                        <button className="ml-20">
                          <ContentCopyRoundedIcon fontSize="small" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className=" ml-14  mySponser_myTeam_div_2 w-96">
                  <div className="mb-6">
                    <h1 className="text-base font-medium ">My sponsor </h1>
                  </div>
                  <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-64 rounded">
                    <div className="  p-4">
                      <div className="h-16 rounded   bg-slate-100 flex  ">
                        <div className=" ml-3 grid place-items-center">
                          <img
                            className="h-10 w-10 rounded-full align-middle"
                            alt="load..."
                            src="https://www.gravatar.com/avatar/8c3c16b03dd0bb7e212f2eb907fdc8bf?s=300&d=mm&r=g"
                          />
                        </div>
                        <div className="ml-3    grid place-items-center ">
                          <div>
                            <div className="text-base font-medium">
                              Vishal Sathvara
                            </div>
                            <div className="text-sm font-normal text-slate-400">
                              Not verified
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mb-6 mt-6 rounded flex bg-slate-100 ">
        <div
          onClick={(e) => setPage(<SerchMyTeam />)}
          className="text-center text-base py-3 px-6 font-medium"
        >
          Serch My Team
        </div>

        <div
          onClick={(e) => setPage(<Performance />)}
          className="text-center py-3 px-6 text-base font-medium"
        >
          Performance Tree
        </div>

        
      </div>
      <div className="bg-slate-200 h-32 rounded">{page}</div>
    </div>
  );
};
const Performance = () => {
  return (
    <>
      <h1> performance deev</h1>
    </>
  );
};


const SerchMyTeam = () => {
  return (
    <>
      <div>
        <h1>serch my team  </h1>
      </div>
    </>
  );
};

export default MyTeam;
