import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsTwitter, BsWhatsapp, BsInstagram, BsFacebook } from "react-icons/bs";

export default function Footer() {
  return (
    <div className=" text-gold  py-8 lg:pb-2 text-center px-8 ">
      <div className="lg:w-[40%] lg:mx-auto">
        <h3 className="text-2xl tracking-wide font-fancy font-semibold">
          Thanks for calling.
        </h3>
        <p className="w-[90%] lg:w-[60%] mx-auto ">
          Please follow and engage us on our social media platforms.
        </p>
        <div className="flex items-center justify-between my-4 w-full sm:w-[80%] lg:w-[60%] lg:mx-auto">
          <div className="footer-icon-div">
            {" "}
            <BsFacebook className="footer-icon" />
          </div>
          <div className="footer-icon-div">
            {" "}
            <BsWhatsapp className="footer-icon" />
          </div>
          <div className="footer-icon-div">
            {" "}
            <BsTwitter className="footer-icon" />
          </div>
          <div className="footer-icon-div">
            {" "}
            <Link href="https://tr.ee/zSehfO84FE">
              {" "}
              <BsInstagram className="footer-icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
