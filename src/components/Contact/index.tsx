import React from "react";
import "./Contact.scss";
import Image from "next/image";
import { FaMailBulk, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="grid">
        <div className="col-1">
          <div>
            <h2>Hubungi Kami</h2>
            <p>
              Jangan sungkan untuk menghubungi kami. Kami akan segera
              menghubungi Anda!
            </p>
            <h6>Whatsapp</h6>
            <div className="flex gap-4">
              <FaWhatsapp size={25} /> <span>0851-7985-1443</span>
            </div>
            <h6>Telepon</h6>
            <div className="flex gap-4">
              <FaPhoneAlt size={25} /> <span>021-50996969 Ext 1186</span>
            </div>
            <h6>Email</h6>
            <div className="flex gap-4">
              <FaMailBulk size={25} /> <span>info@ptsaw.id</span>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15865.51115765249!2d106.8312986!3d-6.2138054!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5e74dc01a21%3A0x39f209c7d981d8a1!2sPTSAW!5e0!3m2!1sen!2sid!4v1720942579587!5m2!1sen!2sid"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="col-2">
          <div>
            <form action="#">
              <label htmlFor="name">Nama</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Masukkan Nama"
              />
              <label htmlFor="phone">Nomor Telepon</label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Masukkan Nomor Telepon"
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Masukkan Email"
              />
              <label htmlFor="address">Alamat</label>
              <textarea
                name="address"
                id="address"
                cols={30}
                rows={3}
                placeholder="Masukkan Alamat"
              ></textarea>
              <label htmlFor="message">Pesan</label>
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={3}
                placeholder="Masukkan Pesan"
              ></textarea>
              <button type="submit">Kirim</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
