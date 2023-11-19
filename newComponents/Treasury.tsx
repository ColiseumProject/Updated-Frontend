import treasuryBG from "../public/shutterstock_1007444929-[Converted] 1.png";
import book from "../public/Frame.svg";

function Treasury() {
  return (
    <section className="h-fit w-screen">
      <h5 className="hidden md:block montrealMedium text-[#FFE925] text-center text-5xl mx-auto md:py-10">
        Treasury & Tokens Ecosystem
      </h5>
      <h5 className="block md:hidden montrealMedium text-[#FFE925] text-center text-3xl mx-auto md:py-10">
        Treasury & Tokens <br />
        Ecosystem
      </h5>
      <h5 className="block md:hidden text-white text-xl w-10/12 montreal text-center mx-auto mt-3 mb-5">
        Immerse yourself in a dynamic visual tour showcasing the Coliseum DApp's
        transformative capabilities, from secure transactions to decentralized
        empowerment.
      </h5>
      <h5 className="hidden md:block text-white text-2xl w-2/3 montreal text-center mx-auto my-5">
        Immerse yourself in a dynamic visual tour showcasing the Coliseum DApp's
        transformative capabilities, from secure transactions to decentralized
        empowerment.
      </h5>
      <div className="bg-[#2A2A26] rounded-xl w-10/12 h-fit px-4 mx-auto my-6 treasuryContainer">
        <div className="relative md:hidden h-fit w-full flex flex-col items-center justify-start py-6 px-4">
          <div
            className="w-full h-fit border-[#FFE925] border rounded-xl z-10 px-6 py-4 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${treasuryBG.src}')`,
            }}
          >
            <h5 className="text-white text-2xl montrealMedium mb-1">
              Treasury
            </h5>
            <h5 className="text-white text-2xl montrealMedium mb-2">
              59.000.000,00 €
            </h5>
            <h5 className="text-[#FFE925] text-2xl montrealMedium mb-2">=</h5>
            <h5 className="text-white text-2xl montrealMedium mb-2">
              59.000.000 RSC
            </h5>
          </div>
          <div className="w-full h-fit flex flex-row items-center justify-between border-gray-300 border rounded-xl z-10 px-3 py-4 treasuryBox mt-5">
            <div className="w-2/3">
              <h5 className="montreal text-sm">Total Trading Volume</h5>
              <h5 className="montrealMedium text-base text-[#0CE770]">
                CMax +24%
              </h5>
            </div>
            <div className="flex flex-row items-center justify-center w-1/3">
              <img src={book.src} className="w-8/12" alt="" />
            </div>
          </div>
          <div className="w-full h-fit flex flex-row items-center justify-between border-gray-300 border rounded-xl z-10 px-3 py-4 treasuryBox mt-5">
            <div className="w-2/3">
              <h5 className="montreal text-sm">Total Trading Volume</h5>
              <h5 className="montrealMedium text-base text-[#FFE925]">
                Tita +24%
              </h5>
            </div>
            <div className="flex flex-row items-center justify-center w-1/3">
              <img src={book.src} className="w-8/12" alt="" />
            </div>
          </div>
        </div>
        <div className="hidden md:flex flex-row items-center gap-2 justify-start treasuryContainer w-full h-[50vh] py-6 my-6">
          <div
            className="w-7/12 h-full border-[#FFE925] border rounded-xl py-8 px-6 flex flex-col items-start justify-center"
            style={{
              backgroundImage: `url('${treasuryBG.src}')`,
            }}
          >
            <h5 className="text-white text-4xl montrealMedium mb-5">
              Treasury
            </h5>
            <h5 className="text-white text-4xl montrealMedium mb-5">
              59.000.000,00 €
            </h5>
            <h5 className="text-[#FFE925] text-4xl montrealMedium mb-5">=</h5>
            <h5 className="text-white text-4xl montrealMedium">
              59.000.000 RSC
            </h5>
          </div>
          <div className="h-fit w-5/12 flex flex-col gap-2">
            <div className="w-full h-1/2 flex flex-row items-center justify-between border-gray-300 border rounded-xl z-10 px-3 py-9 treasuryBox">
              <div className="w-2/3 h-full">
                <h5 className="montreal text-3xl mb-4">Total Trading Volume</h5>
                <h5 className="montrealMedium text-4xl text-[#0CE770]">
                  CMax +24%
                </h5>
              </div>
              <div className="flex h-full flex-row items-center justify-center w-1/3">
                <img src={book.src} className="w-6/12" alt="" />
              </div>
            </div>
            <div className="w-full h-1/2 flex flex-row items-center justify-between border-gray-300 border rounded-xl z-10 px-3 py-9 treasuryBox">
              <div className="w-2/3 h-full">
                <h5 className="montreal text-3xl mb-4">Total Trading Volume</h5>
                <h5 className="montrealMedium text-4xl text-[#FFE925]">
                  Tita +24%
                </h5>
              </div>
              <div className="flex h-full flex-row items-center justify-center w-1/3">
                <img src={book.src} className="w-6/12" alt="" />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Treasury;
