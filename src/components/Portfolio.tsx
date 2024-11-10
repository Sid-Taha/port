import React from "react";
import { caveat } from "@/font";
import Image from "next/image";

function Portfolio() {
  return (
    <>
      <section id="portfolio" className="w-full py-36 px-8 text-center bg-[#0a0908]">
        <h4 className={`${caveat.className} text-white text-4xl lg:text-5xl`}>
          <span className="text-[#A9927D]">M</span>y{" "}
          <span className="text-[#A9927D]">L</span>ast{" "}
          <span className="text-[#A9927D]">W</span>ork
        </h4>

        <p className="w-[90%] lg:w-[80%] mt-6 mx-auto text-sm lg:text-lg leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          deserunt laudantium officia fuga ipsam quasi corrupti in numquam dolor
          libero explicabo, inventore aperiam, commodi et! Quia iste tempora
          aut, illum culpa ipsum possimus saepe eligendi.
        </p>

        <div className="w-full mt-24 grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-28">
            {[...Array(6)].map((_, index) => (
              <div className="flex flex-col" key={index}>
                <div className="w-full rounded-3xl overflow-hidden transition-all duration-[0.9s]">
                  <Image
                    src="/myImage/profile.png"
                    alt="Laptop, Phone and Camera"
                    width={500}
                    height={500}
                    className="w-full rounded-3xl transition-all duration-[0.9s] hover:scale-110 hover:-rotate-[5deg]"
                  ></Image>
                </div>

                <p className="mt-6 text-xl">Lorem, ipsum dolor.</p>
            </div>
            ))}
          </div>
      </section> 
    </>
  );
}

export default Portfolio;
