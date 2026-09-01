
import { useEffect } from "react";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HummrahSection from "../Components/HummrahSection";
import VideoSection from "../Components/Videosection";
import HumraahPrograms from "../Components/HumraahPrograms";
import SupportHumraah from "../Components/SupportHumraah";

const Humraah = () => {

  // ================= PAGE TITLE =================
  useEffect(() => {
    document.title = "humraah-Ribat";
  }, []);

  return (
    <>
      <Navbar />

      <HummrahSection />

      <HumraahPrograms />

      <VideoSection />

      <SupportHumraah />

      <Footer />
    </>
  );
};

export default Humraah;

