import { Link } from "react-router";

function Header() {
  return (
    <Link to="/" className="z-11">
      <img id="logo" src="/logo.svg" className="absolute top-[2vw] left-[1vw] w-[6vw] h-[6vw]" />
    </Link>
  );
}

export default Header;
