"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const totalSlides = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide % totalSlides) + 1);
    }, 10000); // Ganti 3000 dengan waktu (dalam milidetik) yang diinginkan

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel w-full h-96 lg:h-screen">
      {[1, 2, 3, 4].map((slide) => (
        <div
          key={slide}
          id={`slide${slide}`}
          className={`carousel-item relative w-full ${
            currentSlide === slide ? "current" : "hidden"
          }`}
        >
          <Image
            src={`https://source.unsplash.com/1920x1080/?${
              slide === 1
                ? "architecture"
                : slide === 2
                ? "building"
                : slide === 3
                ? "city"
                : "nature"
            }`}
            alt={`gambar ${slide}`}
            width={1920}
            height={1080}
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href={`#slide${slide === 1 ? totalSlides : slide - 1}`}
              className="btn btn-circle"
              onClick={() =>
                setCurrentSlide(slide === 1 ? totalSlides : slide - 1)
              }
            >
              ❮
            </a>
            <a
              href={`#slide${slide === totalSlides ? 1 : slide + 1}`}
              className="btn btn-circle"
              onClick={() =>
                setCurrentSlide(slide === totalSlides ? 1 : slide + 1)
              }
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
