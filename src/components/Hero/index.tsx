import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="content">
        <p>Inovasi Dalam Setiap Ruang</p>
        <p>
          Temukan perpaduan sempurna antara kreasi dan teknologi bersama PTSAW.
          Kami menciptakan desain yang inovatif dan estetis di setiap sudut.
          Percayakan ruang Anda kepada kami dan lihat bagaimana kami mengubahnya
          menjadi karya yang menginspirasi.
        </p>
        <button className="button">Konsultasi Gratis</button>
      </div>
    </div>
  );
};

export default Hero;
