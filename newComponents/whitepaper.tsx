import arrow from "../public/arrow.svg";
import book from "../public/Frame.svg";

function WhitePaper() {
  return (
    <section className="h-fit w-screen flex sm:flex-col md:flex-row items-center justify-start py-10 md:py-20 px-2">
      <div className="sm:w-full md:w-1/2 flex flex-col sm:items-center sm:justify-center md:items-start md:justify-start md:pl-16">
        <h5 className="block md:hidden montrealMedium text-3xl text-[#FFE925] text-center md:text-left px-1">
          Download Our Whitepaper For more In-Depth Insights
        </h5>
        <h5 className="hidden md:block montrealMedium md:text-2xl lg:text-5xl text-[#FFE925] text-left px-1 leading-normal">
          Download Our Whitepaper For more In-Depth Insights
        </h5>
        <div className="flex flex-col md:hidden h-fit py-4 w-10/12 mx-auto my-6 glassy rounded-lg items-center justify-center">
          <img src={book.src} className="w-4/12 mb-4" alt="" />
          <h5 className="monument text-white text-lg">Whitepaper</h5>
        </div>
        <h5 className="block md:hidden montreal text-xl text-white text-center mx-4">
          📥 Dive into the comprehensive details of the Coliseum DApp by
          downloading our white paper. Gain a deeper understanding of the
          revolutionary features, innovative functionalities, and the vision
          that drives our project forward. Stay ahead of the curve and explore
          the potential that awaits. Download now and embark on a journey of
          knowledge and innovation. 🚀
        </h5>
        <h5 className="hidden md:block montreal md:text-base lg:text-2xl text-white text-left mt-6 md:w-full lg:w-10/12">
          📥 Dive into the comprehensive details of the Coliseum DApp by
          downloading our white paper. Gain a deeper understanding of the
          revolutionary features, innovative functionalities, and the vision
          that drives our project forward. Stay ahead of the curve and explore
          the potential that awaits. Download now and embark on a journey of
          knowledge and innovation. 🚀
        </h5>
        <button className="flex md:hidden flex-row items-center justify-center bg-[#FFF27A] w-fit mx-auto rounded-lg px-4 py-3 mb-5 mt-5">
          <img src={arrow.src} className="h-5 w-5" alt="" />
          <h5 className="montrealMedium text-black text-center pl-3 text-base">
            DOWNLOAD WHITEPAPER
          </h5>
        </button>
        <button className="hidden md:flex flex-row items-center justify-center bg-[#FFF27A] w-fit mx-0 rounded-lg px-4 py-3 mb-5 mt-5">
          <img src={arrow.src} className="h-5 w-5" alt="" />
          <h5 className="montrealMedium text-black text-center pl-3 md:text-sm lg:text-base">
            DOWNLOAD WHITEPAPER
          </h5>
        </button>
      </div>
      <div className="hidden md:flex w-1/2 flex-row items-center justify-start lg:pl-32">
        <div className="flex flex-col h-fit w-fit md:py-10 md:px-10 md:mx-auto lg:py-16 lg:px-28 glassy rounded-lg items-center justify-center">
          <img src={book.src} className=" md:w-1/2 lg:w-full mb-4" alt="" />
          <h5 className="monument text-white text-lg">Whitepaper</h5>
        </div>
      </div>
    </section>
  );
}

export default WhitePaper;
