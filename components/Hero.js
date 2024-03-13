import React from "react";

function Hero() {
  return (
    <div>
      <div>
        <img
          style={{ height: "75vh", width: "100vw", objectFit: "cover" }}
          src="hero.jpg"
          alt=""
        />
      </div>
      <div className="px-48 py-12">
        <img
          style={{ minWidth: 1024, objectFit: "cover" }}
          src="underhero.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
