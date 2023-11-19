import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./ipadabout.module.css";

import localFont from "next/font/local";
import Headlogo from "../public/logs.png";
import Wallet from "../public/mingcute_wallet-4-fill.svg";
import User from "../public/Ellipse 59.svg";
import Circles from "../public/Group 6.png";
import communityBg from "../public/back.png";
import Snake from "../public/Vector 19.png";
import Image from "next/image";
import Sidecircle from "../public/Group 8.png";
import Head from "next/head";
import Star from "../public/Union.png";
import Abouts from "../public/aboutbac.png";
import Sociallin from "../public/Group 87.svg";
import Brother from "../public/Mask Group.svg";
import { ConnectWallet } from "@thirdweb-dev/react";
import Navbar from "../components/navbar";
import Footer from "../components/ipadfooter";
import Box from "@mui/material/Box";
import About from "../public/image 1.png";
import Aboutmobile from "../components/last";
import IpadAbout from "../components/ipadabout";
import Rightone from "../public/Group 8.png";
import Back from "../public/aboutbac.png";
import Homer from "../public/hsss.png";
import Tradei from "../public/montra.png";
import Stakei from "../public/mobst.png";
import Abouti from "../public/mobab.png";
import Termi from "../public/termi.png";

import GenericMobileNavbar from "./mobileGenericNavbar";

