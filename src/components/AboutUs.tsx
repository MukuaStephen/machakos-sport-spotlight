import React from "react";
import Navbar from "./Navbar";

const AboutUs = () => {
  return (
    <>
    <Navbar />
      <section className="py-16 bg-white" id="about">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-mksu-blue mb-8 text-center">
            About MKSU Sports
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Machakos University Sports Network represents the pinnacle of
                collegiate athletics in Kenya. Our programs nurture talent,
                build character, and create future leaders through sports
                excellence.
              </p>
              <p className="text-lg text-gray-700">
                With state-of-the-art facilities and dedicated coaching staff,
                we compete in Football, Basketball, Rugby, and Handball at the
                highest collegiate levels, while maintaining academic
                excellence.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-mksu-blue p-6 rounded-lg text-white text-center">
                <h3 className="text-3xl font-bold mb-2">4</h3>
                <p>Sports Programs</p>
              </div>
              <div className="bg-mksu-gold p-6 rounded-lg text-mksu-blue text-center">
                <h3 className="text-3xl font-bold mb-2">20+</h3>
                <p>Expert Coaches</p>
              </div>
              <div className="bg-mksu-gold p-6 rounded-lg text-mksu-blue text-center">
                <h3 className="text-3xl font-bold mb-2">200+</h3>
                <p>Active Athletes</p>
              </div>
              <div className="bg-mksu-blue p-6 rounded-lg text-white text-center">
                <h3 className="text-3xl font-bold mb-2">15+</h3>
                <p>Championships</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
