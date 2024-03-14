import React from "react";

function Hero() {
  return (
    <div>
      <div className="relative">
        <div className="absolute top-0 left-0 h-full w-full z-10  bg-gradient-to-r from-[#000000] to-black opacity-20"></div>
        <img
          style={{ height: "75vh", width: "100vw", objectFit: "cover" }}
          src="hero.jpg"
          alt=""
        />
      </div>
      <div className="px-4 lg:px-20 xl:px-48 py-12 bg-zinc-950">
        <img
          style={{
            // minWidth: 1024,
            objectFit: "cover",
            aspectRatio: 1.4979520187244002 / 1,
          }}
          src="underhero.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
