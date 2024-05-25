"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md mx-auto">
      <div className="mb-5">
        <label htmlFor="name" className="mb-3 block text-base font-medium ">
          Nama Lengkap
        </label>
        <input
          type="text"
          placeholder="masukkan nama anda"
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
          {...register("name", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label htmlFor="email" className="mb-3 block text-base font-medium ">
          Email
        </label>
        <input
          type="email"
          placeholder="contoh@contohemail.com"
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
          {...register("email", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label htmlFor="message" className="mb-3 block text-base font-medium ">
          Pesan
        </label>
        <textarea
          rows={5}
          placeholder="apa yang anda ingin tanyakan?"
          className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
          {...register("message", { required: true })}
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          className="hover:shadow-form rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none"
        >
          Kirim Pesan
        </button>
      </div>
    </form>
  );
};

export default Contact;
