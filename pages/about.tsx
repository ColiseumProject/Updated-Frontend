import type { NextPage } from "next";
import { useCallback, useEffect } from "react";
import styles from "./about.module.css";
import localFont from "next/font/local";
import Headlogo from "../public/logs.png";
import Wallet from "../public/mingcute_wallet-4-fill.svg";
import User from "../public/Ellipse 59.svg";
import Circles from "../public/Group 6.png";
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
import Footer from "../components/lastfooter";
import Box from "@mui/material/Box";
import About from "../public/image 1.png";
import Aboutmobile from "../components/last";
import IpadAbout from "../components/ipadabout";
import { useTranslation } from "react-i18next";
import Tradei from "../public/montra.png";
import Stakei from "../public/mobst.png";
import Abouti from "../public/mobab.png";
import Termi from "../public/termi.png";
import Languageswitch from "../components/desktop";
import Homei from "../public/hm.png";
import Stakes from "../public/st.png";
import Abouta from "../public/ab.png";
import Trades from "../public/tr.png";
import Roadmap from "../public/Road Map.png";
import Aboutus from "../public/aust.png";

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

import communityBg from "../public/back.png";

import GenericMobileNavbar from "@/components/mobileGenericNavbar";
import { BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { SiNotion } from "react-icons/si";

const HomepageAbout: NextPage = () => {
  const onHomeTextClick = useCallback(() => {
    // Add your code here
  }, []);

  const onTradeText1Click = useCallback(() => {
    // Add your code here
  }, []);

  const onStakeText1Click = useCallback(() => {
    // Add your code here
  }, []);

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

  useEffect(() => {
    if (
      !localStorage.getItem("lang") ||
      localStorage.getItem("lang") == "" ||
      localStorage.getItem("lang") == " "
    )
      localStorage.setItem("lang", "en");
  }, []);

  const handleLanguageChange = () => {
    i18n.changeLanguage(localStorage.getItem("lang")?.toString());
  };

  useEffect(() => {
    handleLanguageChange();
  }, []);

  return (
    <div className="bootstrap-inside">
      <div className={styles.mobile}>
        <Aboutmobile />
      </div>
      <div className={styles.ipadabout}>
        <IpadAbout />
      </div>

      <div className={styles.homepageAbout}>
        <GenericMobileNavbar />
        <div className={styles.homepageAboutChild} />
        <Image className={styles.homepageAboutItem} alt="" src={Circles} />
        <div className={styles.rwfa}>RWFA</div>

        <Image className={styles.unionIcon2} alt="" src={Star} />
        <img className={styles.unionIcon3} alt="" src="Union.svg" />
        <div className="w-screen h-fit absolute top-[260px] px-20">
          <h5 style={myFont.style} className="text-6xl text-[#FFE925] mb-3">
            {t("about")}
          </h5>
          <h5
            style={secondFont.style}
            className="text-2xl le text-white w-10/12 leading-relaxed mb-5"
          >
            {t("aboutparagraph")}
          </h5>
          <h5 style={myFont.style} className="text-6xl text-[#FFE925] mb-3">
            {t("roadmap")}
          </h5>
          <h5
            style={secondFont.style}
            className="text-2xl le text-white w-10/12 leading-relaxed mb-5"
          >
            {t("roadmapparagraph")}
          </h5>
        </div>

        <div className={styles.vectorParent} style={{ top: "1100px" }}>
          <Image className={styles.groupItem} alt="" src={Snake} />

          <div className={styles.frameDiv} />
          <div className={styles.groupChild3} />
          <div className={styles.groupChild4} />
          <div className={styles.groupChild5} />
          <div className={styles.groupChild6} />
          <div className={styles.groupChild7} />
          <div className={styles.groupChild8} />
          <div className={styles.groupChildMed1} />
          <div className={styles.groupChild9} />
          <div className={styles.groupChild10} />
          <div style={myFont.style} className={styles.q1}>
            <span className="text-sm">
              {t('q4')}
            </span>
          </div>
          <div style={myFont.style} className={styles.q3}>
          <span className="text-[.8rem] w-full">
              {t('q2')}
            </span>
          </div>
          <div style={myFont.style} className={styles.q5}>
          <span className="text-[.8rem] w-full">
              {t('q5')}
            </span>
          </div>
          <div style={myFont.style} className={styles.q2}>
          <span className="text-[.8rem] w-full">
              {t('q1')}
            </span>
          </div>
          <div style={myFont.style} className={styles.q4}>
          <span className="text-[.8rem] w-full">
              {t('q3')}
            </span>
          </div>
          <div className={styles.distributionTokenCbcContainer}>
            <p style={fourthFont.style} className={styles.blankLine}>
            <span className="text-[0.8rem]">{t("roadmapone")}</span>
              
            </p>
          </div>
          <div className={styles.distributionTokenCbcContainer1}>
            <p style={fourthFont.style} className={styles.blankLine}>
              <span className="text-[0.8rem]">{t("roadmapthree")}</span>
              
            </p>
          </div>
          <div className={styles.distributionTokenCbcContainer2}>
            <p style={fourthFont.style} className={styles.blankLine}>
            <span className="text-[0.8rem]">{t("roadmaptwo")}</span>
              
            </p>
          </div>
          <div className={styles.distributionTokenCbcContainer3}>
            <p style={fourthFont.style} className={styles.blankLine}>
            <span className="text-[0.8rem]">{t("roadmapfour")}</span>
              
            </p>
          </div>
          <div className={styles.p5}>
            <p style={fourthFont.style} className={styles.blankLine}>
            <span className="text-[0.8rem]">{t("roadmapfive")}</span>
              
            </p>
          </div>
        </div>

        <div className="w-screen h-fit absolute top-[2900px] px-20">
          <h5 style={myFont.style} className="text-6xl text-[#FFE925] mb-3">
            {t("audit")}
          </h5>
          <h5
            style={secondFont.style}
            className="text-2xl le text-white w-11/12 leading-relaxed mb-5"
          >
            <span
              style={{
                fontSize:
                  localStorage.getItem("lang") == "ru" ? "22px" : "23px",
              }}
            >{t("auditparagraph")}</span>
            
          </h5>
        </div>
      </div>
      <section id="efe" className="h-fit w-screen mt bg-center bg-cover hidden landscape:lg:flex xl:flex flex-col items-center justify-center bg-no-repeat absolute bottom-[600px] landscape:lg:bottom-[400px] landscape:xl:bottom-[450px] z-50 opacity-100">
        <img
          src={communityBg.src}
          className=" absolute mt-[10%] w-6/12 landscape:lg:w-8/12 landscape:xl:w-6/12 mx-auto aspect-square"
          alt=""
        />
        <div className="w-10/12 mx-auto">
          <h5
            className="block text-[#FFE925] text-center text-3xl landscape:lg:text-4xl landscape:lg:my-16 mx-auto my-10"
            style={thirdFont.style}
          >
            {t("communityhead")}
          </h5>
          <h5
            className="block text-white leading-relaxed landscape:lg:text-2xl text-xl w-8/12 text-center mx-auto mt-3 mb-5"
            style={secondFont.style}
          >
            {t("communityparagraph")}
          </h5>
          <div className="flex flex-row items-center justify-center gap-5 my-10 landscape:lg:mt-16 px-10">
            <BsGithub color="#ffffff" size={35} />
            <FaXTwitter color="#ffffff" size={35} />
            <TiSocialLinkedinCircular color="#ffffff" size={45} />
            <SiNotion color="#ffffff" size={35} />
          </div>
        </div>
      </section>
      <section className="bg-[#141315] h-fit w-screen hidden landscape:lg:flex xl:flex flex-col items-center justify-start absolute bottom-0 pt-10 pb-24">
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
            <h5 className="text-white montreal text-2xl md:text-xl">Profile</h5>
          </a>
        </div>
        <h5 className="montreal text-gray-500 text-sm absolute bottom-8">
          All Rights Reserved - © 2023 CMax
        </h5>
      </section>
    </div>
  );
};

export default HomepageAbout;
