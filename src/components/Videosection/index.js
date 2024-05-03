import React, { useEffect } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import Footer from "../Layout/Footer";
import {
  GlobalOutlined,
  AlignLeftOutlined,
  UserOutlined,
  StarOutlined,
  SafetyOutlined,
  ProductOutlined,
} from "@ant-design/icons";
import features from "../../assets/images/features.webp";
import office from "../../assets/images/office.avif";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles.css";

function Videosection() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);

  return (
    <div className="my-12 mx-4 md:mx-8 lg:mx-36 ">
      <div className="mx-auto max-w-3xl text-center pb-8 md:pb-12 lg:pb-16">
        <h1
          className="text-gray-400 text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4"
          data-aos="fade-up"
        >
          Landing template for startups
        </h1>
        <p
          className="text-sm md:text-base lg:text-xl text-gray-400 mb-4 md:mb-8"
          data-aos="fade-up"
        >
          Our landing page template works on all devices, so you only have to
          set it up once, and get beautiful results forever.
        </p>
        <div className="flex justify-center items-center gap-x-4">
          <div>
            <Button
              data-aos="fade-up"
              type="primary"
              className="bg-[#4A4AF3] h-10 md:h-12 lg:h-14 px-4 md:px-6 lg:px-8 text-sm md:text-base lg:text-lg font-semibold rounded-none HoverEffect"
            >
              Start Free Trial
            </Button>
          </div>
          <div>
            <Button
              data-aos="fade-up"
              type="primary"
              className="bg-[#3a3a3e] rounded-none HoverEffect h-10 md:h-12 lg:h-14 w-24 md:w-32 lg:w-36 font-semibold "
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-12">
        <img
          src={office}
          alt="office img here"
          className="w-full md:max-w-3xl"
        />
      </div>
      <div className="max-w-3xl text-center pb-8 md:pb-12 lg:pb-16 mx-auto my-12">
        <h1
          className="text-gray-400 text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4"
          data-aos="fade-up"
        >
          The majority our customers do not understand their workflows.
        </h1>
        <p
          className="text-sm md:text-base lg:text-xl text-gray-400 mb-4 md:mb-8"
          data-aos="fade-up"
        >
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div class="p-4 md:p-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="shadow p-6">
            <div
              class="flex flex-col items-center text-center"
              data-aos="fade-up"
            >
              <div class="flex items-center justify-center mb-4 bg-[#4A4AF3] rounded-full h-16 w-16">
                <span class="text-white text-3xl">
                  <StarOutlined />
                </span>
              </div>
              <h1 class="text-2xl text-gray-200 font-bold mb-2">
                Instant Feature
              </h1>
              <p class="text-gray-400">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </div>
          </div>
          <div class="shadow p-6">
            <div
              class="flex flex-col items-center text-center"
              data-aos="fade-up"
            >
              <div class="flex items-center justify-center bg-[#4A4AF3] rounded-full mb-4 h-16 w-16">
                <span class="text-white text-3xl">
                  <AlignLeftOutlined />
                </span>
              </div>
              <h1 class="text-2xl text-gray-200 font-bold mb-2">
                Instant Feature
              </h1>
              <p class="text-gray-400">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </div>
          </div>
          <div class="shadow p-6 ">
            <div
              class="flex flex-col items-center text-center"
              data-aos="fade-up"
            >
              <div class="flex items-center justify-center bg-[#4A4AF3] rounded-full h-16 w-16 mb-4">
                <span class="text-white text-3xl">
                  <GlobalOutlined />
                </span>
              </div>
              <h1 class="text-2xl text-gray-200 font-bold mb-2">
                Instant Feature
              </h1>
              <p class="text-gray-400">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </div>
          </div>
          <div class="shadow p-6">
            <div
              class="flex flex-col items-center text-center"
              data-aos="fade-up"
            >
              <div class="flex items-center justify-center bg-[#4A4AF3] rounded-full h-16 w-16 mb-4">
                <span class="text-white text-3xl">
                  <SafetyOutlined />
                </span>
              </div>
              <h1 class="text-2xl text-gray-200 font-bold mb-2">
                Instant Feature
              </h1>
              <p class="text-gray-400">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </div>
          </div>
          <div class="shadow p-6">
            <div
              class="flex flex-col items-center text-center"
              data-aos="fade-up"
            >
              <div class="flex items-center justify-center bg-[#4A4AF3] rounded-full h-16 w-16 mb-4">
                <span class="text-white text-3xl">
                  <UserOutlined />
                </span>
              </div>
              <h1 class="text-2xl text-gray-200 font-bold mb-2">
                Instant Feature
              </h1>
              <p class="text-gray-400">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </div>
          </div>
          <div class="shadow p-6">
            <div
              class="flex flex-col items-center text-center"
              data-aos="fade-up"
            >
              <div class="flex items-center justify-center bg-[#4A4AF3] rounded-full h-16 w-16 mb-4">
                <span class="text-white text-3xl">
                  <ProductOutlined />
                </span>
              </div>
              <h1 class="text-2xl text-gray-200 font-bold mb-2">
                Instant Feature
              </h1>
              <p class="text-gray-400">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-3xl text-center pb-12 md:pb-16 mx-auto my-20">
        <div className="mb-4 " data-aos="fade-up">
          <div className="mb-4">
            <Button className="bg-[#7bd5a4] rounded-2xl font-bold text-[#2a704a] no-hover-effect">
              Reach goals that matter
            </Button>
          </div>
        </div>

        <h1
          className="text-gray-400 text-5xl font-bold mb-4"
          data-aos="fade-up"
        >
          One product, unlimited solutions
        </h1>
        <p className="text-xl text-gray-400 mb-8" data-aos="fade-up">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit laborum — semper quis lectus nulla.
        </p>
      </div>
      <div className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="md:pr-4 lg:pr-12 xl:pr-16">
            <div class="font-architects-daughter text-xl text-purple-600 mb-2">
              More speed. Less spend
            </div>
            <h3 class="h3 mb-3">Keep projects on schedule</h3>
            <p class="text-xl text-gray-400 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul class="text-lg text-gray-400 -mb-2">
              <li class="flex items-center mb-2">
                <svg
                  class="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                </svg>
                <span>Duis aute irure dolor in reprehenderit</span>
              </li>
              <li class="flex items-center mb-2">
                <svg
                  class="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                </svg>
                <span>Excepteur sint occaecat</span>
              </li>
              <li class="flex items-center">
                <svg
                  class="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                </svg>
                <span>Amet consectetur adipiscing elit</span>
              </li>
            </ul>
          </div>
          <div>
            <img src={features} alt=" " />
          </div>
        </div>
      </div>
      <div className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img src={features} alt=" " />
          </div>
          <div class="md:pr-4 lg:pr-12 xl:pr-16">
            <div class="font-architects-daughter text-xl text-purple-600 mb-2">
              More speed. Less spend
            </div>
            <h3 class="h3 mb-3">Keep projects on schedule</h3>
            <p class="text-xl text-gray-400 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul class="text-lg text-gray-400 -mb-2">
              <li class="flex items-center mb-2">
                <svg
                  class="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                </svg>
                <span>Duis aute irure dolor in reprehenderit</span>
              </li>
              <li class="flex items-center mb-2">
                <svg
                  class="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                </svg>
                <span>Excepteur sint occaecat</span>
              </li>
              <li class="flex items-center">
                <svg
                  class="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                </svg>
                <span>Amet consectetur adipiscing elit</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="md:pr-4 lg:pr-12 xl:pr-16">
            <div class="font-architects-daughter text-xl text-purple-600 mb-2">
              More speed. Less spend
            </div>
            <h3 class="h3 mb-3">Keep projects on schedule</h3>
            <p class="text-xl text-gray-400 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul class="text-lg text-gray-400 -mb-2">
              <li class="flex items-center mb-2">
                <svg
                  class="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                </svg>
                <span>Duis aute irure dolor in reprehenderit</span>
              </li>
              <li class="flex items-center mb-2">
                <svg
                  class="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                </svg>
                <span>Excepteur sint occaecat</span>
              </li>
              <li class="flex items-center">
                <svg
                  class="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                </svg>
                <span>Amet consectetur adipiscing elit</span>
              </li>
            </ul>
          </div>
          <div>
            <img src={features} alt=" " />
          </div>
        </div>
      </div>
      <div className="max-w-3xl text-center pb-12 md:pb-16 mx-auto my-24">
        <h1
          className="text-gray-400 text-5xl font-bold mb-4"
          data-aos="fade-up"
        >
          Don't take our word for it
        </h1>
        <p className="text-xl text-gray-400 mb-8" data-aos="fade-up">
          Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper
          quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.
        </p>
      </div>
      <div class="p-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-[#242427] shadow p-6">
            <div class="flex flex-col " data-aos="fade-up">
              <div class="flex items-center justify-center mb-4 bg-[#4A4AF3] rounded-full h-16 w-16">
                <span class="text-white text-3xl">
                  <StarOutlined />
                </span>
              </div>
              <h1 class="text-2xl text-gray-200 font-bold mb-2">
                Instant Feature
              </h1>
              <p class="text-gray-400">
                — Open PRO lets me quickly get the insights I care about so that
                I can focus on my productive work. I've had Open PRO for about
                24 hours now and I honestly don't know how I functioned without
                it before.
              </p>
            </div>
            <div class="border-t border-gray-700 mx-auto w-full mt-6 mb-6"></div>

            <div className="font-semibold">
              <p class="text-gray-300">
                Anastasia Dan -<Link>UX Board</Link>
              </p>
            </div>
          </div>
          <div class="bg-[#242427] shadow p-6">
            <div class="flex flex-col" data-aos="fade-up">
              <div class="flex items-center justify-center bg-[#4A4AF3] rounded-full mb-4 h-16 w-16">
                <span class="text-white text-3xl">
                  <AlignLeftOutlined />
                </span>
              </div>
              <h1 class="text-2xl text-gray-200 font-bold mb-2">
                Instant Feature
              </h1>
              <p class="text-gray-400">
                — Open PRO lets me quickly get the insights I care about so that
                I can focus on my productive work. I've had Open PRO for about
                24 hours now and I honestly don't know how I functioned without
                it before.
              </p>
            </div>

            <div class="border-t border-gray-700 mx-auto w-full mt-6 mb-6"></div>

            <div className="font-semibold">
              <p class="text-gray-300">
                Anastasia Dan -<Link>UX Board</Link>
              </p>
            </div>
          </div>
          <div class="bg-[#242427] shadow p-6 ">
            <div class="flex flex-col" data-aos="fade-up">
              <div class="flex items-center justify-center bg-[#4A4AF3] rounded-full h-16 w-16 mb-4">
                <span class="text-white text-3xl">
                  <GlobalOutlined />
                </span>
              </div>
              <h1 class="text-2xl text-gray-200 font-bold mb-2">
                Instant Feature
              </h1>
              <p class="text-gray-400">
                — Open PRO lets me quickly get the insights I care about so that
                I can focus on my productive work. I've had Open PRO for about
                24 hours now and I honestly don't know how I functioned without
                it before.
              </p>
            </div>
            <div class="border-t border-gray-700 mx-auto w-full mt-6 mb-6"></div>

              <div className="font-semibold ">
                <p class="text-gray-300">
                  Anastasia Dan -<Link>UX Board</Link>
                </p>
              </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:p-8">
        <div class="bg-[#4A4AF3] text-white h-auto md:h-48 p-6 flex flex-col md:flex-row justify-between items-center px-4 md:px-16">
          <div class="space-y-2 md:w-1/2">
            <h1 class="text-lg md:text-3xl font-bold">Stay in the loop</h1>
            <p class="text-xs md:text-sm">
              Join our newsletter to get top news before anyone else.
            </p>
          </div>

          <div class="flex flex-col md:flex-row gap-2 mt-4 md:mt-0 md:w-1/2">
            <input
              type="text"
              placeholder="Your best email..."
              class="p-2 w-full md:w-64 text-gray-700"
            />
            <button class="bg-white text-[#4A4AF3] px-6 py-2 font-semibold w-full md:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Videosection;
