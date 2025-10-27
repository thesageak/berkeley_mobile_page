import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex flex-row justify-around items-center mb-[40px]">
      <Link to="/privacy" className="cursor-pointer hover:underline">
        Privacy
      </Link>
      <Link to="/release" className="cursor-pointer hover:underline">
        Release Notes
      </Link>
      <Link to="/contact" className="cursor-pointer hover:underline">
        Contact Us
      </Link>
      <Link to="/about" className="cursor-pointer hover:underline">
        About Us
      </Link>
    </footer>
  );
}
