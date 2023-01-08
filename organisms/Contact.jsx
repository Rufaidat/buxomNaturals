import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

function Contact() {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const { handleSubmit } = useForm();

  const onSubmit = () => {
    window.location.href = `mailto:alsiddiqrufaidat@gmail.com?subject=${subject}&body=Hi, my name is ${name}. ${message} (${email})`;
  };

  return (
    <div className="p-6 h-screen lg:px-40">
      <div>
        <div className="flex w-auto items-baseline space-x-3 mt-20">
          <h3 className="text-green -mb-2 text-2xl font-fancy font-bold ml-2 ">
            Want to
          </h3>
          <span className="w-20 h-[2px] sm:w-[10rem] md:w-[13rem] bg-gold"></span>
        </div>
        <h1>
          Converse <span className="text-gold -ml-3 p-0">?</span>
        </h1>
      </div>

      <div className="mt-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-6 w-[95%] md:w-[60%] lg:w-[50%] mx-auto overflow-hidden shadow-lg shadow-gold justify-between py-10 px-5 rounded "
        >
          <h3 className="text-center text-gold  font-fancy text-2xl font-bold">
            Send us an email.
          </h3>
          <div className="flex space-x-2">
            <input
              className="contact-input w-[50%]"
              type="text"
              placeholder="Name"
              name="name"
              onChange={({ target }) => setname(target.value)}
            />
            <input
              className="contact-input w-[50%]"
              type="email"
              placeholder="Email"
              name="email"
              onChange={({ target }) => setEmail(target.value)}
            />
          </div>
          <input
            className="contact-input"
            type="text"
            placeholder="Subject"
            name="subject"
            onChange={({ target }) => setSubject(target.value)}
          />
          <textarea
            placeholder="Message"
            className="contact-input "
            name="message"
            onChange={({ target }) => setMessage(target.value)}
          />
          <button className="bg-gold py-3 px-10 text-white font-bold text-lg rounded-[2rem] mt-6 tracking-wider">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
