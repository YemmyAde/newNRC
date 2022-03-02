import React, {useState, useEffect} from "react";
import Button from "./button";
import Link from "next/link";
import router from "next/router";

const Header = () => {
//  let windowSize: number;

  const [open, setOpen] = useState(false);
  const [size, setSize] = useState(768);

  useEffect( ()=> {
   
    // windowSize = window.innerWidth
    const changeWidth = ( ) => {
      setSize(window.innerWidth)
    }
    window.addEventListener("resize", changeWidth)

    return () => {
     window.removeEventListener("resize", changeWidth); 
    }
  }, [])

  return (
    <div className="fixed md:sticky lg:static bg-white flex justify-between px-[3%] items-center top-0 left-0 w-[100%] z-10">
      <div className=" w-[90%] md:w-[50%]">
        <Link href="/">
          <a>
            <img src="/images/newLogo2.png" alt="" className="inline-block" />
          </a>
        </Link>
      </div>
      <div className="font-san text-[20px] leading-[20px] md:text-[16px] md:leading-[20px] font-[400] text-[#000] w-[10%] md:w-[50%] relative">
        <div className="text-right">
          <i
            className="fa fa-bars fa-2x md:hidden"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div
          className={`${
            !open || size > 768
              ? "justify-evenly items-center hidden md:flex"
              : "mt-[20px] inline-block w-[100%] fixed top-[100px] left-0 z-10 bg-white mx-auto text-center scale-in-ver-top pb-[50px] border-t-[1px] border-t-[#009A54]"
          }`}
        >
          <Link href="">
            <a className="hover:font-bold hover:text-[#009A54] block my-[20px] ">
              Home
            </a>
          </Link>
          <Link href="#about">
            <a className="hover:font-bold hover:text-[#009A54] block my-[20px]">
              About
            </a>
          </Link>
          <Link href="#NRC">
            <a className="hover:font-bold hover:text-[#009A54] block my-[20px]">
              NRC
            </a>
          </Link>
          <Button onClick={() => router.push("/#register")}>Register </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
