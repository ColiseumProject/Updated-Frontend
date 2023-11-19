import type { NextPage } from "next";
import React, { useCallback, useState, useEffect } from "react";
import styles from "./home.module.css";
import Image from "next/image";
import Btn from "../public/Rectangle 334.svg";
import Home from "../public/shutterstock_2152297015-[Converted] 1.png";
import Video from "../public/carbon_play-filled.svg";
import Headlogo from "../public/logs.png";
import Frame from "../public/Frame.svg";
import Stats from "../public/shutterstock_1007444929-[Converted] 1.png";
import one from "../public/one.png";
import two from "../public/two.png";
import three from "../public/three.png";
import four from "../public/cc.png";
import five from "../public/bb.png";
import six from "../public/aa.png";
import Wallet from "../public/mingcute_wallet-4-fill.svg";
import User from "../public/Ellipse 59.svg";
import Arrow from "../public/arrow.svg";
import Green from "../public/gr.svg";
import White from "../public/wh.svg";
import Circles from "../public/Circle BG.svg";
import Star from "../public/Union.png";
import Circ from "../public/Group 8.png";
import Leftcir from "../public/Group 1000000925.png";
import Rectangle from "../public/Rectangle 349.png";
import Partner from "../public/Partners-Logos.png";
import Flower from "../public/Group 1000000920.png";
import { ConnectWallet } from "@thirdweb-dev/react";
import localFont from "next/font/local";
import Sliders from "../components/slider";
import Github from "../public/mdi_github.svg";
import Twitter from "../public/mdi_twitter.svg";
import Linkedin from "../public/entypo-social_linkedin-with-circle.svg";
import Notion from "../public/mingcute_notion-fill.svg";
import Footer from "../components/aboutfooter";
import Navbar from "../components/navbar";
import Mobile from "../components/mobile";
import Ipad from "../components/ipadhome";
import i18n from "../utils/i18n";

import Tradei from "../public/montra.png";
import Stakei from "../public/mobst.png";
import Abouti from "../public/mobab.png";
import Termi from "../public/termi.png";

import Homei from "../public/hm.png";
import Stakes from "../public/st.png";
import Abouta from "../public/ab.png";
import Trades from "../public/tr.png";
import Whitepaper from "../public/whites.png";

import Homd from "../public/h.png";
import Treasury from "../public/txts.png";
import Discoverb from "../public/sb.png";
import Treasurysd from "../public/Treasury.png";
import Downloadwhite from "../public/Download Whitepaper.png";
import Starttrading from "../public/Start Trading.png";
import Seam from "../public/Seamless Financial Inclusion.png";
import Effort from "../public/Effortless Cross-Border Transactions.png";
import Watch from "../public/Watch Tutorial.png";
import Copyright from "../public/Copy Right 2023 - CMax. All Rights Reserved.png";

import Titas from "../public/Tita +24%.png";
import Tradingvol from "../public/Total Trading Volume.png";
import communityBg from "../public/back.png";

import Joincom from "../public/jc.png";
import Downloadour from "../public/webs.png";

import { Select } from "@chakra-ui/react";

import Seamless from "../public/sf1.png";
import Reduced from "../public/rf3.png";
import Smartcont from "../public/sc2.png";
import Decentyralized from "../public/dc6.png";
import Effortless from "../public/ec5.png";
import Enhanceds from "../public/es4.png";

import Languageswitch from "../components/desktop";
import GenericMobileNavbar from "@/components/mobileGenericNavbar";

import { useTranslation } from "react-i18next"; // important for translation. import in every page or component

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

import GenericNavbar from "@/components/GenericNavBar";
import { BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { SiNotion } from "react-icons/si";

const NewHome: NextPage = () => {
  const [orientation, setOrientation] = useState("");

  // important for translation. import in every page or component
  const { t, i18n } = useTranslation();
  // important for translation. import in every page or component
  const switchLanguage = (language: string | undefined) => {
    i18n.changeLanguage(language);
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

  const discoverItem = [
    {
      title: t("benefithead"),
      text: t("benefitparagraphone"),
      icon: one.src,
    },
    {
      title: t("benefitheadtwo"),
      text: t("benefitparagraphtwo"),
      icon: two.src,
    },
    {
      title: t("benefitheadthree"),
      text: t("benefitparagraphthree"),
      icon: three.src,
    },
    {
      title: t("benefitheadfour"),
      text: t("benefitparagraphfour"),
      icon: four.src,
    },

    {
      title: t("benefitheadfive"),
      text: t("benefitparagraphfive"),
      icon: five.src,
    },
    {
      title: t("benefitheadsix"),
      text: t("benefitparagraphsix"),
      icon: six.src,
    },
  ];

  return (
    <div className="bootstrap-inside">
      

      <div className={` min-h-[3000px] max-h-fit`}>
        <GenericMobileNavbar />
        <section className="w-screen h-full absolute top-28 z-50">
          <div
            id="heroSection"
            className="w-full flex flex-col items-start justify-start pt-32 pl-24"
          >
            <h5
              style={myFont.style}
              className="text-5xl text-[#ffe500] relative z-50 w-5/12 leading-normal"
            >
              {t("secondhead")}
            </h5>
            <div className="w-full h-fit pl-24 flex flex-row items-center justify-start">
              <div
                style={thirdFont.style}
                className={`${styles.startTradingBtn} startTradingBtnClipped py-3 px-4`}
              >
                <a href="/trade">
                  <h5 className="text-black text-base w-full text-center mb-0">
                    {t("tradingbutton")}
                  </h5>
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.homepageBlackItem}></div>
        <div className={styles.homepageBlackInner}></div>
        <div className={styles.ellipseDiv} />
        <div className={styles.ellipseDivtwo} />
        <div className={styles.homepageBlackChild1} />
        <div className={styles.homepageBlackChild2} />
        <Image className={styles.homepageBlackChild3} alt="" src={Circ} />
        <Image className={styles.homepageBlackChild4} alt="" src={Circ} />
        <Image className={styles.homepageBlackChild5} alt="" src={Leftcir} />
        <div className={styles.homepageBlackChild6} />
        <Image className={styles.homepageBlackChild7} alt="" src={Circles} />

        <img className={styles.unionIcon4} alt="" src="Union.svg" />
        <Image className={styles.unionIcon5} alt="" src={Star} />
        <Image className={styles.homepageBlackChild5} alt="" src={Leftcir} />
      </div>
    </div>
  );
};

export default NewHome;
