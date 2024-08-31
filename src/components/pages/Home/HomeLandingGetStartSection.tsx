import React from "react";
import PlayerSVG from "../../images/play.svg";

function HomeLandingGetStartSection() {
  return (
    <div className="font-satoshi relative -top-24 z-10 bg-[#f6f7f8] h-[400px] flex flex-col items-center justify-center gap-4">
      <img
        className="h-16"
        src={PlayerSVG}
        alt="getStartPlayerSVG"
      />
      <h3 className="getStartText font-bold text-4xl">Get Started</h3>
      <p className=" text-2xl">
        Aenean consectetur odio in condimentum tristique.
      </p>

      <div className="button-login-and-signup flex flex-row gap-8">
        <button className="w-[110px] h-10 rounded-md bg-black text-white">
          Sign Up
        </button>
        <button className="w-[110px] h-10 rounded-md border border-black">
          Login
        </button>
      </div>
    </div>
  );
}

export default HomeLandingGetStartSection;
