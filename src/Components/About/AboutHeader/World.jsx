import React from "react";

const World = () => {
  return (
    <>
      <div className="bg-black pt-28 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 md:grid-cols-2 grid-cols-1 px-3">
          <div className="text-white flex flex-col justify-center">
            <p className="text-white text-5xl font-bold tracking-wide">
              Making the Audio World Go
            </p>
            <p className="text-white text-5xl font-bold pt-3 tracking-wide">
              Around
            </p>
            <p className=" text-[25px] font-thin text-neutral-300 pt-2">
              Get ready to jam with Audionic – where fresh ideas meet future
              beats. Let's turn the volume up together. Let the beat drop, and
              the symphony begin.
            </p>
          </div>
          <div className="text-white">
            <img src="/img/Sailing_across_the_nation_and_beyond.png" alt="" />
          </div>
        </div>
      </div>

      {/* ------- */}

      <div className="bg-black pt-8 ">
        <p className="text-center text-white font-bold text-6xl">
          Our achievements
        </p>
        <p className="text-center text-white font-bold text-6xl pt-1.5">
          speak for themselves
        </p>

        <div class="grid lg:grid-cols-4 grid-cols-1 lg:px-12 py-4 gap-4 px-5">
          <div class="border border-neutral-500 col-span-2 rounded-lg tracking-wide flex flex-col lg:flex-row gap-8 items-center pl-5 bg-neutral-800">
            <p class="text-neutral-400 lg:text-lg text-base">
              The number 1 brand for truly wireless, and earwear in Pakistan as
              per Q3 CY21
            </p>
            <div class="pr-16">
              <img src="/img/Image-1.png" alt="" class="" />
            </div>
          </div>
          <div class="border col-span-1 rounded-lg py-5 text-neutral-200 text-lg bg-neutral-800 border-neutral-500">
            <div class="lg:px-10 px-5">
              <img src="/img/Image-2.png" alt="" class="" />
            </div>
            <p class="px-2 text-center">No. 3 Earwear + Speakers global</p>
            <p class="px-2 text-center">market as per Q3 CY21</p>
          </div>
          <div class="border col-span-1 rounded-lg">3</div>
        </div>

        {/* ------- */}

        <div className="bg-black flex flex-col items-center pt-10 pb-24">
          <p className="text-white text-center text-5xl font-bold">
            What's next?
          </p>
          <p className="text-white text-[23px] text-center pt-3">
            All that has happened to us is overwhelming, yes, but it pushes us
            to do more, be
          </p>
          <p className="text-white text-[23px] text-center">
            more and make more products that you can use to{" "}
            <span className="font-bold text-neutral-400">
              jazz up your lifestyle.
            </span>
          </p>
          <p className="text-white text-[23px] pt-3 text-center">
            So, in 2022, we've started to fearlessly rock in Pakistan with a
            range of products that
          </p>
          <p className="font-bold text-white text-[23px] text-center">
            free-spirited Pakistanis like you can truly call your own!
          </p>

          <button className="bg-green-500 text-black text-xl font-bold px-8 py-1.5 my-20">
            EXPLORE NOW
          </button>
          <p className="text-5xl text-white font-bold">MADE IN PAKISTSAN</p>
          <p className="text-white text-[20px] pt-5">
            BY A PAKSITANI <span className="text-green-500">BRAND</span>
          </p>
        </div>

        {/* ---- */}

        <div className="px-16 py-20">
          <marquee
            behavior=""
            direction="scroll"
            scrollamount=""
            className="text-white text-3xl font-bold"
          >
            <span className="text-red-500"> Pakistan's # 1 Audio Brand</span>{" "}
            Pakistan's # 1 Audio Brand Pakistan's # 1 Audio Brand Pakistan's # 1
            Audio Brand Pakistan's # 1 Audio Brand Pakistan's # 1 Audio Brand
            Pakistan's # 1 Audio Brand Pakistan's # 1 Audio Brand Pakistan's # 1
            Audio Brand{" "}
          </marquee>
        </div>
      </div>
    </>
  );
};

export default World;
