import React from 'react';
import Image from 'next/image';

function Testimonials() {
  return (
   <>
     <section id="testimonials" className="bg-[#0a0908] py-40 px-4 md:px-8">
      <div className="text-white text-center">
        <h4 className="text-white text-4xl lg:text-5xl font-[Caveat] ">
          <span>
            <span className="text-[#a9927d]">W</span>hat{' '}
            <span className="text-[#a9927d]">O</span>ther{' '}
            <span className="text-[#a9927d]">P</span>eople{' '}
            <span className="text-[#a9927d]">S</span>ay
          </span>
        </h4>


        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { src: '/myImage/profile.png', alt: 'easton kai', title: 'easton kai', role: 'javascript developer' },
              { src: '/myImage/profile.png', alt: 'elijah liam', title: 'elijah liam', role: 'android developer' },
              { src: '/myImage/profile.png', alt: 'james owen', title: 'james owen', role: 'IOS developer' },
             
            ].map((person, index) => (
              <div
                key={index}
                className="mx-auto py-8 px-2 md:px-4 border-t-[3px] border-solid border-light-beige rounded-2xl select-none bg-[#1a1a1a] cursor-grab flex flex-col justify-center items-center"
              >
                <div className="w-[8rem] border-[3px] border-solid border-text-[#a9927d] rounded-full p-1">
                  <Image
                    src={person.src}
                    alt={person.alt}
                    width={128}
                    height={128}
                    className="w-full h-full rounded-full"
                  />
                </div>
                <p className="mt-4">{person.title}</p>
                <p className="my-4 text-[#a9927d]">{person.role}</p>
                <p className="w-[95%] md:w-[97%] mx-auto mb-6 leading-7 text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, dolorum odio magni possimus corrupti molestiae labore voluptatum ut autem
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
   </>
  );
}

export default Testimonials;
