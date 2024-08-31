import React from "react";
import BgNavWavBackground from "../../images/nav-wav-background.svg";
import Navbar from "../../layouts/Navbar/Navbar";

function HomeLandingPageSectionOne() {
  return (
    <>
      <div className="relative left-0 right-0 top-0 h-[900px]">
        {/* <div className="absolute top-0 left-0 right-0 z-10 px-8 py-8">
        Navbar had been moved
        </div> */}
        <img
          className="absolute top-0 left-0 right-0 z-0 "
          src={BgNavWavBackground}
          alt=""
        />

        <div className="font-satoshi flex flex-col gap-2 justify-center items-center description absolute z-10 -translate-x-1/2 -translate-y-1/2 left-1/2 top-[400px]">
          <h1 className="font-bold text-6xl">FiMsolution</h1>
          <div className="flex flex-col justify-center items-center text-2xl">
            <p>FInancial Management</p>
            <p>Solution</p>
            <p>Create your future</p>
          </div>
        </div>
      </div>

      <div className="font-satoshi -translate-x-1/2 -translate-y-1/2 left-1/2  tracking-wider text-2xl absolute top-[650px] z-10 w-[1200px]">
        Lending to friends and family is a difficult decision to make and often
        ends in the loss of not only money, but relationships. This is why we
        are creating FiMloans, an online service that will make lending money to
        friends and family easy, safe, and rewarding. Through our platform,
        lenders will be able offer loans with fair interest rates, while
        borrowers increase their credit score with every on-time payment.
      </div>
    </>
  );
}

export default HomeLandingPageSectionOne;
