import React from "react";
import coffeeCup from "../images/coffee-cup.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import web from "../images/programming.png";

const Header = () => {
  return (
    <div className="px-6 md:px-32 lg:px-64 py-4 flex flex-col gap-4 md:flex-row items-center justify-between shadow-md">
      <div className="flex items-center">
        <img src={coffeeCup} alt="logo" />
        <span className="ml-4 font-semibold text-xl">Anand Jee Choubey</span>
      </div>
      <div className="flex items-center text-sm">
        <a
          href="https://anandjeechoubey.netlify.app/"
          className="flex gap-2 items-center ml-6 font-semibold text-base"
        >
          <img src={web} alt="logo" />
          Website
        </a>
        <a
          href="https://github.com/Anandjeechoubey/"
          className="flex gap-2 items-center ml-6 font-semibold text-base"
        >
          <img src={github} alt="logo" />
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/anand-jee-choubey/"
          className="flex gap-2 items-center ml-6 font-semibold text-base"
        >
          <img src={linkedin} alt="logo" />
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Header;
