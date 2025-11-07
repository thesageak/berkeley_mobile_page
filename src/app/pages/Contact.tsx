export default function Contact() {
  return (
    <div className="flex items-center justify-center ">
      <div className="flex flex-col flex-wrap items-start w-[80vw]">
        <h1 className="font-bold text-[4rem] text-gray-900 leading-[1] mb-4">Contact Us</h1>
        <p className="text-[1.5rem] text-gray-900 mb-4">
          Email:{" "}
          <a
            href="mailto:berkeleymobile@asuc.org"
            className="text-blue-600 cursor-pointer inline-block transition-all duration-300 ease-in-out hover:-translate-y-1"
          >
            berkeleymobile@asuc.org
          </a>
        </p>
        <p className="text-[1.5rem] text-gray-900">
          Join Berkeley Mobile:{" "}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfa7IntnIQYDDcXwe2xVaP2f-xOuxRoitoz4YOt97dHPZ5slg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 cursor-pointer inline-block transition-all duration-300 ease-in-out hover:-translate-y-1"
          >
            Apply here
          </a>
        </p>
      </div>
    </div>
  );
}
