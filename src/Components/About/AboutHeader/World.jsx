import React from 'react'

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

      <div className="bg-black pt-8">
        <p className="text-center text-white font-bold text-6xl">
          Our achievements
        </p>
        <p className="text-center text-white font-bold text-6xl pt-1.5">
          speak for themselves
        </p>

        <div className="grid lg:grid-cols-4 grid-cols-1 lg:px-12  gap-5 px-5 ">
          <div className="border border-neutral-500 col-span-2 rounded-lg tracking-wide  flex flex-col lg:flex-row  gap-8 items-center pl-5  bg-neutral-800">
            <p className="text-neutral-400 text-[21.3px]">
              The number 1 brand for truly wireless, and earwear in Pakistan as
              per Q3 CY21
            </p>
            <div className='pr-16'>
              <img src="/img/Image-1.png" alt="" />
            </div>
          </div>
          <div className="border col-span-1 rounded-lg"> 2</div>
          <div className="border col-span-1 rounded-lg">3</div>
        </div>
      </div>
    </>
  );
}

export default World
