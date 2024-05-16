// import logo from "../assets/LogoNB.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center ">
        <div className="mx-2 w-24 font-DM_Serif_Display text-5xl text-center">
          NB
          {/* <img className="mx-2 w-10" src={logo} alt="logo" /> */}
        </div>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl ">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/nicol%C3%A1s-buszczak-3b2495160/"
          className="text-neutral-300"
        >
          <FaLinkedin />
        </a>
        <a
          target="_blank"
          href="https://github.com/Boschaynamo"
          className="text-neutral-300"
        >
          <FaGithub />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/nicoboscha/"
          className="text-neutral-300"
        >
          <FaInstagram />
        </a>
        {/* <a target='_blank' href='https://www.linkedin.com/in/nicol%C3%A1s-buszczak-3b2495160/'><FaSquareXTwitter /></a> */}
      </div>
    </nav>
  );
}

export default Navbar;