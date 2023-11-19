import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import one from "../public/one.png";
import two from "../public/two.png";
import three from "../public/three.png";
import four from "../public/cc.png";
import five from "../public/bb.png";
import six from "../public/aa.png";

function Discover() {
  const discoverItem = [
    {
      top: {
        title: "SEAMLESS FINANCIAL INCLUSION",
        text: "Join a platform designed to bridge the gap between traditional financial systems and the digital world, ensuring access to financial services for all.",
        icon: one.src,
      },
      bottom: {
        title: "Effortless Cross-Border Transactions",
        text: "Send and receive funds globally without the complexities of traditional banking systems, making international transactions faster and more cost-effective",
        icon: two.src,
      },
    },
    {
      top: {
        title: "Smart Contract Capabilities",
        text: "Leverage smart contracts to automate agreements and transactions, ensuring transparency and eliminating the need for intermediaries",
        icon: three.src,
      },
      bottom: {
        title: "Enhanced Security",
        text: "Experience enhanced security through blockchain technology, providing tamper-resistant records and advanced encryption to protect your data and transactions",
        icon: four.src,
      },
    },
    {
      top: {
        title: "Enhanced Security",
        text: "Benefit from lower transaction fees compared to traditional financial systems, maximizing the value of your transactions",
        icon: five.src,
      },
      bottom: {
        title: "Decentralized Control",
        text: "Benefit from lower transaction fees compared to traditional financial systems, maximizing the value of your transactions",
        icon: six.src,
      },
    },
  ];

  return (
    <section className="w-screen">
      <h5 className="hidden md:block montrealMedium text-[#FFE925] text-center text-5xl mx-auto md:py-10 mt-10">
        Discover Our Benefits
      </h5>
      <h5 className="block md:hidden montrealMedium text-[#FFE925] text-center text-3xl mx-auto md:py-10 mt-5">
        Discover Our Benefits
      </h5>
      <div className="flex md:hidden flex-row items-center justify-center py-3 px-8 mt-5">
        <Carousel
          autoPlay={true}
          interval={4000}
          showArrows={false}
          showStatus={false}
          swipeable={true}
          dynamicHeight={true}
          showIndicators={true}
          infiniteLoop={true}
          renderIndicator={(
            clickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void,
            isSelected: boolean,
            index: number,
            label: string
          ) => {
            if (isSelected) {
              return <div className="w-3 h-3 bg-[#B2F908] rounded-full"></div>;
            } else {
              return <div className="h-3 w-3 bg-[#575757] rounded-full"></div>;
            }
          }}
        >
          {discoverItem.map((item, index) => {
            return (
              <div key={index} className="h-fit w-full cursor-grab ">
                <div className="discoverBox h-fit w-full rounded-xl py-6 px-4 mb-3">
                  <img
                    src={item.top.icon}
                    className="w-16 aspect-square mb-3"
                    alt=""
                  />
                  <h5 className="monument text-2xl text-[#FFE925] text-left mb-4">
                    {item.top.title}
                  </h5>
                  <h5 className="montreal text-xl text-white text-left">
                    {item.top.text}
                  </h5>
                </div>
                <div className="discoverBox h-fit w-full rounded-xl py-6 px-4 mb-3 ">
                  <img
                    src={item.bottom.icon}
                    className="h-16 aspect-square mb-3"
                    alt=""
                  />
                  <h5 className="monument text-2xl text-[#FFE925] text-left mb-4">
                    {item.bottom.title}
                  </h5>
                  <h5 className="montreal text-xl text-white text-left">
                    {item.bottom.text}
                  </h5>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className="hidden md:flex flex-row items-center justify-start gap-4 px-32 h-[110vh] mb-12 mt-6">
        {discoverItem.map((item, index) => {
          return (
            <div key={index} className="h-full w-1/3 cursor-grab">
              <div className="discoverBox h-1/2 w-full rounded-xl py-6 px-4 mb-3 overflow-hidden">
                <img
                  src={item.top.icon}
                  className="w-16 aspect-square mb-3"
                  alt=""
                />
                <h5 className="monument text-2xl text-[#FFE925] text-left mb-4 w-2/3">
                  {item.top.title}
                </h5>
                <h5 className="montreal text-xl text-white text-left w-4/5">
                  {item.top.text}
                </h5>
              </div>
              <div className="discoverBox h-1/2 w-full rounded-xl py-6 px-4 mb-3 ">
                <img
                  src={item.bottom.icon}
                  className="h-16 aspect-square mb-3"
                  alt=""
                />
                <h5 className="monument text-2xl text-[#FFE925] tetx-left mb-4 w-2/3">
                  {item.bottom.title}
                </h5>
                <h5 className="montreal text-xl text-white text-left w-4/5">
                  {item.bottom.text}
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Discover;
