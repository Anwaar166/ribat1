
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import programsData from "../data/ProgramsData";

const ProgramDetails = () => {
  const { id } = useParams();

  const program = programsData.find(
    (item) => item.id === Number(id)
  );

  // ================= PROGRAM NOT FOUND =================
  if (!program) {
    return (
      <>
        <Navbar />

        <div className="flex min-h-[70vh] items-center justify-center px-6 pt-[80px]">
          <h1 className="text-center text-3xl font-bold text-[#333333]">
            Program Not Found
          </h1>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white">

      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= MAIN ================= */}
      <main className="pt-[74px]">

       <section className="grid min-h-[calc(100vh-74px)] grid-cols-1 lg:grid-cols-2">

  {/* ================= LEFT SIDE - IMAGE ================= */}
  <div
    className="
      flex
      h-full
      min-h-[500px]
      items-stretch
      justify-center
      bg-gray-50
      overflow-hidden
      lg:min-h-[calc(100vh-74px)]
    "
  >
    <img
      src={program.image}
      alt={program.title}
      className="
        h-full
        w-full
        object-contain
        object-center
      "
    />
  </div>


  {/* ================= RIGHT SIDE - DETAILS ================= */}
  <div
    className="
      flex
      h-full
      flex-col
      items-start
      justify-center
      px-6
      py-10
      text-left
      sm:px-8
      md:px-10
      lg:px-12
      xl:px-16
    "
  >

    {/* ================= TITLE ================= */}
    <h1
      className="
        w-full
        max-w-3xl
        text-left
        text-3xl
        font-bold
        leading-tight
        text-[#333333]
        sm:text-4xl
        lg:text-4xl
        xl:text-4xl
      "
    >
      {program.title}
    </h1>


    {/* ================= TAGLINE ================= */}
    {program.tagline && (
      <p
        className="
          mt-4
          w-full
          max-w-3xl
          text-left
          text-base
          font-medium
          leading-7
          text-gray-700
          sm:text-lg
        "
      >
        {program.tagline}
      </p>
    )}


    {/* ================= DESCRIPTION ================= */}
    {program.description && (
      <div
        className="
          mt-4
          w-full
          max-w-3xl
          text-left
          text-base
          leading-7
          text-gray-600
          sm:text-base
        "
      >
        {program.description.split("\n").map(
          (paragraph, index) => (
            <p
              key={index}
              className={index > 0 ? "mt-3" : ""}
            >
              {paragraph}
            </p>
          )
        )}
      </div>
    )}


    {/* ================= COACH ================= */}
    {program.coach && (
      <div className="mt-7 w-full max-w-3xl">

        <h2
          className="
            text-left
            text-xl
            font-bold
            leading-tight
            text-[#333333]
            sm:text-2xl
          "
        >
          Meet Your Coach: {program.coach}
        </h2>

        {program.coachDetails &&
          program.coachDetails.length > 0 && (
            <ul className="mt-3 space-y-2">

              {program.coachDetails.map(
                (detail, index) => (
                  <li
                    key={index}
                    className="
                      flex
                      items-start
                      gap-3
                      text-left
                      text-sm
                      leading-6
                      text-gray-600
                      sm:text-base
                    "
                  >
                    <span
                      className="
                        mt-[9px]
                        h-2
                        w-2
                        shrink-0
                        rounded-full
                        bg-[#9d0b0b]
                      "
                    />

                    <span>{detail}</span>
                  </li>
                )
              )}

            </ul>
          )}

      </div>
    )}


    {/* ================= LEVELS / TIMINGS ================= */}
    {program.levels &&
      program.levels.length > 0 && (
        <div className="mt-7 w-full max-w-3xl">

          <h2
            className="
              text-left
              text-xl
              font-bold
              leading-tight
              text-[#333333]
              sm:text-2xl
            "
          >
            Timings
          </h2>

          <div className="mt-3 space-y-1">

            {program.levels.map(
              (level, index) => (
                <p
                  key={index}
                  className="
                    text-left
                    text-sm
                    leading-6
                    text-gray-600
                    sm:text-base
                  "
                >
                  {level}
                </p>
              )
            )}

          </div>

        </div>
      )}


    {/* ================= FEES ================= */}
    {(program.registrationFee ||
      program.monthlyFee ||
      program.uniformFee) && (

      <div
        className="
          mt-7
          w-full
          max-w-3xl
          border-t
          border-gray-200
          pt-2
        "
      >

        {program.registrationFee && (
          <div
            className="
              flex
              items-center
              justify-between
              gap-5
              border-b
              border-gray-100
              py-3
            "
          >
            <span className="text-left font-semibold text-gray-700">
              Registration Fee
            </span>

            <span className="shrink-0 font-semibold text-[#9d0b0b]">
              {program.registrationFee}
            </span>
          </div>
        )}

        {program.monthlyFee && (
          <div
            className="
              flex
              items-center
              justify-between
              gap-5
              border-b
              border-gray-100
              py-3
            "
          >
            <span className="text-left font-semibold text-gray-700">
              Tuition Fee
            </span>

            <span className="shrink-0 font-semibold text-[#9d0b0b]">
              {program.monthlyFee}
            </span>
          </div>
        )}

        {program.uniformFee && (
          <div
            className="
              flex
              items-center
              justify-between
              gap-5
              py-3
            "
          >
            <span className="text-left font-semibold text-gray-700">
              Uniform
            </span>

            <span className="shrink-0 font-semibold text-[#9d0b0b]">
              {program.uniformFee}
            </span>
          </div>
        )}

      </div>
    )}


    {/* ================= REGISTER BUTTON ================= */}
    {program.whatsappLink &&
      program.whatsappLink !== "#" && (
        <div className="mt-7 flex w-full justify-start">

          <a
            href={program.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              justify-center
              bg-[#9d0b0b]
              px-7
              py-3
              text-left
              text-sm
              font-bold
              uppercase
              tracking-wide
              text-white
              transition
              duration-300
              hover:bg-[#820909]
            "
          >
            Register Now
          </a>

        </div>
      )}

  </div>

</section>
      </main>

      {/* ================= FOOTER ================= */}
      <Footer />

    </div>
  );
};

export default ProgramDetails;
