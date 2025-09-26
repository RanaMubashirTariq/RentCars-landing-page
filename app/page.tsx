import BannerWrapperSection from "./screens/sections/BannerWrapperSection/BannerWrapperSection";
import CarSelectionSection from "./screens/sections/CarSelectionSection/CarSelectionSection";
import FactsSection from "./screens/sections/FactsSection/FactsSection";
import HeaderSection from "./screens/sections/HeaderSection/HeaderSection";
import MainHeroSection from "./screens/sections/MainHeroSection/MainHeroSection";
import HeroSection from "./screens/sections/HeroSection/HeroSection";
import InfoWrapperSection from "./screens/sections/InfoWrapperSection/InfoWrapperSection";
import FooterSection from "./screens/sections/FooterSection/FooterSection";
import MobileAppSection from "./screens/sections/MobileAppSection/MobileAppSection";



export default function Home() {
  return (
    <div className="w-full">
               <HeaderSection/>   
      <section id="home"><MainHeroSection /></section>
      <section id="facts"><FactsSection /></section>
      <section id="about"><InfoWrapperSection /></section> 
      <section id="vehicles"><CarSelectionSection /></section>
      <section id="contact"><HeroSection /></section>
      <section id="mobile"><MobileAppSection /></section>
      <section id="details"><BannerWrapperSection /></section>
               <FooterSection/>
    </div>
  );
}
