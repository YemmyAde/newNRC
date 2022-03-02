import React, {useState, useRef} from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Button from "./button";
import Link from "next/link";

type Form = {
  full_name: string,
  phone_number: string,
  email: string,
  residence: string,
  required: boolean
}

const Footer = () => {
  const { register, handleSubmit, reset} = useForm<Form>();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

    const submitHandler = (values:any, e: any) => {
      setLoading(true);
         emailjs
           .sendForm(
             "service_0q247pa",
             "template_spx14oa",
             e.target,
             "user_BLtbDhQ6GqzZsyRivofGo"
           )
           .then(
             (result) => {
               console.log("submitted");
               setMessage("Your registration was successfully");
               setLoading(false);
               reset();
             },
             (error) => {
               setMessage("Registration failed, try again!");
               setLoading(false);
               reset();
             }
           );
    };

  return (
    <div
      className="bg-[#dcdcdc] mx-auto text-center md:mx-0 md:text-left md:flex flex-wrap md:justify-between justify-center px-[5%] pt-[50px] pb-[20px] text-[#fff] items-start"
      id="register"
    >
      <div className="mb-[50px] md:mb-0 mr-[40px]">
        <img
          src="/images/newLogo4.png"
          alt=""
          className="inline-block w-[200px]"
        />
      </div>

      <div className="md:w-auto mx-auto md:mx-0 mb-[50px] md:mb-0 ">
        <h5 className="font-lora text-[18px] text-black leading-[25px] mb-[20px] font-bold">
          Rebirth Nigeria Project
        </h5>
        <ul className="list-none text-[16px] leading-[21px] font-[500] font-san">
          <li className="mb-[20px]">
            <Link href="/">
              <a className="hover:text-[#009A54] text-black font-bold">Home</a>
            </Link>
          </li>
          <li className="mb-[20px]">
            <Link href="#about">
              <a className="hover:text-[#009A54] text-black font-bold">
                About Us
              </a>
            </Link>
          </li>

          <Link href="#register">
            <a className="hover:text-[#009A54] text-black font-bold">
              Register
            </a>
          </Link>
        </ul>
        <div className="md:flex justify-between flex-wrap mt-[40px] mb-[30px] md:mb-0">
          <Link href="https://twitter.com/rebirthNGR/">
            <a target="_blank">
              <i className="fab fa-twitter fa-2x text-black hover:text-[#009A54] cursor-pointer mr-8" />
            </a>
          </Link>
          <Link href="">
            <a target="_blank">
              <i className="fab fa-facebook-f fa-2x text-black hover:text-[#009A54] cursor-pointer mr-8" />
            </a>
          </Link>
          <Link href="https://www.instagram.com/rebirthNGR/">
            <a target="_blank">
              <i className="fab fa-instagram text-black fa-2x hover:text-[#009A54] cursor-pointer" />
            </a>
          </Link>
        </div>
      </div>

      <div className="text-center">
        <h5 className="font-lora text-[18px] text-black leading-[25px] mb-[20px] font-bold">
          Register
        </h5>

        <form onSubmit={handleSubmit(submitHandler)}>
          <input
            required
            type="text"
            className="placeholder:text-[#fafafa] text-[14px] blackText focus:border-0 focus:outline-[none] border-[1px] border-[#211c33] pl-[10px] bg-[#E3E3E3] rounded-[10px] py-[10px] w-[240px] sm:w-[300px] g-[#212121] mb-[6px]"
            placeholder="Full Name"
            {...register("full_name")}
          />
          <br />
          <input
            required
            className="placeholder:text-[#fafafa] text-[14px] blackText focus:outline-[none] border-[1px] border-[#211c33] pl-[10px] bg-[#E3E3E3] rounded-[10px] py-[10px] w-[240px] sm:w-[300px] g-[#212121] mb-[6px]"
            placeholder="Email Address"
            type="email"
            {...register("email")}
          />
          <br />
          <input
            required
            className="placeholder:text-[#fafafa] text-[14px] blackText focus:outline-[none] border-[1px] border-[#211c33] pl-[10px] bg-[#E3E3E3] rounded-[10px] py-[10px] w-[240px] sm:w-[300px] g-[#212121] mb-[6px]"
            placeholder="Phone Number"
            type="text"
            {...register("phone_number")}
          />
          <br />
          <input
            required
            className="placeholder:text-[#fafafa] text-[14px] blackText focus:outline-[none] border-[1px] border-[#211c33] pl-[10px] bg-[#E3E3E3] rounded-[10px] py-[10px] w-[240px] sm:w-[300px]"
            placeholder="Place of residence"
            type="text"
            {...register("residence")}
          />
          <br />
          <p className="mt-4 text-[#009A54] text-[20px]">{message} </p>
          <div className="mt-[20px]">
            <Button type="submit">{loading ? "Loading..." : "Submit"}</Button>
          </div>
        </form>
      </div>

      <p className="text-karla text-[16px] leading-[20px] lg:text-[20px] text-[#212121] text mx-auto mt-[50px]">
        Powered by Nigerian Renaissance Centre for Strategy, Research &
        Development
      </p>
    </div>
  );
};

export default Footer;
