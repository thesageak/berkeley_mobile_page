import appStore from "../assets/app-store.svg";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-start justify-center h-full py-[64px] px-[32px]">
      <h1 className="font-bold text-[5rem] text-gray-900 m-0 leading-[1]">Berkeley</h1>
      <h1 className="font-bold text-[5rem] text-gray-900 m-0 leading-[1]">Mobile</h1>

      <p className="text-[1.5rem] text-gray-900 tracking-widest mt-4">
        Your essential campus life companion.
        <br />
        Everything Berkeley, all in one app.
      </p>

      <a href="https://apps.apple.com/us/app/berkeley-mobile/id912243518">
        <img id="app-store" src={appStore} className="mt-8 w-40" />
      </a>
    </div>
  );
}
