import React from "react";
import "./Portfolio.scss";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <div className="container">
        <h2>Portofolio</h2>
        <p>
          Percayakan ruang Anda kepada kami dan lihat bagaimana kami mengubahnya
          menjadi karya yang menginspirasi.
        </p>
        <div className="cards"></div>
      </div>
    </div>
  );
};

export default Portfolio;
