import FinalCta from "@/components/web/FinalCta";
import Footer from "@/components/web/Footer";
import Hero from "@/components/web/Hero";
import MeetCompanions from "@/components/web/MeetCompanions";
import MeetElysia from "@/components/web/MeetElysia";
import Navbar from "@/components/web/Navbar";
import WaitlistSection from "@/components/web/WaitlistSection";

const Page = () => {
  return (
    <main className="min-h-screen bg-[#050407]">
      <Navbar />
      <Hero />
      <MeetElysia />
      <MeetCompanions />
      <WaitlistSection />
      <FinalCta />
      <Footer />
    </main>
  );
};

export default Page;
