import { ImageCarousel, HeroSection } from "../components";

function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] px-[64px] auto-rows-fr place-items-center">
      <HeroSection />
      <ImageCarousel />
    </div>
  );
}

export default Home;
