import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoIosMail,
} from "react-icons/io";
import { MdOutlinePhoneIphone } from "react-icons/md";

export default function Popups({ popups }) {
  return (
    <>
      {popups === "about" && (
        <div
          className={`${
            popups === "about"
              ? "slide-in-elliptic-top-fwd"
              : "flip-out-hor-top"
          } slide-in-elliptic-top-fwd absolute top-1/2 left-1/2 z-20 transform -translate-y-1/2 -translate-x-1/2 m-2.5 font-bold border-2 border-blue-500 rounded p-2 bg-gray-200 bg-opacity-50`}
        >
          <p>hi I am Henry Chung.</p>
          <p>I am currently studiny computing science.</p>
        </div>
      )}
      {popups === "projects" && (
        <div className="slide-in-elliptic-top-fwd absolute top-1/2 left-1/2 z-20 transform -translate-y-1/2 -translate-x-1/2 m-2.5 font-bold border-2 border-blue-500 rounded p-2 bg-gray-200 bg-opacity-50">
          <p>projects.</p>
        </div>
      )}
      {popups === "skills" && (
        <div className="slide-in-elliptic-top-fwd absolute top-1/2 left-1/2 z-20 transform -translate-y-1/2 -translate-x-1/2 m-2.5 font-bold border-2 border-blue-500 rounded p-2 bg-gray-200 bg-opacity-50">
          <p>skills</p>
        </div>
      )}
      {popups === "contact" && (
        <div
          className="slide-in-elliptic-top-fwd absolute z-20 transform -translate-y-1/2 -translate-x-1/2 m-2.5 font-bold border-2 border-blue-500 rounded p-2 bg-gray-200 bg-opacity-50"
          style={{ top: "20%", left: "60%", width: "400px"}}
        >
          <div className="w-1/2 p-2">
            <h2 className="mb-4 text-center text-xl font-bold">SNS</h2>
            <div className="h-auto">
              <p className="flex items-center space-x-2 mb-4">
                <IoLogoGithub size={40} />
                <a
                  href="https://github.com/HenryChung98"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:underline"
                >
                  GitHub
                </a>
              </p>
              <p className="flex items-center space-x-2 mb-4">
                <IoLogoLinkedin size={40} />
                <a
                  href="https://www.linkedin.com/in/henry-chung-0550812ab/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:underline"
                >
                  LinkedIn
                </a>
              </p>
              <p className="flex items-center space-x-2 mb-4">
                <IoLogoInstagram size={40} />
                <a
                  href="https://www.instagram.com/henryy__98"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:underline"
                >
                  Instagram
                </a>
              </p>
            </div>
          </div>
          <div className="w-1/2 p-2">
            <h2 className="mb-4 text-center text-xl font-bold">Contact</h2>
            <div className="h-auto">
              <p className="flex items-center space-x-2 mb-4">
                <IoIosMail size={40} />
                <a
                  href="mailto:tongsik98@gmail.com"
                  className="text-lg hover:underline"
                >
                  Email
                </a>
              </p>
              <p className="flex items-center space-x-2 mb-4">
                <MdOutlinePhoneIphone size={40} />
                <a href="tel:(778)322-3951" className="text-lg hover:underline">
                  (778) 322-3951
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
