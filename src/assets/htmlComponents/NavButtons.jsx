export default function NavButtons({
  lightOn,
  aboutClick,
  projectsClick,
  skillsClick,
  contactClick,
}) {
  return (
    <>
      <div className="absolute top-0 right-0 flex justify-center z-20">
        <button
          className="m-2.5 font-bold border-2 border-blue-500 rounded p-2 bg-gray-200 bg-opacity-50 hover:opacity-50 duration-300"
          style={{ color: lightOn ? "black" : "white", width: "110px" }}
          onClick={aboutClick}
        >
          About me
        </button>
        <button
          className="m-2.5 font-bold border-2 border-blue-500 rounded p-2 bg-gray-200 bg-opacity-50 hover:opacity-50 duration-300"
          style={{ color: lightOn ? "black" : "white", width: "110px" }}
          onClick={projectsClick}
        >
          Projects
        </button>
        <button
          className="m-2.5 font-bold border-2 border-blue-500 rounded p-2 bg-gray-200 bg-opacity-50 hover:opacity-50 duration-300"
          style={{ color: lightOn ? "black" : "white", width: "110px" }}
          onClick={skillsClick}
        >
          Skills
        </button>
        <button
          className="m-2.5 font-bold border-2 border-blue-500 rounded p-2 bg-gray-200 bg-opacity-50 hover:opacity-50 duration-300"
          style={{ color: lightOn ? "black" : "white", width: "110px" }}
          onClick={contactClick}
        >
          Contact
        </button>
        <a
          href="/Henry_Chung_Resume_GameDev.pdf"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="m-2.5 font-bold border-2 border-blue-500 rounded p-2 bg-gray-200 bg-opacity-50 hover:opacity-50 duration-300"
            style={{ color: lightOn ? "black" : "white", width: "110px" }}
          >
            Resume
          </button>
        </a>
        <a
          href="https://henrychung98.github.io/"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="m-2.5 font-bold border-2 border-blue-500 rounded p-2 bg-gray-200 bg-opacity-50 hover:opacity-50 duration-300"
            style={{ color: lightOn ? "black" : "white", width: "110px" }}
          >
            Blog
          </button>
        </a>
      </div>
    </>
  );
}
