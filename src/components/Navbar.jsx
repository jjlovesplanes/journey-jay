// Logo of my initial
import logo from "../assets/JayKimLogo.png";
// Logo of LinkedIn
import { FaLinkedin } from "react-icons/fa";
// Logo of Github
import { FaGithub } from "react-icons/fa";
// Logo of Instagram
import { FaInstagram } from "react-icons/fa";
// Logo of Facebook
import { FaFacebook } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img src={logo} alt="logo" style={{ width: '100px', height: 'auto' }} />
            </div>

            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://github.com/jjlovesplanes" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>

                <a href="https://www.linkedin.com/in/jay-k-579729174/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>

                <a href="https://www.instagram.com/flying__jay/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>

                <a href="https://www.facebook.com/jay.kim.3956/" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
