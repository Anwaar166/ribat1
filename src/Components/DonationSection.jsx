
import React from "react";
import { Link } from "react-router-dom";

import ibftImage from "../assets/IBFT.png";
import cashDepositImage from "../assets/Deposite.png";
import chequeImage from "../assets/Cheque.png";
import scheduleImage from "../assets/Schedule.png";

const DonationSection = () => {
  return (
    <section
      id="donation"
      className="w-full bg-white py-10 sm:py-12 lg:py-14"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* =====================================================
            DONATE
        ===================================================== */}

        <div className="max-w-5xl">

          <div className="flex items-center gap-3">

            <h2
              style={{
                color: "#9d0b0b",
                fontSize: "30px",
                fontWeight: "700",
                lineHeight: "1.2",
                margin: "0",
                textAlign: "left",
              }}
            >
              Donate
            </h2>

          </div>

          <p
            style={{
              color: "#666666",
              fontSize: "14px",
              lineHeight: "1.7",
              margin: "16px 0 0",
              textAlign: "left",
            }}
          >
            Your generous donation helps Ribat serve as a vital resource for
            the Islamic community. Whether through education, outreach, or
            services for individuals with disabilities, every contribution
            strengthens our ability to support and uplift those in need. By
            donating, you become a partner in fostering a more inclusive and
            compassionate community, guided by the principles of Islam. Every
            cent you give enables us to offer more programs, build better
            facilities, and extend our reach to more individuals.
          </p>

          <p
            style={{
              color: "#9d0b0b",
              fontSize: "15px",
              lineHeight: "1.6",
              fontWeight: "600",
              fontStyle: "italic",
              margin: "14px 0 0",
              textAlign: "left",
            }}
          >
            Give today, and be part of something meaningful.
          </p>

        </div>

        {/* =====================================================
            WAYS TO DONATE
        ===================================================== */}

        <div className="mt-10">

          <h2
            style={{
              color: "#9d0b0b",
              fontSize: "25px",
              fontWeight: "700",
              lineHeight: "1.2",
              margin: "0",
              textAlign: "center",
            }}
          >
            Ways to Donate
          </h2>

          {/* =====================================================
              DONATION CARDS
          ===================================================== */}

          <div
            className="
              mt-7
              grid
              grid-cols-1
              gap-10
              sm:gap-12
              lg:grid-cols-4
              lg:gap-7
            "
          >

            {/* ================= IBFT ================= */}

            <Link
              to="/donation-form"
              className="group block text-center lg:text-left"
            >
              <div
                className="
                  mx-auto
                  overflow-hidden
                  rounded-lg
                  w-[300px]
                  max-w-full
                  sm:w-[330px]
                  md:w-[350px]
                  lg:w-full
                "
              >
                <img
                  src={ibftImage}
                  alt="IBFT"
                  className="
                    block
                    h-[170px]
                    w-full
                    object-cover
                    transition
                    duration-300
                    group-hover:scale-[1.03]
                    sm:h-[180px]
                    md:h-[190px]
                    lg:h-[185px]
                  "
                />
              </div>

              <h3
                style={{
                  color: "#9d0b0b",
                  fontSize: "18px",
                  fontWeight: "600",
                  lineHeight: "1.3",
                  margin: "10px 0 0",
                  textAlign: "center",
                }}
                className="lg:text-left"
              >
                IBFT
              </h3>

              <p
                style={{
                  color: "#666666",
                  fontSize: "13px",
                  lineHeight: "1.5",
                  margin: "5px auto 0",
                  textAlign: "center",
                  maxWidth: "350px",
                }}
                className="lg:mx-0 lg:text-left"
              >
                Make an online donation and transfer your Sadaqah in our
                selected Bank.
              </p>
            </Link>

            {/* ================= CASH DEPOSIT ================= */}

            <Link
              to="/donation-form"
              className="group block text-center lg:text-left"
            >
              <div
                className="
                  mx-auto
                  overflow-hidden
                  rounded-lg
                  w-[300px]
                  max-w-full
                  sm:w-[330px]
                  md:w-[350px]
                  lg:w-full
                "
              >
                <img
                  src={cashDepositImage}
                  alt="Cash Deposit"
                  className="
                    block
                    h-[170px]
                    w-full
                    object-cover
                    transition
                    duration-300
                    group-hover:scale-[1.03]
                    sm:h-[180px]
                    md:h-[190px]
                    lg:h-[185px]
                  "
                />
              </div>

              <h3
                style={{
                  color: "#9d0b0b",
                  fontSize: "18px",
                  fontWeight: "600",
                  lineHeight: "1.3",
                  margin: "10px 0 0",
                  textAlign: "center",
                }}
                className="lg:text-left"
              >
                Cash Deposit
              </h3>

              <p
                style={{
                  color: "#666666",
                  fontSize: "13px",
                  lineHeight: "1.5",
                  margin: "5px auto 0",
                  textAlign: "center",
                  maxWidth: "350px",
                }}
                className="lg:mx-0 lg:text-left"
              >
                Deposit your Sadaqah directly to our Bank Account in the form
                of Cash.
              </p>
            </Link>

            {/* ================= CHEQUE ================= */}

            <Link
              to="/donation-form"
              className="group block text-center lg:text-left"
            >
              <div
                className="
                  mx-auto
                  overflow-hidden
                  rounded-lg
                  w-[300px]
                  max-w-full
                  sm:w-[330px]
                  md:w-[350px]
                  lg:w-full
                "
              >
                <img
                  src={chequeImage}
                  alt="Cheque"
                  className="
                    block
                    h-[170px]
                    w-full
                    object-cover
                    transition
                    duration-300
                    group-hover:scale-[1.03]
                    sm:h-[180px]
                    md:h-[190px]
                    lg:h-[185px]
                  "
                />
              </div>

              <h3
                style={{
                  color: "#9d0b0b",
                  fontSize: "18px",
                  fontWeight: "600",
                  lineHeight: "1.3",
                  margin: "10px 0 0",
                  textAlign: "center",
                }}
                className="lg:text-left"
              >
                Cheque
              </h3>

              <p
                style={{
                  color: "#666666",
                  fontSize: "13px",
                  lineHeight: "1.5",
                  margin: "5px auto 0",
                  textAlign: "center",
                  maxWidth: "350px",
                }}
                className="lg:mx-0 lg:text-left"
              >
                Write a Cheque and post it to us at our postal address.
              </p>
            </Link>

            {/* ================= PICK-UP ================= */}

            <Link
              to="/donation-form"
              className="group block text-center lg:text-left"
            >
              <div
                className="
                  mx-auto
                  overflow-hidden
                  rounded-lg
                  w-[300px]
                  max-w-full
                  sm:w-[330px]
                  md:w-[350px]
                  lg:w-full
                "
              >
                <img
                  src={scheduleImage}
                  alt="Schedule a Pick-up"
                  className="
                    block
                    h-[170px]
                    w-full
                    object-cover
                    transition
                    duration-300
                    group-hover:scale-[1.03]
                    sm:h-[180px]
                    md:h-[190px]
                    lg:h-[185px]
                  "
                />
              </div>

              <h3
                style={{
                  color: "#9d0b0b",
                  fontSize: "18px",
                  fontWeight: "600",
                  lineHeight: "1.3",
                  margin: "10px 0 0",
                  textAlign: "center",
                }}
                className="lg:text-left"
              >
                Schedule a Pick-up
              </h3>

              <p
                style={{
                  color: "#666666",
                  fontSize: "13px",
                  lineHeight: "1.5",
                  margin: "5px auto 0",
                  textAlign: "center",
                  maxWidth: "350px",
                }}
                className="lg:mx-0 lg:text-left"
              >
                Call us at{" "}
                <span
                  style={{
                    color: "#666666",
                    fontWeight: "600",
                  }}
                >
                  021-34930482
                </span>{" "}
                to have your cheque or cash collected from your doorstep.
              </p>
            </Link>

          </div>

          {/* ================= BECOME A SUSTAINER ================= */}

          <div className="mt-12 w-full text-left">

            <div className="flex items-center gap-3">

              <h2
                style={{
                  color: "#9d0b0b",
                  fontWeight: "500",
                  lineHeight: "1.2",
                  margin: "0",
                  textAlign: "left",
                }}
              >
                Become a Sustainer:
              </h2>

            </div>

            <p
              style={{
                color: "#666666",
                fontSize: "17px",
                lineHeight: "1.7",
                margin: "16px 0 0",
              }}
            >
              By becoming a Ribat Sustainer, you commit to supporting the growth
              and sustainability of our community on a monthly basis. Sustainers
              provide Ribat with a steady stream of resources, ensuring that we
              can plan and expand our services with confidence. As a Sustainer,
              you help us consistently offer crucial programs such as disability
              accessibility, educational workshops, and family support services.
            </p>

            <p
              style={{
                color: "#666666",
                fontSize: "17px",
                lineHeight: "1.7",
                margin: "14px 0 0",
              }}
            >
              This continuous support is the backbone of our mission, helping us
              create lasting impact throughout the year.
            </p>

            <p
              style={{
                color: "#9d0b0b",
                fontSize: "18px",
                fontWeight: "600",
                fontStyle: "italic",
                lineHeight: "1.6",
                margin: "18px 0 0",
              }}
            >
              Join us as a Sustainer and invest in the future of our community,
              for the sake of Allah (SWT).
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default DonationSection;

