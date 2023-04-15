import React from "react";

function Header2() {
  return (
    <div className="w-full flex justify-center border-b flex-col items-center">
      <div className="max-w-6xl w-full flex justify-between items-center">
        <div className="h-16 flex items-center">
          {/** /icons/Xpic.png  */}
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAzIiBoZWlnaHQ9IjIwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMDcuNTQzLjNoNC45MjZsMS43MDUgNi4wMjVMMTE1LjkwOC4zaDQuOTI1bC0zLjIxOSA5LjMyNyAxLjQwMyA0LjA3MiA0LjIxLTEzLjRoNS44MzNsLTcuNjQ5IDE5LjUzNmgtNC40NTdsLTIuNzgtNi45ODktMi43NTEgNi45OWgtNC40NTdMOTkuMzE2LjNoNS44MDZsNC4yMzcgMTMuNCAxLjM0OS00LjA3M0wxMDcuNTQzLjNaTTEzOC40MjQgMjBjLTEuNDg2IDAtMi44MzQtLjI4NC00LjA0NS0uODUzYTEwLjEyNyAxMC4xMjcgMCAwIDEtMy4xMDktMi4yMjhjLS44NjItLjkzNi0xLjUzMi0yLTIuMDA4LTMuMTkyYTkuODQgOS44NCAwIDAgMS0uNzE2LTMuNjg3YzAtMS4yODQuMjQ4LTIuNTIyLjc0My0zLjcxNWE5LjgwNSA5LjgwNSAwIDAgMSAyLjA2NC0zLjEzNiAxMC4wMiAxMC4wMiAwIDAgMSAzLjE2NC0yLjE3NGMxLjIyOS0uNTUgMi41NjgtLjgyNiA0LjAxNy0uODI2IDEuNDg2IDAgMi44MzQuMjg1IDQuMDQ1Ljg1M2E5LjkwNCA5LjkwNCAwIDAgMSAzLjEwOSAyLjI1N2MuODYyLjkzNSAxLjUyMiAyIDEuOTgxIDMuMTkxYTkuNzcgOS43NyAwIDAgMSAuNzE1IDMuNjYgOS41OTYgOS41OTYgMCAwIDEtLjc0MiAzLjcxNCAxMC4yNiAxMC4yNiAwIDAgMS0yLjA2NCAzLjEzN2MtLjg4MS44OTktMS45MzUgMS42MjMtMy4xNjQgMi4xNzQtMS4yMTEuNTUtMi41NDEuODI1LTMuOTkuODI1Wm0tNC40My05LjkwNWMwIC42Ni4wOTIgMS4zMDIuMjc1IDEuOTI2LjE4NC42MDUuNDU5IDEuMTQ2LjgyNiAxLjYyMy4zNjcuNDc3LjgyNS44NjIgMS4zNzUgMS4xNTYuNTY5LjI5MyAxLjIzOS40NCAyLjAwOS40NC43NyAwIDEuNDQtLjE0NyAyLjAwOS0uNDRhNC4xMyA0LjEzIDAgMCAwIDEuMzc1LTEuMTgzIDQuODkgNC44OSAwIDAgMCAuNzk4LTEuNjc5IDYuNjc2IDYuNjc2IDAgMCAwIC4yNzUtMS44OThjMC0uNjYtLjA5MS0xLjI5My0uMjc1LTEuODk5YTQuNDE3IDQuNDE3IDAgMCAwLS44NTMtMS42MjMgMy44NSAzLjg1IDAgMCAwLTEuNDAzLTEuMTI4Yy0uNTUtLjI5NC0xLjIwMS0uNDQtMS45NTMtLjQ0LS43NzEgMC0xLjQ0LjE0Ni0yLjAwOS40NGE0LjA4MiA0LjA4MiAwIDAgMC0xLjM3NiAxLjE4MyA0Ljk3NCA0Ljk3NCAwIDAgMC0uODI1IDEuNjUgNy4wODMgNy4wODMgMCAwIDAtLjI0OCAxLjg3MlpNMTUwLjY1OSAxOS44MzVWLjNoOC45NjljLjk1NCAwIDEuODM1LjIwMSAyLjY0Mi42MDVhNi40MDEgNi40MDEgMCAwIDEgMi4wNjMgMS41NCA2Ljg0NyA2Ljg0NyAwIDAgMSAxLjM3NiAyLjE3NCA2LjQyIDYuNDIgMCAwIDEgLjQ5NSAyLjQ1IDcuMDQxIDcuMDQxIDAgMCAxLS43NDIgMy4xOSA2LjUyIDYuNTIgMCAwIDEtMi4wNjQgMi4zOTVsNC4xMjcgNy4xODFoLTYuMDUzbC0zLjQzOS01Ljk5OGgtMi4wMDl2NS45OThoLTUuMzY1Wm01LjM2NS0xMC42NzZoMy4zODRjLjMzIDAgLjYzMy0uMTgzLjkwOC0uNTUuMjk0LS4zNjcuNDQxLS44OC40NDEtMS41NCAwLS42OC0uMTY2LTEuMTkzLS40OTYtMS41NDItLjMzLS4zNjctLjY2LS41NS0uOTktLjU1aC0zLjI0N1Y5LjE2Wk0xNjkuMjI2IDE5LjgzNVYuM2g1LjM2NXYxNC44NThoOC44NnY0LjY3N2gtMTQuMjI1Wk0xODUuMzIxIDE5LjgzNVYuM2g3LjUxMmMxLjYxNCAwIDMuMDM1LjI1NiA0LjI2NC43N3MyLjI1NyAxLjIxIDMuMDgyIDIuMDkxYTguNzUyIDguNzUyIDAgMCAxIDEuODcxIDMuMTFjLjQyMiAxLjE3My42MzMgMi40My42MzMgMy43NjkgMCAxLjQ4Ni0uMjM5IDIuODM0LS43MTUgNC4wNDVhOC43MjggOC43MjggMCAwIDEtMS45ODIgMy4wODFjLS44NjIuODQ0LTEuODk4IDEuNTA0LTMuMTA5IDEuOTgxLTEuMjEuNDU5LTIuNTU5LjY4OC00LjA0NC42ODhoLTcuNTEyWm0xMS45MTQtOS43OTVhNi42NyA2LjY3IDAgMCAwLS4zMDMtMi4wNjQgNC40OTIgNC40OTIgMCAwIDAtLjg4LTEuNTk2IDMuNjUzIDMuNjUzIDAgMCAwLTEuMzc2LTEuMDE4IDQuMzA2IDQuMzA2IDAgMCAwLTEuODQzLS4zODVoLTIuMTQ3djEwLjE4aDIuMTQ3Yy42OTcgMCAxLjMyLS4xMjggMS44NzEtLjM4NWEzLjc4MyAzLjc4MyAwIDAgMCAxLjM3NS0xLjA3M2MuMzg2LS40NTguNjctMSAuODUzLTEuNjIzYTYuNTc0IDYuNTc0IDAgMCAwIC4zMDMtMi4wMzZaIiBmaWxsPSIjMjFCRUU4Ii8+PHBhdGggZD0iTTE5Ljc4NSAxOS41MzZWMGg1LjM2NnYxNC44NThoOC44NnY0LjY3OEgxOS43ODRaTTQwLjk0MyAwaDQuODk4bDYuNzY4IDE5LjUzNmgtNS40NDhsLTEuMTgzLTMuODI1aC01LjJsLTEuMTU2IDMuODI1aC01LjQ3NUw0MC45NDMgMFptNC4xODIgMTIuMTM0LTEuNzMzLTYuMDUzLTEuODE2IDYuMDUzaDMuNTVaTTY3LjY0OCA0LjY3OGgtNS42MTN2MTQuODU4SDU2LjY3VjQuNjc4aC01LjY0VjBoMTYuNjE4djQuNjc4Wk02OS42MDIgMTkuNTM2VjBoNS4zNjZ2MTkuNTM2aC01LjM2NlpNODMuNyA5LjkzM3Y5LjYwM2gtNS4zNjVWMGg0LjE4Mmw3Ljg0MiA5LjkzM1YwaDUuMzY2djE5LjUzNkg5MS40Nkw4My43IDkuOTMzWiIgZmlsbD0iIzMzMyIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUuODQ4IDEwLjQ5MUg1LjUyOFYuMTloNC44NDdjLjkzNyAwIDEuOC4xOTkgMi42LjU4Mi43OTMuMzkgMS40NzMuODkyIDIuMDQyIDEuNTIzYTcuMTU5IDcuMTU5IDAgMCAxIDEuMzM3IDIuMTU1Yy4zMjUuODEuNDg3IDEuNjIyLjQ4NyAyLjQzOSAwIC44NTQtLjE1NiAxLjY4NC0uNDYyIDIuNDk1LS4xNS4zOS0uMzI1Ljc2MS0uNTMxIDEuMTA4Wm0tNC44NTQtNS4yMzdjLS4zMjUtLjI4NS0uNjUtLjQzNC0uOTc1LS40MzRINy4zN3Y0LjE0MmgyLjc4N2MuMzI1IDAgLjYyNC0uMTU1LjkwNS0uNDUyLjI4Mi0uMzAzLjQyLS44NDIuNDItMS42MjIgMC0uNzk5LS4xNjMtMS4zNDMtLjQ4OC0xLjYzNFptLTcuMDQ2IDYuODAzdjcuNDc5SDIuMTA1di01Ljk0NEgwdi0xLjUzNWgzLjk0OFptMC0xLjU2NlYuMTlIMi4xMDV2OC43NzNIMHYxLjUzaDMuOTQ4Wm0xLjU4IDkuMDQ1di03LjQ3M2g5LjA0NmE2LjE5IDYuMTkgMCAwIDEtMS40ODEuOTc4Yy0uNzgxLjM3Mi0xLjY0My41NTgtMi41OC41NThINy4zNzd2NS45MzdoLTEuODVaIiBmaWxsPSIjMzMzIi8+PC9zdmc+Cg=="
            alt=""
            className="w-44"
          />
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
