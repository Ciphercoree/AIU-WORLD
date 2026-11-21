import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Countries from "../components/Countries";
import Sports from "../components/Sports";
import Events from "../components/Events";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Countries />
        <Sports />
        <Events />
      </main>
      <Footer />
    </div>
  );
}