import Homei from "../public/hm.png";
import Stakes from "../public/st.png";
import Abouta from "../public/ab.png";
import Trades from "../public/tr.png";
import Aboutu from "../public/About Us.png";
import Languageswitch from "../components/desktop";
import { useTranslation } from "react-i18next";
import Roadmap from "../public/Road Map.png";
import { BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { SiNotion } from "react-icons/si";

const myFont = localFont({
  src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Regular.otf",
});
const secondFont = localFont({
  src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Light.otf",
});
const thirdFont = localFont({
  src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Bold.otf",
});
const fourthFont = localFont({
  src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Regular.otf",
});

const AboutIPadPro1293: NextPage = () => {
  const router = useRouter();

  const onTradeTextClick = useCallback(() => {
    // Add your code here
  }, []);

  const onStakeTextClick = useCallback(() => {
    // Add your code here
  }, []);

  const onAboutTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onEllipseIconClick = useCallback(() => {
    // Add your code here
  }, []);

  const { t, i18n } = useTranslation();
  // important for translation. import in every page or component
  const switchLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    /* to implement this functions globally and keep the same language when u go to another page, 
		you can store the language code (en, fr, es, it, ar, ru) in localStorage, 
		and run this function in a useEffect on top of every page, 
		with the language code that is in the local storage as a parameter */
  };

  return (
    <div>
      <GenericMobileNavbar />
      <Image className={styles.aboutIpadPro1293Child} alt="" src={Rightone} />
      <div className={styles.aboutIpadPro1293Item} />
      <Image className={styles.circleBgIcon} alt="" src={Circles} />

      <img className={styles.unionIcon2} alt="" src="Union.png" />
      <img className={styles.unionIcon3} alt="" src="Union.png" />
      <div className="h-fit w-screen mt-32 relative z-50">
        <h5 className="text-3xl text-[#ffe500] mb-3 ml-5" style={thirdFont.style}>
          {t("about")}
        </h5>
        <h5 style={myFont.style} className="text-white text-3xl w-10/12 ml-5">
          {t("aboutparagraph")}
        </h5>
        <h5
          className="text-3xl text-[#ffe500] mb-3 mt-5 ml-5"
          style={thirdFont.style}
        >
          {t("roadmap")}
        </h5>
        <h5
          style={myFont.style}
          className="text-white text-3xl w-10/12 mb-5 ml-5"
        >
          {t("roadmapparagraph")}
        </h5>
        <div className="w-full h-fit flex flex-col items-center justify-start">
          <div className="w-11/12 h-fit mx-auto">
            <div className="w-full h-fit flex flex-row items-center justify-start mb-3">
              <div className="w-full h-fit py-3 px-4 ipadRoadmapElementBG rounded-[30px] ">
                <h5
                  style={thirdFont.style}
                  className="ipadRoadmapElementTitle text-2xl mb-2"
                >
                  {t("q4")}
                </h5>
                <h5 style={myFont.style} className="text-white text-3xl">
                  {t("roadmapone")}
                </h5>
              </div>
            </div>
            <div className="w-full h-fit flex flex-col items-center justify-normal mb-3">
              <h5 className="text-lg text-[#ffe500] mb-0">&#9662;</h5>
              <div className="w-[1px] h-1 bg-[#ffe500] mb-[2px]"></div>
              <div className="w-[1px] h-1 bg-[#ffe500] mb-[2px]"></div>
              <div className="w-[1px] h-1 bg-[#ffe500] mb-[2px]"></div>
              <div className="w-[1px] h-1 bg-[#ffe500] mb-[2px]"></div>
              <div className="w-[1px] h-1 bg-[#ffe500] mb-[2px]"></div>
              <div className="w-[1px] h-1 bg-[#ffe500] mb-[2px]"></div>
              <div className="w-fit aspect-square flex flex-row items-center justify-center bg-[#ffe500] rounded-full my-2">
                <h5 style={thirdFont.style} className="text-2xl text-black my-0">1</h5>
              </div>
              <div className="w-[1px] h-1 bg-[#ffe500] mb-[2px]"></div>
              <div className="w-[1px] h-1 bg-[#ffe500] mb-[2px]"></div>
              <div className="w-[1px] h-1 bg-[#ffe500] mb-[2px]"></div>
              <div className="w-[1px] h-1 bg-[#ffe500] mb-[2px]"></div>
              <div className="w-[1px] h-1 bg-[#ffe500] mb-[2px]"></div>
              <div className="w-[1px] h-1 bg-[#ffe500]"></div>
              <h5 className="text-lg text-[#ffe500] mb-0">&#9652;</h5>
            </div>
            <div className="w-full h-fit flex flex-row items-center justify-start mb-3">
              
              <div className="w-full h-fit py-3 px-4 ipadRoadmapElementBG rounded-[30px] ">
                <h5
                  style={thirdFont.style}
                  className="ipadRoadmapElementTitle text-2xl mb-2"
                >
                  {t("q1")}
                </h5>
                <h5 style={myFont.style} className="text-white text-3xl">
                  {t("roadmaptwo")}
                </h5>
              </div>
            </div>
            <div className="w-full h-fit flex flex-col items-center justify-normal mb-3">
              <h5 className="text-lg text-[#ffe500] mb-0">&#9662;</h5>
              <div className="w-[1px] h-1 bg-[#ffe500] mb-[2px]"></div>
              <div className="w-[1px] h-1 bg-[#ffe500] mb-[2px]"></div>
              <div className="w-[1px] h-1 bg-[#ffe500] mb-[2px]"></div>
              <div className="w-[1px] h-1 bg-[#ffe500] mb-[2px]"></div>
              <div className="w-[1px] h-1 bg-[#ffe500] mb-[2px]"></div>
              <div className="w-[1px] h-1 bg-[#ffe500] mb-[2px]"></div>
              <div className="w-fit aspect-square flex flex-row items-center justify-center bg-[#ffe500] rounded-full my-2">
                <h5 style={thirdFont.style} className="text-2xl text-black my-0">2</h5>
              </div>
              <div className="w-[1px] h-1 bg-[#ffe500] mb-[2px]"></div>
              <div className="w-[1px] h-1 bg-[#ffe500] mb-[2px]"></div>
              <div className="w-[1px] h-1 bg-[#ffe500] mb-[2px]"></div>
              <div className="w-[1px] h-1 bg-[#ffe500] mb-[2px]"></div>
              <div className="w-[1px] h-1 bg-[#ffe500] mb-[2px]"></div>
              <div className="w-[1px] h-1 bg-[#ffe500]"></div>
              <h5 className="text-lg text-[#ffe500] mb-0">&#9652;</h5>
            </div>
            <div className="w-full h-fit flex flex-row items-center justify-start mb-3">
              <div className="w-full h-fit py-3 px-4 ipadRoadmapElementBG rounded-[30px] ">
                <h5
                  style={thirdFont.style}
                  className="ipadRoadmapElementTitle text-2xl mb-2"
                >
                  {t("q2")}
                </h5>
                <h5 style={myFont.style} className="text-white text-3xl">
                  {t("roadmapthree")}
                </h5>
              </div>
            </div>
            <div className="w-full h-fit flex flex-col items-center justify-normal mb-3">
              <h5 className="text-lg text-[#ffe500] mb-0">&#9662;</h5>
              <div className="w-[1px] h-1 bg-[#ffe500] mb-[2px]"></div>
              <div className="w-[1px] h-1 bg-[#ffe500] mb-[2px]"></div>
              <div className="w-[1px] h-1 bg-[#ffe500] mb-[2px]"></div>
              <div className="w-[1px] h-1 bg-[#ffe500] mb-[2px]"></div>
              <div className="w-[1px] h-1 bg-[#ffe500] mb-[2px]"></div>
              <div className="w-[1px] h-1 bg-[#ffe500] mb-[2px]"></div>
              <div className="w-fit aspect-square flex flex-row items-center justify-center bg-[#ffe500] rounded-full my-2">
                <h5 style={thirdFont.style} className="text-2xl text-black my-0">3</h5>
              </div>
              <div className="w-[1px] h-1 bg-[#ffe500] mb-[2px]"></div>
              <div className="w-[1px] h-1 bg-[#ffe500] mb-[2px]"></div>
              <div className="w-[1px] h-1 bg-[#ffe500] mb-[2px]"></div>
              <div className="w-[1px] h-1 bg-[#ffe500] mb-[2px]"></div>
              <div className="w-[1px] h-1 bg-[#ffe500] mb-[2px]"></div>
              <div className="w-[1px] h-1 bg-[#ffe500]"></div>
              <h5 className="text-lg text-[#ffe500] mb-0">&#9652;</h5>
            </div>
            <div className="w-full h-fit flex flex-row items-center justify-start mb-3">
              
              <div className="w-full h-fit py-3 px-4 ipadRoadmapElementBG rounded-[30px] ">
                <h5
                  style={thirdFont.style}
                  className="ipadRoadmapElementTitle text-2xl mb-2"
                >
                  {t("q3")}
                </h5>
                <h5 style={myFont.style} className="text-white text-3xl">
                  {t("roadmapfour")}
                </h5>
              </div>
            </div>
            <div className="w-full h-fit flex flex-col items-center justify-normal mb-3">
              <h5 className="text-lg text-[#ffe500] mb-0">&#9662;</h5>
              <div className="w-[1px] h-1 bg-[#ffe500] mb-[2px]"></div>
              <div className="w-[1px] h-1 bg-[#ffe500] mb-[2px]"></div>
              <div className="w-[1px] h-1 bg-[#ffe500] mb-[2px]"></div>
              <div className="w-[1px] h-1 bg-[#ffe500] mb-[2px]"></div>
              <div className="w-[1px] h-1 bg-[#ffe500] mb-[2px]"></div>
              <div className="w-[1px] h-1 bg-[#ffe500] mb-[2px]"></div>
              <div className="w-fit aspect-square flex flex-row items-center justify-center bg-[#ffe500] rounded-full my-2">
                <h5 style={thirdFont.style} className="text-2xl text-black my-0">4</h5>
              </div>
              <div className="w-[1px] h-1 bg-[#ffe500] mb-[2px]"></div>
              <div className="w-[1px] h-1 bg-[#ffe500] mb-[2px]"></div>
              <div className="w-[1px] h-1 bg-[#ffe500] mb-[2px]"></div>
              <div className="w-[1px] h-1 bg-[#ffe500] mb-[2px]"></div>
              <div className="w-[1px] h-1 bg-[#ffe500] mb-[2px]"></div>
              <div className="w-[1px] h-1 bg-[#ffe500]"></div>
              <h5 className="text-lg text-[#ffe500] mb-0">&#9652;</h5>
            </div>
            <div className="w-full h-fit flex flex-row items-center justify-start mb-3">
              <div className="w-full h-fit py-3 px-4 ipadRoadmapElementBG rounded-[30px] ">
                <h5
                  style={thirdFont.style}
                  className="ipadRoadmapElementTitle text-2xl mb-2"
                >
                  {t("q5")}
                </h5>
                <h5 style={myFont.style} className="text-white text-3xl">
                  {t("roadmapfive")}
                </h5>
              </div>
            </div>
          </div>
        </div>
        <section className="h-fit relative w-screen mx-auto bg-center bg-cover flex flex-col items-center justify-center bg-no-repeat z-50 mt-20 mb-6 opacity-100">
          <img
            src={communityBg.src}
            className=" absolute mt-[10%] w-6/12 mx-auto aspect-square"
            alt=""
          />
          <div className="mx-auto w-10/12">
            <h5
              className="block text-[#FFE925] text-center text-3xl mx-auto my-10 relative z-50"
              style={thirdFont.style}
            >
              {t("communityhead")}
            </h5>
            <h5
              className="block text-white text-xl w-8/12 text-center mx-auto mt-3 mb-5"
              style={secondFont.style}
            >
              {t("communityparagraph")}
            </h5>
            <div className="flex flex-row items-center justify-center gap-5 my-10 px-10">
              <BsGithub color="#ffffff" size={35} />
              <FaXTwitter color="#ffffff" size={35} />
              <TiSocialLinkedinCircular color="#ffffff" size={45} />
              <SiNotion color="#ffffff" size={35} />
            </div>
          </div>
        </section>
        <section className="bg-[#141315] h-fit w-screen sm:hidden md:flex lg:flex xl:hidden flex-col items-center justify-start pt-10 pb-24">
          <a href="/">
            <img
              src={Headlogo.src}
              className=" aspect-square w-20 mb-10"
              alt=""
            />
          </a>
          <div className="flex flex-row items-center justify-center gap-4 md:gap-10 px-6 flex-wrap w-full">
            <a href="/">
              <h5 className="text-white montreal text-2xl md:text-xl">Home</h5>
            </a>
            <a href="/trade">
              <h5 className="text-white montreal text-2xl md:text-xl">Trade</h5>
            </a>
            <a href="/stake">
              <h5 className="text-white montreal text-2xl md:text-xl">Stake</h5>
            </a>
            <a href="/about">
              <h5 className="text-white montreal text-2xl md:text-xl">About</h5>
            </a>
            <a href="/profile">
              <h5 className="text-white montreal text-2xl md:text-xl">
                Profile
              </h5>
            </a>
          </div>
          <h5 className="montreal text-gray-500 text-sm absolute bottom-8">
            All Rights Reserved - © 2023 CMax
          </h5>
        </section>
      </div>

      <div className={styles.vectorParent}>
        <div className={styles.groupInner} />
        <div className={styles.frameDiv} />
      </div>

      <div className={styles.frameParent}></div>
    </div>
  );
};

export default AboutIPadPro1293;
