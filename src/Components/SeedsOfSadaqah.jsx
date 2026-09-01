import React from "react";

import educationalImage from "../assets/Educational-Spiritual-Growth-1.jpg";
import sportsImage from "../assets/Sports-Recreation.jpg";
import disabilityImage from "../assets/Disability-Accessible-Infrastructure.jpg";

const SeedsOfSadaqah = () => {

  const cards = [
    {
      image: educationalImage,
      title: "Educational & Spiritual Growth",
      description:
        "Expand learning and mentorship opportunities for individuals.",
    },
    {
      image: sportsImage,
      title: "Sports & Recreation",
      description:
        "Promote wellness and inclusion through our sports facilities.",
    },
    {
      image: disabilityImage,
      title: "Disability-Accessible Infrastructure",
      description:
        "Help us maintain and improve facilities that are fully accessible for individuals with disabilities.",
    },
  ];

  return (
    <section className="w-full bg-white pt-6 pb-10 sm:pt-8 lg:pt-10">

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        <div className="mx-auto max-w-5xl">

          <h1
  className="
    text-center
    text-[34px]
    font-bold
    leading-tight
    sm:text-[38px]
    lg:text-[42px]
  "
  style={{
    color: "#9d0b0b",
  }}
>
  Seeds of Sadaqah
</h1>

          <div className="mx-auto mt-[18px] max-w-[900px]">

           <p className="m-0 text-left text-[15px] leading-[1.7] text-[#666666] md:mx-auto md:max-w-[900px]">
  Enable Ribat (a not-for-profit Islamic Community Resource 
  Centre) to create a nurturing and inclusive space for youth 
  development and inclusivity. From education and sports to 
  community-building, your contributions directly impact lives. 
  Plant your <strong>Seeds of Sadaqah</strong> for a lasting 
  impact. Your consistent commitment helps us continue our work 
  for Deen and make a difference in the community. 
</p>

<p className="mt-[10px] text-left text-[15px] leading-[1.7] text-[#666666] md:mx-auto md:max-w-[900px]">
  All donations will be used to promote Islamic education and 
  community engagement projects at Ribat to help us focus on:
</p>

          </div>

        </div>


        {/* ================= CARDS ================= */}

        <div
          className="
            mt-6
            grid
            grid-cols-1
            gap-6
            md:grid-cols-3
            md:gap-3
          "
        >

          {cards.map((card, index) => (

            <div
              key={index}
              className="text-center"
            >

              <img
                src={card.image}
                alt={card.title}
                className="
                  mx-auto
                  block
                  h-[200px]
                  w-full
                  rounded-lg
                  object-cover
                  sm:h-[220px]
                  md:h-[240px]
                "
              />

              <div className="pt-4">

                <h2
                  className="
                    text-[20px]
                    font-semibold
                    leading-[1.3]
                    text-black
                    md:text-[#9d0b0b]
                  "
                >
                  {card.title}
                </h2>

                <p
                  className="
                    mt-2
                    text-[16px]
                    leading-[1.6]
                    text-[#666666]
                    sm:text-[17px]
                    md:text-[18px]
                    lg:text-[20px]
                  "
                >
                  {card.description}
                </p>

              </div>

            </div>

          ))}

        </div>


        {/* ================= DONATE TEXT ================= */}

        <p
          className="
            mt-6
            pl-0
            text-left
            text-[18px]
            leading-[1.6]
            text-[#9d0b0b]
            sm:pl-[30px]
            sm:text-[20px]
          "
        >
          <strong>Donate today</strong> and make a lasting difference in our
          community.
        </p>

      </div>

    </section>
  );
};

export default SeedsOfSadaqah;