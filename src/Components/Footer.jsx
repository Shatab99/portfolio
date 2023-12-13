import { FaPaperPlane, FaInstagramSquare, FaLinkedin, FaGithub } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="footer p-10 bg-orange-200  text-black ">
            <aside className="text-lg">
                <p>Md Shahriar Shatab<br />Providing reliable website service since 2023</p>
            </aside>
            <nav>
                <header className="footer-title">Social</header>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.instagram.com/_shatab_/" target="_blank">
                        <FaInstagramSquare className="text-6xl"/>
                    </a>
                    <a href="https://www.linkedin.com/in/s-shatab-489811180/" target="_blank"><FaLinkedin className="text-6xl"/></a>
                    <a href="https://github.com/Shatab99" target="_blank"><FaGithub className="text-6xl"/></a>
                    
                </div>
            </nav>
            <div>
                <h1 className="footer-title">Contact me</h1>
                <input type="email" placeholder="Email . . ." className="input input-bordered w-full max-w-xs" />
                <textarea placeholder="Your message . . ." className="textarea textarea-bordered textarea-sm w-full max-w-xs" ></textarea>
                <button className="btn btn-wide bg-orange-600 text-white hover:text-black">Send <FaPaperPlane /></button>
            </div>
        </footer>
    );
};

export default Footer;