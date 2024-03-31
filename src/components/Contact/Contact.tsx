"use client";
import { useState } from "react";
import emailjs from "emailjs-com";
import Button from "../reusable/Button";

type form = {
  user_name: string;
  user_email: string;
  message: string;
};

const Contact = () => {
  const [form, setForm] = useState<form>({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_c7rxoqk",
        "template_dia2ck5",
        event.target,
        "user_HRpuwBHjAKteVvrKCOZrz"
      )
      .then(
        (result) => {
          console.log(result.text);
          setForm({
            user_name: "",
            user_email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="px-8 pt-16 md:px-16 lg:px-32 contain-section" id="Contact">
      <h1 className="pb-10 text-4xl font-bold text-cyan-700">CONTACT</h1>
      <form onSubmit={handleSubmit} className="space-y-2 max-w-2xl mx-auto">
        <div className="form-control">
          <input
            type="text"
            name="user_name"
            value={form.user_name}
            placeholder="Name"
            onChange={(e) => setForm({ ...form, user_name: e.target.value })}
            className="p-1 bg-cyan-700 border-2 text-slate-400 rounded-lg"
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            name="user_email"
            value={form.user_email}
            placeholder="Email"
            onChange={(e) => setForm({ ...form, user_email: e.target.value })}
            className="p-1 bg-cyan-700 border-2 text-slate-400 rounded-lg"
          />
        </div>
        <div className="form-control">
          <textarea
            name="message"
            value={form.message}
            placeholder="Enter Message"
            rows={3}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="p-1 bg-cyan-700 border-2 text-slate-400 rounded-lg"
          />
        </div>
        <div className="flex justify-end">
          {/* <button
            type="submit"
            value="send"
            className="border-2 px-2 py-1 text-2xl text-cyan-700 hover:bg-cyan-700 hover:text-white border-cyan-700 w-28 rounded"
          >
            Submit
          </button> */}
          <Button text="Submit" type="submit" value="send" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
