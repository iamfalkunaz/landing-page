import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import {
  LinkedinOutlined,
  FacebookOutlined,
  InstagramOutlined,
  GithubOutlined,
} from "@ant-design/icons";

function Footer() {
  return (
    <footer className="text-white">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <img className="h-10" src={logo} alt="Company logo" />
            <p className="text-gray-400 text-base">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
            <div className="flex space-x-6"></div>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:mt-0 xl:col-span-2">
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Products
              </h4>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link
                   
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Web Studio
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    DynamicBox Flex
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Programming Forms
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Resources
              </h4>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Web Studio
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    DynamicBox Flex
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Programming Forms
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Company
              </h4>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Web Studio
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    DynamicBox Flex
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Programming Forms
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Legal
              </h4>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Web Studio
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    DynamicBox Flex
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Programming Forms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between items-center mt-12 sm:flex-row sm:justify-between border-t border-gray-700 pt-8">
          <div className="text-base text-gray-400 mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} All rights reserved.
          </div>
          <div className="flex gap-4 justify-center items-center">
            <div className="flex items-center justify-center bg-[#242427] hover:bg-[#4A4AF3] rounded-full h-10 w-10">
              <span className="text-[#4A4AF3] hover:text-white cursor-pointer">
                <LinkedinOutlined className="text-xl" />
              </span>
            </div>

            <div className="flex items-center justify-center bg-[#242427] hover:bg-[#4A4AF3] rounded-full h-10 w-10">
              <span className="text-[#4A4AF3] hover:text-white cursor-pointer">
                <FacebookOutlined className="text-xl" />
              </span>
            </div>
            <div className="flex items-center justify-center bg-[#242427] hover:bg-[#4A4AF3] rounded-full h-10 w-10">
              <span className="text-[#4A4AF3] hover:text-white cursor-pointer">
                <InstagramOutlined className="text-xl" />
              </span>
            </div>
            <div className="flex items-center justify-center bg-[#242427] hover:bg-[#4A4AF3] rounded-full h-10 w-10">
              <span className="text-[#4A4AF3] hover:text-white cursor-pointer">
                <GithubOutlined className="text-xl" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
