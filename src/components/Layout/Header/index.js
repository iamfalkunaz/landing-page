import { useState } from "react";
import { Button } from "antd";
import './styles.css';
import logo from "../../../assets/images/logo.png";

function Header() {
  return (
    <div className="bg-[#020617]">
      <div className="flex justify-between items-center px-4 md:px-8 lg:px-12 xl:px-20">
        <div>
          <img src={logo} alt="logo here " className="h-16 w-16" />
        </div>
        <div className="flex items-center">
          <Button
            type="primary"
            className="rounded-none h-10 w-24 font-medium text-lg mr-2 md:mr-4 lg:mr-6 customButton"
          >
            Sign in
          </Button>
          <Button
            type="primary"
            className="bg-[#4A4AF3] rounded-none h-10 w-24 font-medium text-lg HoverEffect"
          >
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
