import { blue_blob, yellow_blob, pink_blob } from "../assets";

export default function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <img
        id="blob-yellow-big"
        src={yellow_blob}
        className="absolute -bottom-[10vh] -left-[10vw] w-[30vw] h-[25vw] rotate-[290deg]"
      />

      <img
        id="blob-yellow-small"
        src={yellow_blob}
        className="absolute -bottom-[3vw] -right-[4vw] w-[10vw] h-[10vw] rotate-[120deg]"
      />

      <img
        id="blob-blue"
        src={blue_blob}
        className="absolute -top-[4vw] -right-[5vw] w-[25vw] h-[25vw] rotate-[325deg]"
      />

      <img
        id="blob-pink"
        src={pink_blob}
        className="absolute top-[10vw] -right-[2vw] w-[10vw] h-[10vw]"
      />
    </div>
  );
}
