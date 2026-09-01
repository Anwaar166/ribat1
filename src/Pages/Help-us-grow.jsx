
import React, { useEffect } from "react";

import Navbar from "../components/Navbar";
import Footer from "../Components/Footer";

import SeedsOfSadaqah from "../Components/SeedsOfSadaqah";
import DonationSection from "../Components/DonationSection";
import SustainerSection from "../Components/SustainerSection";

const HelpUsGrow = () => {

  // ================= PAGE TITLE =================
  useEffect(() => {
    document.title = "donation-Ribat";
  }, []);

  return (
    <div className="min-h-screen bg-white">

      {/* ================= NAVBAR ================= */}

      <Navbar />

      <main className="pt-[74px]">

        {/* ================= SECTION 1 ================= */}

        <SeedsOfSadaqah />

        {/* ================= DONATE / SUSTAINER BUTTONS ================= */}

        <section className="w-full bg-white py-4 sm:py-8">

          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

            <div
              className="
                mt-5
                flex
                flex-col
                items-center
                justify-center
                gap-3
                md:flex-row
              "
            >

              <a
                href="#donation"
                className="
                  flex
                  h-[48px]
                  w-full
                  max-w-[320px]
                  items-center
                  justify-center
                  rounded-[4px]
                  border-2
                  border-[#9d0b0b]
                  bg-[#9d0b0b]
                  px-4
                  text-[14px]
                  font-semibold
                  text-white
                  transition
                  duration-300
                  hover:bg-[#820909]
                  md:w-[180px]
                "
              >
                Donate
              </a>

              <a
                href="#sustainer"
                className="
                  flex
                  h-[48px]
                  w-full
                  max-w-[320px]
                  items-center
                  justify-center
                  rounded-[4px]
                  border-2
                  border-[#9d0b0b]
                  bg-[#9d0b0b]
                  px-4
                  text-[14px]
                  font-semibold
                  text-white
                  transition
                  duration-300
                  hover:bg-[#820909]
                  md:w-[180px]
                "
              >
                Become a Sustainer
              </a>

            </div>

          </div>

        </section>

        {/* ================= SECTION 2 ================= */}

        <DonationSection />

        {/* ================= SECTION 3 ================= */}

        <SustainerSection />

      </main>

      {/* ================= FOOTER ================= */}

      <Footer />

    </div>
  );
};

export default HelpUsGrow;
