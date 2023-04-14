import React from "react";
import "./Myrank.css"

const MyRank = () => {
  return (
    <div className="px-8 w-full flex h-fit justify-between flex-col  ">
      <div className="border-1 mb-6  ">
        <h1 className="text-base font-medium break-normal">My Rank</h1>
        <p className="mt-1 text-slate-400 text-base break-normal">
          It is awarded according to the rank status scheme. The status is
          earned automatically when a certain status turnover is reached. This
          status is awarded once when a certain rank is reached.
        </p>
      </div>
      <section className="box-border block ">
        {/** udeuiu */}
        <div className="grid gap-6 ">
          <div className="flex box-border shadow-2xl  w-full">
            <div className="p-4 box-border w-full ">
              <div className="flex  justify-between ">
                <div className="flex  ">
                  <div className="grid  place-items-center ">
                    <span className="m-2">
                      <img
                        className="h-9"
                        alt="img"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAMAAADQmBKKAAAC+lBMVEUAAAD68bj78LD37q368Lj68Lf966P78bf78bvNv2r36JLYyHG9sF21qVytoFjt3oXr35jDtWbTxGz68Ljf0Hjz5I24q1uzpln565f68bvp2oLRwmrn2IDm1n768Lfu4Iz68brAsVq8rVqpnVj565nz5IutoVn15o7PwGj88br58bT57qjm1n768br3543+8KqAcjJ/czf65obVxWqrlzeZiDT86YqIdBj9645+czqAcS+5pkiLdxn0332YgiD55oi2o0SAczSMfDP98Kbfxl/Ht13HtViWhjTm1XujkTWPeRj97ZqumjqllDqIezju2HWhiyjo0W7bym6+q02cijOPfzL97p3YyG6JeTKunkO0oECikjmejTSEchmSehb965LNul26qU6wnT+DdDGmjijy4onq02/CsFOXhSeTgSeUfyDPvmT244O/rVGzoEORgjmBdTaolDWSgTKOdxb97Jby3Hrh0HbbzHPiymOolzyFeDmgjzaOfB6Xfhbw34XfznPnz2rMvGKzo0mtmz+LfjmOgDiEdzWdhyX976HLt1rFslW3p02rmTyhhx/i0nmcjDiVhjh+cC+ehBzt3YT45IP04IHq1XPQvV/EtFq9qUqAdTrkzWe2pEmUgzVmXS2liyKagRjs24Dp2H3KumCwoEemkzWGdzGZiCz788Pp2YH34oDCsle/r1a8rFKynTyzmzWhjjKkkC/56Y/w2nfs1nLWw2eskyqqkCf25ovw3X7t2XnZx2riy2fTwGOZiTd8cDadiy7+8ayfjzmvli6TfRvSwmepki69pkOymTD565rDr0/QwGf89c2Zijq2njh8bzOslTB2ayxqXyXezHC5o0CumDSOfSf67qnz5IxuZC6omUG5oTuKeS3kz23Is1Lk0nb9+Nz99ci1p1enm1f999T78ryUhjyIeCR7ahT57KH565XawVnBq0j677ByZib9+eL78LR1azStoFeEdi1wYROCdC3z5Zd7bieBciS7rVn66Y7NtE6aj0347K24EgaCAAAALXRSTlMAnz8f32MQj38f+4FaQKM/LxDbz52UkHvFv72fWtyv9+/nz7+mdOrftU9/f/rPGUX1AAAPzklEQVR42uyUP4uDMBjGjec/Oh106lK6doj3IRxv9xv0u/hRMju5dgxkt6OBZKgg7XRDoXDPa4oc7VrbG/IT3wQj+OPJawKPx+PxeDwej8fj+d98bOMsZYytGUuzOPwI3kgSp8sNv2OzSrdvsQqzJXcILQiNwXLHMg2Dl5JkESegoZQypgOnEWOU4ESUvS6ncMWBFUppbc9D2y/yJgf9sT1bBbOb1Po1MTkdpZXm7TF/oK6Pg0JgmpyiOJgZp0PZnEnmkYaUanlFUGZU+gzmJGFORwxyUuhlWRVEVZWydikBKbpTp/E6m7GX4o3TaSeZ7+Lrxn6s0Cr7SemElGbct2RNvWP0sGicjiycyT1FX+cXGOVICUpzhRRGiMdoKyedvXPZ40J1E0eBvavJSeJEUPN0UuziaQ+TDlkQVDF1oxsopRxK0OJdZyzn2bN9Us6t0fzn0DQNfqUSTYyGwYdx3UEPsIy2v4zqqjPi6UaMTmV73e0gBMqKKADKRPVnguUyhzvu3holLGfPbOdfVus+pIkwDuA4VPT+/l5EURT1zwy6SKHMIE9ObKgrGpeKTly1VkJhW2Oyue2P0tn+Wb6Eg9hLrLWt7N1pwirWUkECS0eiUhBZLtgfEZQE/Z577s5bq+Cmn+e5Z2Lpfd093rkBehLPegxKRkfBcXAFjT/Ap9n1OCjogP8LR8bQ+/dQtGrujAWhx+jhw9/tBoMSjZoCxnE0UqFPc5SIwRAbuvXx40fJhhm8XomeKzGnASuvAQUwIOwfaljlBmB3GpSf4Ueasas2XyL5urAm5rPb7fDd7R3lWeWgBiZACw7kwL9wsrI67NDjouzKnmeJxEfJvBnrKVe6nJghi1OORpIsPJgU7KcBvoSibE7l992HE5LEDNy0l0NPLMNOcUEdP/dlZaHJL8n2sS8AvSrhS1xjGo3dsPB4wdDQ0Kxp/8k8R5KIKQ02yoU594mT4QJjRpnGZ88or/ncs3PutDd0YqHPYNRQlAsGBOXk5OzL4RawZ98emLCAHJg5MIWcFJDJiQGnDx65X+5vn/YD4zNl0GptFCuUw9nzH4Kq0BgwEpGI0eXrQI/BHdO8YEM2p0ausY2xmq6lxFwTfozg9SwW0miMRmOX2qTWuHxwo4xtmTu9C+ajKEKmYUEQnAOf61qy2zDZDl7T2aam0AAiU7vJiEbjhJukcs20fsO+yyiCGDDyIIgHZddup2pK4pQxCLK1lbBp4F6mtC9LO2iO5KvWKFfLtQO8UBNHkJCdDfMPIVZnF0IQpD9Ayo02H9xfN05jR2+Ra01qmUAnrsluyv6ni1gIG3uEqU8FFSaZnKJ8dt+ytN+gX31atZuQy7s4srEQkh0SnBwtvAfoeNAJYEFk3awGhTUYkWspm8uV5ls0SyLxmQjSTWBsUggRJsD5H8DBKsRLYSenuwUzVVgdnlaC0NhsLlt6b9FmyS834W41PUrS3Inw5y+EkzMvqZqRgZYKztFq2mEi5HBTs6X1Fs2GHeTu8/v7IpFumJwuJqgwxcPCh6xmoe56LC8v7xRNW1oJtUxrtGlXpPWU/+UmySCpBi0CI/hHf5jsJP8B1gyzuLi4Kw9rgNlQ3agzu00RuVyjXZTOlv763e9WKEiTqSJJSzPnZIpiBFbWyEj96OhoA3IKOHRSaUANe1KrXZnGlh76rFX4rUGSJOuTjLY0F/MBcHK0nhSE1NXVwTHCqO9lnUOC0ny9gyTVEUJLLBEdtKZnYcBv9ZzLExjFuouT1KUaaWtDPRWo5ShPodOXNvpbSXWfnBB/zdbf91kDHjrgBw0cHNTbMoIkJbTVtQFYGE8Z9fHr8evYfmC1WsLhsJX0m0wRQvQ1m52RIaetFk8gcIrTO2X0aVsqlAEHJ7c3Go1CCcsBqsNeLw2PELeJMIn9PdsUiwXMHp0nCM4dFYgzeiee8i49vZQi91JFlPHmzSFWNQifPl0SDMJVI0yLxW4hpcts1knNCsb1JPFoPB4dzU3NgBBWS/wNdugEVl1ZWUnT7SqV1xwI+v1q91qRQRsNWh1dondYrfsd+wWiUyYnclNwOcMIU3IHVCIW0K4aHLScswbgqm0TGbTF3qd/V1piBo5DAm+E/tI0kTsxGe3H7jCOMBoZ+bW1tfkKczDY6t4qrmeBz+fXl3j1Hk8154TAMC8an5yACNbkZHy4v/8uhjrevt3LOX9eevNm7YFMr8NjVQTdgQWigpb5XGZ9qbeEBpWWStYdrJ85+gUgLDo8fHfKWwx1MG4i+fn5tZllKg9ttlrJH+J29SbKJtV7VXpLo6URsRzh3TlyN9mrZC+Q16yXyD1GO3KgrKz2HU2bza0igxbZZM+PqQZLdEjj3ilvhVI6kMc4hE/ha8Kgtmz8gJS2mD2BH+tEBa22Ece8g7WlUnATnJ/yesqLqYrHL2BwIKUKK2KFEa/Xe2B8vKzUoqPp4Ie14oKM6guqT59K8zn3WC+FHvOePH7Cq/oj5nKR9zK0nEYgaNxLSy0W64el4oK07kFVZma4tL0dJnaPV8WAUz9JVoVibsCowiWc05hKpcqEINW7Et07sUG75OTgYFmZN8wrChcJVBVVcW6kuIrglIOsM6yy8W/jKh3sBLPIoN+s2U9Ik3Ecx/HnKmlkREJ/DhVEx416iJlICsuMFkEbubYE3cHNqFkeZE4J56aQ1ra6rKEj6EkJNTp13GTYScaYB8HhaQPXSXBzTMFDn+/ze/Zsj9bhmb6eNTJmez+/5/n9nsd58Wkol3v+3D4vw7BPTi5PYrflKrx1dQZtZR8/okIZM0Ke7+7ujhiMFougNuhmyJTD6NoVJiveT75XYh1MK8vpb+1f6V+BEdkfCsKC6xbyKoN+h0ybhT1HWauj9RB623/5IhodHV1hHjAtDAWtW4xWq1ll0KnVUHuhUIxa7Y7+I7Dr8OVLKzZABG2SUaYblC23yZ/dtW1f3Gi0Cvnz6oLG9O3FYnMg7uftjhHJSpVRhhKOpsCRlOdkb3ttLeX080ajkFe3MNZ/DfmCwaDPn0gkAh0ONLU8kHU/6Gbw7qMK5ZbBwZZBKYRaWEyuaBtA0M4Wz/NRIVuvLkivdyJojnoCTqfzjcPRP9IiwdtJZUqsBfAaOYXJoUar1YXXKGi2g+c92QZOjbpQKJFKpTRbW1tO8Pm87SaTGHWbkcoIIrpp0AaZQzE5xGwWNLFYTKvTaREUi87OdkQ92TpOlSsL6RRQjg853kekq30dCwFWFLxpGbIqFMfodsvIOhRsVEN0uiSCwlGMUHzqOqfO1UUhtbGx4XMiRswZHp5gujZRxRbhfprVNEYttxHTghMHxwxnfD+mIa4U6xiZZDIGUo9uB0HD/o4OPp25xqlzfj8fQ9AA1cg5A9DWpiFzlGV/TFe0X0AXfKBr2eNJuwMttmCSiREt6MLhFCaZj0eQgIu9OvWZjHYjEtmhGEAJq2mLIUjSTAqFTWJ6Q8+FYjFIkqiRIIYJAyZZMoAefipTz6nTmMlsRSKRDTEnHB4Y0JI2omlTFEEQW3MQzxWapAbayABDu4WgiSiC4kuZOk6lq/mDDRSFUUO0ErFIGcSaWBc0N2sYm02KmYBheKTZ3t728hig9NJVTq2mfHYHQTuI0enCWp0cxIoqTUq2ZoQwE2XUIkptb6ecdMQ8++c5tRry+TAds7AORSD3/CfJJpmr6BI9kmB2YIAmOuiILS42cKpdzx5EQIccOYgoimxlcgMekvaudsZLfF7fXAoDJB6xhSucek1Zdsx0EkUPKEoqFYeYfDJnqZSy0QBFp0JNnHqN2aw3AsogSsL0H5BalGNhUnoDPqesvVQqOXmIh/R1XA2uZQ+qh0hLSfKsAdYCckCV2SoBZrNUKkR58OhvcLVoyGbF01rHhMUcNm1YihyjzOioxlqi0UAisLdXCvC4FYqHxnBK1zhEtBTFxBzA4sZmMGuRS6oq+GpRPsokyPre3mYUPf6psbMc1DZEugguaGEYFrHp65VjpBIejPSnmt/orxbN5fYS+GerRb9az0GtZxGCdliLVOMDp3xsyhlW8hObyF0Rl+DnYJOfXtezWuMAscXRi6DUMEuRYpzICbAUihFLoBOPoywSfj237qfXGl7cPMPV7HQ+G8NtWltVjXSWgtFPQ/FT7PhWho+CXgOe6YtvBokFn+UZxZHT37zI1a7xeuZgB0WPvLhTc4JcI8a4O0HMgFv/4SLLDofdgu+Ie26ereOOoQl3IUlcwakG99eISUT9wGIUJQ9vPVSYfjgt67Q77AYrjpxrdegSdyyn9zPeYLE4twWBBKAmHnezmFsUU+74IemtGJdML8/bLW4LjA2d446n8cq+MFEsFExbLAY1cYvFYEANTFNJLyJ+PKvyim3Qa8YDH08vz3ca8E2GpbeX67hjalhYTHfh7jSQkGLoP77lmp5GDH0a+qyXGu7+26u7lOVyL3e6DDiTloY+nOGOrSkUSs9hIWQ5qHFRzfh4L2AY7sKdis9Vf59hxi3uTrMhnU4LQ/dPcSfgvD5kmcOyTDm0n1LNKzGGVZAnFfiqh0wRM35tZ3aNn1gPXPyqt5jm543IoRrkmKlmZgYtUslLpq/vpUQMoyjPuMsluHAieZ5+P8edkBtjX9MmrMmuNGrMrIZyehBDGeSdrI9hYVNImTELgjAz9P0yd1Iaz66OmaNWt4X2VBA8qJnCzlOM1HLvsHfvFvpgyYNXCx5B6Pnw6UIjd3Iu/v7bvh2rtg0EYBxX7dqm6eDQ1GBKAh1iAknpomdwuSWLl6N0iQbRQXTVbRFSp2LwoiE3ZLHVRei0BApZOnowN3qo8BtYYOjkud9JjpsHsJwM9zOy0KQ/d9rubppewvefQbCpSVHzEPNDuVJwK1fFgSffrFvrNgBOwo6xU69NM7n8slh8Dooc1KgYjpZNyc0WVrGjqyjC6nGSWulQ8cNr9Oy4iFI5XGDGhhbWGMXXhPNPeCdSfP/GcX4/cEq+70c8EULFC2bbPWPnDt8wygNMmSXUyjBHTYQYBzFT+FUw1R+epHR8jJFIRZr24+ysbVTg1VvPkyLACAnOUROpGomUx3tVKDVLU8fviwS8LDttGtU4Phm5UgAvc6Sc4tWUDgrzwQZVTKfP8aP2x4OeURUMEiGuLGZrW4McNvf+m8+Z5zLqR0Cv7+4wPFU6PJnExJRqssoaxjzPhVEJd0JGVOKzdpid5922UTHMWziOR2pwVA0rUghM1DWJ44k7kNi2yOJ8NuvWjH1ov1Pbhsm2RnXAOAzDMXEpuPF6ufyDnH2p987Uzu0wJgQtCMG+b/XkIvFDuF5iF+7Li6axV+1OtziidJ9l97gyG7K1almtVkfnNeMJ1I873YM8z2ewxBSplr/vj1qNpvGE6rXGRetUnQh80Tpv4PCdpmmapmmapmnas/YPnYhqpFlmEjAAAAAASUVORK5CYII="
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
                <div className=" order-last">
                  <p className="text-xs font-normal text-slate-400">
                    Total Team Turnover
                  </p>
                  <span className=" grid place-items-end mt-2 text-xl text-slate-600 font-normal">
                    0 EUR
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/** udeuiu 
        
         */}
          <div className="flex box-border shadow-md  w-full">
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
        </div>
        <div className="border-t-[1px] border-slate-400 pt-6 flex gap-6  shadow-md grid-cols-2 h-28 ">
          <div className="  w-5/6">
            <div className="  flex justify-between mb-2 flex-wrap">
              <p>
                <span className="text-sm font-medium text-slate-600 ">0</span>
                <span className="text-sm font-medium text-slate-300">
                  
                  / 5 000 EUR
                </span>
              </p>
              <p className="text-sm font-medium text-slate-600"> 0 % </p>
            </div>
            <div className="  flex h-6 truncate relative box-border bg-slate-200 rounded-full ">
              <div className="bg-lime-700 h-6 text-xs  w-7 border_radius_left">
                0%
              </div>
              <div className="bg-cyan-600 h-6 text-xs  mx-2 w-7">0% </div>
              <div className="bg-orange-500 h-6 text-xs  w-7 border_radius_right">0% </div>
            </div>
            <div className="  flex">
              <p> <span className="">o</span>50 % </p>
              <p> <span ></span>30 %</p>
              <p> <span>o</span>All Team </p>
            </div>
          </div>
          <div className="border-2 w-1/6 flex  ">
             
          <div>
          <button>Leg Rules</button>
          
          </div>
          </div>
        </div>
        {/** udeuiu */}
      </section>
    </div>
  );
};

export default MyRank;
