import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";


const Social = () => {



    return (
        <div className="grid grid-cols-1 gap-4 fixed right-28 top-[40%]">
            <a rel="noreferrer" href="https://www.instagram.com/_shatab_/" target="_blank" className="">
                <FaInstagramSquare className="text-3xl hover:text-5xl transition-all duration-500 " />
            </a>
            <a rel="noreferrer" href="https://www.linkedin.com/in/s-shatab-489811180/" target="_blank"><FaLinkedin className="text-3xl hover:text-5xl transition-all duration-500 " /></a>
            <a rel="noreferrer" href="https://github.com/Shatab99" target="_blank"><FaGithub className="text-3xl hover:text-5xl transition-all duration-500 " /></a>

        </div>
    );
};

export default Social;