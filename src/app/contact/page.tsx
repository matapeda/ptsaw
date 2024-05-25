import React from "react";
import Container from "../ui/Container";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Contact from "../ui/ContactForm";

export default function page() {
  return (
    <div>
      <div
        className="hero h-60 sm:h-96"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1578991624414-276ef23a534f?q=80&w=1927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl sm:text-6xl font-bold">Contact Us</h1>
          </div>
        </div>
      </div>
      <Container>
        <div className="my-24">
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-4">
            <div className="col-span-2 mb-4">
              <Contact />
            </div>
            <div className="space-y-8">
              <div className="card border bg-base-100 shadow">
                <div className="card-body">
                  <div className="flex flex-col justify-around items-center space-y-2">
                    <CiMail className="text-3xl" />
                    <h2 className="card-title">Email</h2>
                    <p className="text-xs">Contact us at</p>
                    <p>info@ptsaw.id</p>
                  </div>
                </div>
              </div>
              <div className="card border bg-base-100 shadow">
                <div className="card-body">
                  <div className="flex flex-col justify-around items-center space-y-2">
                    <FaPhoneAlt className="text-3xl" />
                    <h2 className="card-title">Telp</h2>
                    <p className="text-xs">Reach out to us by phone</p>
                    <p>021-50996969 Ext 1186</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="divider my-10"></div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3777894600485!2d106.82872367511808!3d-6.213805393774142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5e74dc01a21%3A0x39f209c7d981d8a1!2sptsaw.id!5e0!3m2!1sid!2sid!4v1715904666390!5m2!1sid!2sid"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="col-span-3"
          ></iframe>
        </div>
      </Container>
    </div>
  );
}
