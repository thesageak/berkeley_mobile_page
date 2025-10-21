import { Link } from "react-router-dom";

export default function Footer() {
    //TODO: Add proper hrefs for each link.
    return (
        <footer className = "flex flex-row justify-center items-center gap-60 -translate-y-15">
            <Link to = "/privacy" className = "cursor-pointer hover:underline">Privacy</Link>
            <Link to = "" className = "cursor-pointer hover:underline">Release Notes</Link>
            <Link to = "" className = "cursor-pointer hover:underline">Contact Us</Link>
            <Link to = "" className = "cursor-pointer hover:underline">About Us</Link>
        </footer>
    )
}