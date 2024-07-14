import React from "react";
import "./About.scss";
import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <h2>Tentang Siapa Kami</h2>
        <div className="col-2">
          <FaWhatsapp size={50} />
          <FaInstagram size={50} />
          <FaTiktok size={50} />
        </div>
        <div className="flex flex-col items-center">
          <p>
            Bergerak di bidang jasa arsitek dan konstruksi, PT SAW selalu
            berkomitmen memberikan pelayanan terbaik dalam mewujudkan sebuah
            bangunan yang ideal. Dengan didukung manajerial owner berlatar
            belakang teknik sipil, segala kegiatan dilakukan secara profesional
            dan sesuai prosedur dalam merancang, membangun, hingga merenovasi
            suatu konstruksi
          </p>
          <p>
            Jangkauan layanan PT SAW meliputi survei lokasi, desain arsitektur
            2D & 3D, perencanaan anggaran biaya pembangunan (RAB), dan tahap
            realisasi pembangunan. Dalam perencanaan pembangunan, kami akan
            menyesuaikan dengan anggaran biaya yang Anda miliki dan kebutuhan
            yang Anda inginkan. Proses realisasi pembangunan dilakukan oleh
            tenaga profesional dan ahli di bidangnya.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
