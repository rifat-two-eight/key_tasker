import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import WhyChooseUs from "@/components/WhyChooseUs";
import Feedback from "@/components/Feedback";
import Faq from "@/components/Faq";
import CallToAction from "@/components/CallToAction";    
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-indigo-500 selection:text-white">
      <Nav />
      <Hero />
      <HowItWorks />
      <Benefits />
      <WhyChooseUs />
      <Feedback />
      <Faq />
      <CallToAction />
      <Footer />
    </main>
  );
}
