import React from "react";
import Container from "../ui/Container";
import { FaBuilding } from "react-icons/fa";
import { BsBuildingsFill } from "react-icons/bs";
import { SiRenovatebot } from "react-icons/si";

export default function page() {
  return (
    <div>
      <div
        className="hero h-60 sm:h-96"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1600823921193-c388313a14a5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl sm:text-6xl font-bold">
              Our Services
            </h1>
          </div>
        </div>
      </div>
      <Container>
        <div className="my-24 space-y-4 flex flex-col justify-center items-center">
          <h3 className="mb-4 text-lg sm:text-3xl font-medium text-center sm:text-left">
            Kami menghadirkan suatu bangunan impian Anda menjadi nyata.
            <br />
            Dimulai tahap perencanaan hingga realisasi pembangunan.
          </h3>
        </div>
        <div className="my-24 grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-4">
          <div className="card shadow-xl border space-y-2">
            <div className="card-body">
              <FaBuilding className="text-5xl" />
              <h3 className="card-title">Desain Arsitektur 2D & 3D</h3>
              <p>
                Perencanaan desain arsitektur di awal sangatlah penting guna
                untuk memvisualisasikan bentuk bangunan Anda dan juga
                menyesuaikan dengan biaya yang Anda miliki. Perencanaan desain
                arsitektur akan diproyeksikan ke dalam bentuk gambar 2D & 3D.
                Keseluruhan rancang bangunan dapat disesuaikan dengan selera dan
                kebutuhan.
              </p>
            </div>
          </div>
          <div className="card shadow-xl border space-y-2">
            <div className="card-body">
              <BsBuildingsFill className="text-5xl" />
              <h3 className="card-title">Bangun Baru</h3>
              <p>
                Pelaksanaan pembangunan konstruksi kami lakukan secara optimal
                hingga bangunan berdiri kokoh dan sesuai dengan apa yang Anda
                harapkan. Skala pembangunan konstruksi yang kami lakukan
                mencakup rumah tempat tinggal, villa, ruko, dan bangunan
                komersil lainnya.
              </p>
            </div>
          </div>
          <div className="card shadow-xl border space-y-2">
            <div className="card-body">
              <SiRenovatebot className="text-5xl" />
              <h3 className="card-title">Renovasi</h3>
              <p>
                Tidak hanya pembangunan konstruksi, kami juga menyediakan jasa
                layanan renovasi konstruksi. Renovasi dilakukan dengan tujuan
                untuk memperbaiki, merombak, hingga memperbaharui tampilan
                bangunan lama Anda agar terlihat lebih cantik dan mempermanis
                hunian Anda, kami siap melakukannya.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
