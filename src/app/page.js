import Footer from "./components/Footer";
import Header from "./components/Header"
import MainSection from "./components/MainSection";
import Newsletter from "./components/Newsletter";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";

export default function Home() {
  return (
    <main className="mainclass-container">
      <Header/>
      <MainSection/>
      <Section2/>
      <Section3/>
      <Newsletter/>
      <Footer/>
    </main>
  );
}
