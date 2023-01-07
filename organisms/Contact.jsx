import React, { useState } from "react";
import { ImLocation } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { useForm } from "react-hook-form";
import Link from "next/link";

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
  );
}

export default Contact;
