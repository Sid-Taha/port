import React from "react";
import { FaBullhorn, FaPaintBrush, FaCode, FaSearch } from "react-icons/fa"; // Import icons from react-icons

function Services() {
  return (
    <>
      <section id="services" className="py-40 px-2 md:px-8 bg-[#1a1a1a]">
        <div className="text-center">
          <h4 className="text-white text-4xl lg:text-5xl font-[Caveat]">
            <span className="">
              <span className="text-light-beige capitalize">w</span>hat{" "}
              <span className="text-light-beige capitalize">I</span>{" "}
              <span className="text-light-beige capitalize">d</span>o{" "}
              <span className="text-light-beige capitalize">f</span>or{" "}
              <span className="text-light-beige capitalize">c</span>lients
            </span>
          </h4>
          <p className="w-[90%] lg:w-[80%] mt-6 mx-auto text-white text-sm lg:text-lg leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            deserunt laudantium officia fuga ipsam quasi corrupti in numquam
            dolor libero explicabo, inventore aperiam, commodi et!
          </p>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 text-start">
            
            <div className="rounded-xl py-6 px-4 bg-[#222] flex flex-col justify-between items-center cursor-pointer transition-all duration-[1.2s] hover:bg-[#444]">
              <div className="w-full mx-0 text-start flex justify-center">
                <FaBullhorn className="text-white text-6xl" /> {/* Branding Icon */}
              </div>
              <div className="w-full mt-12 text-white">
                <h4 className="text-2xl capitalize mb-4">branding</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt deserunt laudantium officia fuga ipsam quasi.
                </p>
              </div>
            </div>

            <div className="rounded-xl py-6 px-4 bg-[#222] flex flex-col justify-between items-center cursor-pointer transition-all duration-[1.2s] hover:bg-[#444]">
              <div className="w-full mx-0 text-start flex justify-center">
                <FaPaintBrush className="text-white text-6xl" /> {/* Design Icon */}
              </div>
              <div className="w-full mt-12 text-white">
                <h4 className="text-2xl capitalize mb-4">design</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt deserunt laudantium officia fuga ipsam quasi.
                </p>
              </div>
            </div>

            <div className="rounded-xl py-6 px-4 bg-[#222] flex flex-col justify-between items-center cursor-pointer transition-all duration-[1.2s] hover:bg-[#444]">
              <div className="w-full mx-0 text-start flex justify-center">
                <FaCode className="text-white text-6xl" /> {/* Development Icon */}
              </div>
              <div className="w-full mt-12 text-white">
                <h4 className="text-2xl capitalize mb-4">development</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt deserunt laudantium officia fuga ipsam quasi.
                </p>
              </div>
            </div>

            <div className="rounded-xl py-6 px-4 bg-[#222] flex flex-col justify-between items-center cursor-pointer transition-all duration-[1.2s] hover:bg-[#444]">
              <div className="w-full mx-0 text-start flex justify-center">
                <FaSearch className="text-white text-6xl" /> {/* SEO Icon */}
              </div>
              <div className="w-full mt-12 text-white">
                <h4 className="text-2xl capitalize mb-4">SEO</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt deserunt laudantium officia fuga ipsam quasi.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
