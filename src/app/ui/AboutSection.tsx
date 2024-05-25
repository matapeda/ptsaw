"use client";
import React from "react";
import Container from "./Container";
import Contact from "./ContactForm";
import Link from "next/link";

const AboutSection = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center items-center h-full my-24">
        <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-center">
          Inovasi dalam Setiap Ruang
        </h1>
        <h2 className="text-lg md:text-2xl font-medium p-5 text-center">
          Kami menghadirkan suatu bangunan impian Anda menjadi nyata. <br />
          Dimulai tahap perencanaan hingga realisasi pembangunan.
        </h2>
        <div className="text-xl">
          <Link href="/contact" className="btn btn-primary">
            Consult Now
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default AboutSection;
