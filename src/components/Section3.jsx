import Image from "next/image";
import React from "react";
import Copy from "./Copy";
import CopyLines from "./CopyLines";

export default function Section3() {
  return (
    <div className="h-[200vh] max-md:h-fit max-md:min-h-[100vh] max-md:py-[10vh] w-full overflow-hidden py-[4vw] relative">
      <div className="h-full w-full absolute inset-0">
        <img
          src="https://framerusercontent.com/images/SPr0bvMk9Lu3lQOpXzLoknBPaJo.png?width=1596&height=4794"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="h-auto w-[35vw] fadeup absolute left-[-10%] top-[33%] ">
        <Image
          src={"/img/moon.png"}
          alt="moon"
          width={1000}
          height={1000}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="h-auto w-[55vw] fadeup absolute right-[-20%] top-[10%] ">
        <Image
          src={"/img/shoe_Balloon_2.png"}
          alt="moon"
          width={500}
          height={500}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="h-auto w-[40vw] fadeup absolute right-[-12%] top-[45%] ">
        <Image
          src={"/img/cloud_House.png"}
          alt="moon"
          width={500}
          height={500}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="h-full w-full relative  text-primary space-y-[2vw] max-md:space-y-[6vw] text-center flex flex-col items-center justify-center relative">
        <CopyLines>
          <p className="w-[30%] leading-[1] text12 text-center">
            ॐ श्री गणेशाय नम
          </p>
        </CopyLines>
        <div className="w-[15%] fadeup max-md:w-[35%]  h-auto ">
          <img
            src="https://framerusercontent.com/images/PyU8hByuFeV32eoPq4qDye3jQ18.png?width=417&height=418"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        <div className="text30 font-semibold tracking-tight">
          <CopyLines>
            <p>With the heavenly blessings of Almighty </p>
          </CopyLines>
        </div>
        <Copy>
          <p className="text30 font-semibold tracking-tight">
             
          </p>
        </Copy>
        <Copy>
          <p className="text30 leading-none max-md:my-[20vw]">We invite you to join us in the wedding celebrations of</p>
        </Copy>
        <CopyLines>
          <p className="text30 font-semibold tracking-tight">
            
          </p>
        </CopyLines>
        <Copy>
          <p className="text60 leading-none text-center mt-[5vw] ">
            Bhaskar 
          </p>
        </Copy>
        <CopyLines>
          <div className="text30 font-semibold tracking-tight ">
            <p>Son of </p>
            <p>Mrs. Reena & Mr. Rajiv Kapoor</p>
          </div>
        </CopyLines>
        <Copy>
          <p className="text60 leading-none text-center ">
           &
          </p>
        </Copy>
        <Copy>
          <p className="text60 leading-none text-center ">
            Garima
          </p>
        </Copy>

          <CopyLines>
        <div className="text30 font-semibold tracking-tight">
            <p>Daughter of</p>
            <p>Mrs. Shalini & Mr. Aakash Mittal,</p>
        </div>
      
          </CopyLines>



          <CopyLines>
            <div className="mt-[6vw]">
           <p className="text50 font-semibold tracking-tight">
          On the following auspicious day
        </p>
            </div>
          </CopyLines>
      </div>
    </div>
  );
}
