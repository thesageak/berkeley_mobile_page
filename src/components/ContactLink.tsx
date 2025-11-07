interface ContactLinkProps {
  text: string;
  linkText: string;
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

export default function ContactLink({ text, linkText, href, target = "_blank" }: ContactLinkProps) {
  return (
    <p className="text-[1.5rem] text-gray-900">
      {text}{" "}
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className="text-blue-600 cursor-pointer inline-block transition-all duration-300 ease-in-out hover:-translate-y-1"
      >
        {linkText}
      </a>
    </p>
  );
}
