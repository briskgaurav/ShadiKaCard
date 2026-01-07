import Image from "next/image";
import React from "react";

export default function Section3() {
  return (
    <div className="h-[200vh] w-full overflow-hidden py-[4vw] relative">
      <div className="h-full w-full absolute inset-0">
        <img
          src="https://framerusercontent.com/images/SPr0bvMk9Lu3lQOpXzLoknBPaJo.png?width=1596&height=4794"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="h-auto w-[35vw] absolute left-[-10%] top-[33%] ">
        <Image
          src={"/img/moon.png"}
          alt="moon"
          width={1000}
          height={1000}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="h-auto w-[55vw] absolute right-[-20%] top-[10%] ">
        <Image
          src={"/img/shoe_Balloon_2.png"}
          alt="moon"
          width={500}
          height={500}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="h-auto w-[40vw] absolute right-[-12%] top-[45%] ">
        <Image
          src={"/img/cloud_House.png"}
          alt="moon"
          width={500}
          height={500}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="h-full w-full relative  text-primary space-y-[2vw] text-center flex flex-col items-center justify-center relative">
        <p className="w-[30%] leading-[1]  text12 text-center">
          ॐ श्री गणेशाय नम
        </p>
        <div className="w-[15%]  h-auto ">
          <img
            src="https://framerusercontent.com/images/PyU8hByuFeV32eoPq4qDye3jQ18.png?width=417&height=418"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="text30 font-semibold tracking-tight">
          <p>With the heavenly blessings of </p>
          <p>Smt. Lata Devi & Sm. Kamal Kapoor</p>
        </div>
        <span className="w-[5%] bg-primary h-[1.5px] rounded-full"></span>
        <p className="text30 font-semibold tracking-tight">Mrs. Reena & Mr. Rajiv Kapoor</p>
        <p className="text50 leading-none">INVITE</p>
        <p className="text30 font-semibold tracking-tight">You to join us in the wedding celebrations of</p>

        <p className="text60 leading-[1.1] text-center mt-[4vw] ">
          Abhishek <br /> & <br /> Kanika
        </p>
        <div className="text30 font-semibold tracking-tight mt-[4vw]">
          <p>Daughter of</p>
          <p>Mrs. Shalini & Mr. Aakash Mittal,</p>
        </div>
        <p className="text30 font-semibold tracking-tight">On the following auspicious day</p>
      </div>
    </div>
  );
}
