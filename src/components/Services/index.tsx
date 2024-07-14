import React from "react";
import "./Services.scss";
import Image from "next/image";

const Services = () => {
  return (
    <div className="services" id="services">
      <div className="container">
        <h2>Layanan Kami</h2>
        <p>
          Kami menghadirkan bangunan impian Anda menjadi nyata. <br /> Mulai
          dari tahap perencanaan hingga realisasi pembangunan.
        </p>
        <div className="cards">
          <div className="card-1">
            <Image
              className="img"
              src="/images/service-1.webp"
              alt="service-1"
              width={300}
              height={300}
            />
            <div className="card-body">
              <h3 className="card-title">Desain Arsitektur 2D & 3D</h3>
              <p className="card-text">
                Perencanaan desain arsitektur di awal sangatlah penting guna
                untuk memvisualisasikan bentuk bangunan Anda dan juga
                menyesuaikan dengan biaya yang Anda miliki. Perencanaan desain
                arsitektur akan diproyeksikan ke dalam bentuk gambar 2D & 3D.
              </p>
            </div>
          </div>
          <div className="card-2">
            <Image
              className="img"
              src="/images/service-2.webp"
              alt="service-2"
              width={300}
              height={300}
            />
            <div className="card-body">
              <h3 className="card-title">Bangun Baru</h3>
              <p className="card-text">
                Pelaksanaan pembangunan konstruksi kami lakukan secara optimal
                hingga bangunan berdiri kokoh dan sesuai dengan apa yang Anda
                harapkan. Skala pembangunan konstruksi yang kami lakukan
                mencakup rumah tempat tinggal, villa, ruko, dan bangunan
                komersil lainnya.
              </p>
            </div>
          </div>
          <div className="card-3">
            <Image
              className="img"
              src="/images/service-3.webp"
              alt="service-3"
              width={300}
              height={300}
            />
            <div className="card-body">
              <h3 className="card-title">Renovasi</h3>
              <p className="card-text">
                Tidak hanya pembangunan konstruksi, kami juga menyediakan jasa
                layanan renovasi konstruksi. Renovasi dilakukan dengan tujuan
                untuk memperbaiki, merombak, hingga memperbaharui tampilan
                bangunan lama Anda agar terlihat lebih cantik dan mempermanis
                hunian Anda, kami siap melakukannya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
