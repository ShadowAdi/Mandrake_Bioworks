import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Section2 from "./components/Section2";
import Section3Part1 from "./components/Section3-Part1";
import Section3Part2 from "./components/Section3-Part2";
import Section3Part3 from "./components/Section3-Part3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";
import Section9 from "./components/Section9";


const App = () => {
  return (
    <main className="relative min-h-screen w-screen flex flex-col items-center justify-center overflow-x-hidden  mx-auto gap-0   ">
      <Hero />
      <Section2 />
      <Section3Part1 />
      <Section3Part2 />
      <Section3Part3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Footer/>
    </main>
  );
};

export default App;
