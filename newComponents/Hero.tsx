import { NextPage } from "next";

// Components :
import GenericMobileNavbar from "@/components/mobileGenericNavbar";


// Assets:
import blocks from "../public/shutterstock_2152297015-[Converted] 1.png";
import circle from "../public/Circle BG.svg";
import heroBtnBackground from "../public/Rectangle 334.svg";
import heroBtnBackground2 from "../public/btx.png";
import Star from "../public/Union.png";

// Icons :
import { BsFillPlayCircleFill } from "react-icons/bs";

function Hero() {
  return (
    <section className="h-fit md:h-fit w-screen lg:pb-52 " id="heroSection">
      <div className="absolute top-0 left-0 flex flex-row items-center justify-start w-full h-full z-10">
        <div className="hidden md:visible md:flex h-full w-full md:w-1/2">
          <div
            className="w-full h-full md:bg-contain lg:bg-cover md:bg-left lg:bg-left-top bg-no-repeat"
            style={{
              backgroundImage: `url('${circle.src}')`,
            }}
          ></div>
        </div>
        <div className="h-full w-full md:w-1/2 bg-contain bg-center bg-no-repeat flex flex-col items-start justify-start">
          <div
            className="hidden md:flex w-full h-full md:h-3/5 lg:h-full md:bg-cover lg:bg-contain bg-top md:bg-top bg-no-repeat"
            style={{
              backgroundImage: `url('${blocks.src}')`,
              filter: "sepia(1) grayscale(1)",
            }}
          ></div>
          <div
            className="md:hidden w-full h-full md:h-full bg-contain bg-top md:bg-center bg-no-repeat sepia grayscale"
            style={{
              backgroundImage: `url('${blocks.src}')`,
              backgroundSize: "140%",
              filter: "sepia(1) grayscale(1)",
            }}
          ></div>
        </div>
      </div>
      <div className="w-full h-full z-50 relative flex flex-col items-center justify-start">
        <GenericMobileNavbar />
        
        <div className="hidden h-full w-full md:flex flex-col z-50 sm:px-0 md:px-20 md:pt-28 items-center ">
          <img
            src={Star.src}
            alt=""
            className="hidden md:block h-8 w-8 mb-10"
          />
          <div className=" sm:pl-0 lg:pl-20">
            <h5 className="text-white sm:text-2xl md:text-2xl lg:text-4xl montreal w-full md:w-fit text-center md:text-left ">
              Discover the power of tokenization
            </h5>
            <h5 className="mt-6 sm:w-11/12 w-5/12 md:w-8/12 monument text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#ffe500] to-[#fff492] text-left leading-relaxed">
              Explore new tokenized digital assets as : Fiscal Credit, ETFs and
              more
            </h5>
            <div className="w-full md:w-fit h-fit flex flex-col md:flex-row items-center justify-normal mt-10">
              <button
                className="w-fit h-fit py-12 px-16 bg-no-repeat flex flex-row items-center justify-center"
                style={{
                  backgroundImage: `url('${heroBtnBackground2.src}')`,
                  backgroundSize: "110%",
                  backgroundPosition: "center 160%",
                }}
              >
                <span className="montrealMedium text-black text-base">
                  START TRADING
                </span>
              </button>
              <div className="flex flex-row items-center justify-center mb-0 w-fit pl-14">
                <BsFillPlayCircleFill color="#ffffff" size={25} />
                <h5 className="montreal text-white text-xl ml-4">
                  Watch Tutorial
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-full md:hidden z-50 flex flex-col items-center justify-center pt-16">
          <div className="w-full h-10 flex flex-row items-start justify-start pl-4">
            <img src={Star.src} className="h-6 w-6" alt="" />
          </div>
          <h5 className="text-white text-3xl montreal w-8/12 text-center ">
            Discover the power of tokenization
          </h5>
          <h5 className="w-11/12 mt-6 monument text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#ffe500] to-[#fff492] text-center leading-relaxed">
            Explore new tokenized digital assets as : Fiscal Credit, ETFs and
            more
          </h5>
          <div className="w-full md:w-fit h-fit flex flex-col md:flex-row items-center justify-normal mt-10">
            <button
              className="w-fit h-fit py-12 px-16 bg-no-repeat flex flex-row items-center justify-center"
              style={{
                backgroundImage: `url('${heroBtnBackground2.src}')`,
                backgroundSize: "110%",
                backgroundPosition: "center 160%",
              }}
            >
              <span className="montrealMedium text-black text-base">
                START TRADING
              </span>
            </button>
            <div className="flex flex-row items-center justify-center mb-0">
              <BsFillPlayCircleFill color="#ffffff" size={25} />
              <h5 className="montreal text-white text-xl ml-4">
                Watch Tutorial
              </h5>
            </div>
          </div>
          <div className="w-full h-10 flex flex-row items-center justify-end pr-4">
            <img src={Star.src} className="h-6 w-6" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
