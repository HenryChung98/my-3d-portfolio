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
          } slide-in-elliptic-top-fwd absolute top-1/3 left-1/2 z-20 transform -translate-y-1/2 -translate-x-1/2 m-2.5 font-bold border-2 border-blue-500 rounded p-2 bg-gray-200`}
          style={{ width: "500px", height: "300px" }}
        >
          <p className="flex items-center space-x-2 mb-4">
            Hi there! I am currently pursuing a 2-year Computing Science diploma
            at Douglas College, with a concentration in game development.
            Passionate about creating engaging and interactive experiences, I
            have developed several video games using programming languages such
            as C++ and C#, alongside industry-standard game engines like Unity
            and Unreal.
          </p>
          <p className="flex items-center space-x-2 mb-4">
            My expertise lies in designing immersive game mechanics and building
            intuitive user interfaces. I am constantly driven to innovate and
            refine my skills to contribute meaningfully to the evolving gaming
            industry.
          </p>
        </div>
      )}
      {popups === "projects" && (
        <div className="puff-in-center fixed top-0 left-0 z-20 w-full h-full font-bold border-2 rounded p-2 bg-gray-200 flex justify-center items-center">
          <p>projects.</p>
        </div>
      )}
      {popups === "skills" && (
        <>
          <div
            className="rotate-in-2-cw absolute z-20 transform -translate-y-1/2 -translate-x-1/2 m-2.5 font-bold border-2 border-blue-500 rounded p-2 bg-gray-200 bg-opacity-80"
            style={{ top: "350px", left: "400px" }}
          >
            <h2 className="p-4 text-bold">Programming Languages</h2>
            <ul className="list-none space-y-2">
              <li className="before:content-['-'] before:mr-2">C#</li>
              <li className="before:content-['-'] before:mr-2">C++</li>
              <li className="before:content-['-'] before:mr-2">Python</li>
              <li className="before:content-['-'] before:mr-2">JavaScript</li>
              <li className="before:content-['-'] before:mr-2">TypeScript</li>
              <li className="before:content-['-'] before:mr-2">PHP</li>
            </ul>
          </div>
          <div
            className="rotate-in-2-cw absolute z-20 transform -translate-y-1/2 -translate-x-1/2 m-2.5 font-bold border-2 border-blue-500 rounded p-2 bg-gray-200 bg-opacity-80"
            style={{ top: "200px", left: "1000px" }}
          >
            <h2 className="p-4 text-bold">Libraries / Frameworks</h2>
            <ul className="list-none space-y-2">
              <li className="before:content-['-'] before:mr-2">
                <a
                  href="https://r3f.docs.pmnd.rs/getting-started/introduction"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  R3F
                </a>
              </li>
              <li className="before:content-['-'] before:mr-2">
                <a
                  href="https://www.libsdl.org/"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SDL
                </a>
              </li>
              <li className="before:content-['-'] before:mr-2">
                <a
                  href="https://expressjs.com/"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Express
                </a>
              </li>
              <li className="before:content-['-'] before:mr-2">
                <a
                  href="https://react.dev/learn/installation"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React
                </a>
              </li>
              <li className="before:content-['-'] before:mr-2">
                <a
                  href="https://nextjs.org/docs/getting-started/installation"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NextJs
                </a>
              </li>
              <li className="before:content-['-'] before:mr-2">
                <a
                  href="https://www.djangoproject.com/"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Django
                </a>
              </li>
            </ul>
          </div>
          <div
            className="rotate-in-2-cw absolute z-20 transform -translate-y-1/2 -translate-x-1/2 m-2.5 font-bold border-2 border-blue-500 rounded p-2 bg-gray-200 bg-opacity-80"
            style={{ bottom: "300px", right: "300px" }}
          >
            <h2 className="p-4 text-bold">Engines, etc</h2>
            <ul className="list-none space-y-2">
              <li className="before:content-['-'] before:mr-2">
                <a
                  href="https://www.unrealengine.com/en-US"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Unreal Engine
                </a>
              </li>
              <li className="before:content-['-'] before:mr-2">
                <a
                  href="https://unity.com/"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Unity
                </a>
              </li>
              <li className="before:content-['-'] before:mr-2">
                <a
                  href="https://www.adobe.com/products/premiere/campaign/pricing.html"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Premiere Pro
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
      {popups === "contact" && (
        <div
          className="slide-in-elliptic-left-fwd absolute z-20 transform -translate-y-1/2 -translate-x-1/2 m-2.5 font-bold border-2 border-blue-500 rounded p-2 bg-gray-200 bg-opacity-80 flex flex-col items-stretch"
          style={{ top: "20%", left: "60%", width: "300px" }}
        >
          <div className="p-6">
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
          <div className="p-6">
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
