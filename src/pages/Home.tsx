import ImageCarousel from "../components/ImageCarousel";
import appStore from "../assets/app-store.svg";

function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] items-center px-[64px]">
      <div className="flex flex-col items-center justify-center">
        {/*Left Side: Text Placement*/}
        <div className="flex flex-col items-start py-[64px]">
          <h1 className="font-roboto font-bold text-[5rem] text-gray-900">Berkeley</h1>

          <h1 className="font-roboto font-bold text-[5rem] text-gray-900 -mt-12">Mobile</h1>

          <p className="font-roboto text-[1.5rem] text-gray-900 tracking-widest">
            Your essential campus life companion.
            <br />
            Everything Berkeley, all in one app.
          </p>

          <a href="https://apps.apple.com/us/app/berkeley-mobile/id912243518">
            <img id="app-store" src={appStore} className="mt-8 w-40" />
          </a>
        </div>
      </div>

      {/* Right Side: Image Carousel */}
      <ImageCarousel />
    </div>
  );
}

export default Home;
