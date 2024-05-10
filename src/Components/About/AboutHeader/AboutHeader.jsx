import React from "react";

const AboutHeader = () => {
  return (
    <>
      <div className="bg-black">
        <div>
          <img
            src="/img/screencapture-audionic-co-pages-about-audionic-2024-05-10-01_37_34.png"
            alt=""
          />
        </div>

        <div className=" lg:px-72 px-8">
          <p className="text-5xl font-bold text-white text-center">
            A Journey Spanning Decades
          </p>
          <p className="text-neutral-400  text-2xl pt-4 text-center tracking-wide">
            Hey there! Welcome to <span className="text-white">Audionic,</span>{" "}
            your one-stop-shop for all things audio and tech. We're not just a
            bunch of tech nerds obsessed with audio (although, we won't lie, we
            kinda are), but a crew of sound innovators and beat enthusiasts
            turning up the volume in the audio game.
          </p>
          <p className="text-neutral-400 text-2xl text-center tracking-wide">
            Living in the digital era, we're totally tuned into your needs.
            Hunting for the freshest speaker systems, killer earbuds, epic home
            theatres, power-packed powerbanks, or any tech gadgets that'll
            elevate your auditory experience? Say no more, we've got you
            covered.
          </p>

          <p className="text-neutral-400 text-2xl text-center tracking-wide">
            But, we get it. It's not just about the sound, it's about vibing
            with your gear. Our products are about belting out perfect harmonies
            while also making sure you look and feel as sleek and stylish as
            they do. They're as Instagram-worthy as they are functional, and
            best of all, they won't break the bank. Our squad is always
            grinding, relentlessly pushing the boundaries of audio tech. We're
            on a mission to deliver crystal clear sound like never before. But
            let's not forget, we're all in this together. We're not just a
            brand; we're a tribe, vibing to the same beat, sharing the same
            passion for music, tech, and innovation. We're about that shared
            playlist life, discovering new tracks and soundscapes together.
          </p>
        </div>

        <div className="pt-20 pb-16">
          <p className="text-white text-[24px] text-center tracking-wide">
            AND THAT'S WHERE THE AUDIONIC STARS COME INTO PICTURE.
          </p>

          <div className="lg:px-64 px-8">
            <img
              src="/img/Banner-2_8990b402-ea49-4d80-8c0e-7b339f974a3b.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="lg:px-72">
          <p className="text-white text-5xl text-center font-bold">
            Who or what is an Audionic Star, you ask?
          </p>
          <p className=" text-white text-5xl text-center font-bold">you ask?</p>
          <div className="flex flex-col items-center bg-black">
            <p className="text-white text-center text-6xl font-thin">
              It's You!
            </p>

            <img
              src="/img/each_one_of_you.png "
              alt=""
              className="relative bottom-7"
            />
          </div>
          <p className=" text-2xl font-thin text-neutral-300 text-center pt-12">
            So, whether you're a hardcore music fan, a film buff, a gaming
            legend, or just someone who loves a dope beat and cool tech gadgets,
            you're one of us. Audionic is here to level up your audio game and
            make everyday sound like your personal concert.
          </p>
          <div className="pt-5 pb-20">
            <img
              src="/img/Banner-3_82b6f27d-998b-496d-aa24-d34c2018d5fd.jpg"
              alt=""
            />
          </div>
          <div className="flex justify-center">
            <img src="/img/Group_260_2.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHeader;
