
import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../Components/Footer";

const DonationForm = () => {
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Donation sent successfully!");
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <Navbar />

      {/* ================= DONATION FORM ================= */}

      <section className="w-full bg-white py-12 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-2xl px-5 sm:px-8">

          {/* ================= CASH DEPOSIT HEADING ================= */}

          <h1
            className="mb-8 text-center text-3xl font-bold"
            style={{ color: "#9d0b0b" }}
          >
            Cash Deposit
          </h1>

          <form onSubmit={handleSubmit}>

            {/* ================= NAME ================= */}

            <div className="mb-5 text-left">
              <label className="mb-2 block text-sm text-gray-700">
                Name
              </label>

              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="
                  w-full
                  rounded-md
                  border
                  border-gray-300
                  px-4
                  py-3
                  text-sm
                  outline-none
                  focus:border-[#9d0b0b]
                "
              />
            </div>

            {/* ================= PHONE ================= */}

            <div className="mb-5 text-left">
              <label className="mb-2 block text-sm text-gray-700">
                Phone
              </label>

              <input
                type="tel"
                name="phone"
                required
                placeholder="Enter your phone number"
                className="
                  w-full
                  rounded-md
                  border
                  border-gray-300
                  px-4
                  py-3
                  text-sm
                  outline-none
                  focus:border-[#9d0b0b]
                "
              />
            </div>

            {/* ================= EMAIL ================= */}

            <div className="mb-9 text-left">
              <label className="mb-2 block text-sm text-gray-700">
                Email
              </label>

              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="
                  w-full
                  rounded-md
                  border
                  border-gray-300
                  px-4
                  py-3
                  text-sm
                  outline-none
                  focus:border-[#9d0b0b]
                "
              />
            </div>

            {/* ================= ACCOUNT DETAILS ================= */}

            <div className="mb-9 text-left">

              <h2
                className="mb-5 text-xl font-bold"
                style={{ color: "#9d0b0b" }}
              >
                Our Account Details Are
              </h2>

              <div className="space-y-2 text-sm leading-6 text-gray-600">

                <p>
                  <span
                    className="font-medium"
                    style={{ color: "#9d0b0b" }}
                  >
                    Account Title:
                  </span>{" "}
                  RIBATU-UL-ULUM-IL-ISLAMIYAH
                </p>

                <p>
                  <span
                    className="font-medium"
                    style={{ color: "#9d0b0b" }}
                  >
                    Bank:
                  </span>{" "}
                  MCB Islamic
                </p>

                <p>
                  <span
                    className="font-medium"
                    style={{ color: "#9d0b0b" }}
                  >
                    Branch:
                  </span>{" "}
                  (137) Shaheed e Millat Road Branch
                </p>

                <p>
                  <span
                    className="font-medium"
                    style={{ color: "#9d0b0b" }}
                  >
                    Account Number:
                  </span>{" "}
                  1371003750410001
                </p>

                <p>
                  <span
                    className="font-medium"
                    style={{ color: "#9d0b0b" }}
                  >
                    IBAN:
                  </span>{" "}
                  PK47MCIB1371003750410001
                </p>

                <p>
                  <span
                    className="font-medium"
                    style={{ color: "#9d0b0b" }}
                  >
                    Address:
                  </span>{" "}
                  268 Main Alamgir Road D.M.C.H.S. Karachi
                </p>

                <p>
                  <span
                    className="font-medium"
                    style={{ color: "#9d0b0b" }}
                  >
                    Contact Number:
                  </span>{" "}
                  0319 2009490
                </p>

              </div>

            </div>

            {/* ================= IMAGE UPLOAD ================= */}

            <div className="mb-8 text-left">

              <label className="mb-2 block text-sm text-gray-500">
                Image Upload
              </label>

              <input
                type="file"
                accept="image/*"
                required
                onChange={(e) => setImage(e.target.files[0])}
                className="
                  block
                  w-auto
                  max-w-full
                  text-xs
                  text-gray-500
                  file:mr-3
                  file:rounded
                  file:border
                  file:border-gray-300
                  file:bg-gray-100
                  file:px-3
                  file:py-1.5
                  file:text-xs
                  file:text-gray-600
                  hover:file:bg-gray-200
                "
              />

              {image && (
                <p className="mt-2 text-xs text-gray-500">
                  {image.name}
                </p>
              )}

            </div>

            {/* ================= SEND BUTTON ================= */}

            <button
              type="submit"
              className="
                w-full
                rounded-md
                bg-[#9d0b0b]
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-[#7d0808]
              "
            >
              Send
            </button>

          </form>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </>
  );
};

export default DonationForm;
