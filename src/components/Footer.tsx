import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="flex flex-row flex-wrap justify-around p-[32px] gap-[16px] items-center z-10">
      <Link
        to="/privacy"
        className="cursor-pointer hover:underline transition-all duration-300 ease-in-out hover:-translate-y-1"
      >
        Privacy
      </Link>
      <Link
        to="/release-notes"
        className="cursor-pointer hover:underline transition-all duration-300 ease-in-out hover:-translate-y-1"
      >
        Release Notes
      </Link>
      <Link
        to="/contact"
        className="cursor-pointer hover:underline transition-all duration-300 ease-in-out hover:-translate-y-1"
      >
        Contact Us
      </Link>
      <Link
        to="/about"
        className="cursor-pointer hover:underline transition-all duration-300 ease-in-out hover:-translate-y-1"
      >
        About Us
      </Link>
    </footer>
  );
}
