import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaInstagramSquare, FaLinkedin, FaGithub } from "react-icons/fa";
import Swal from "sweetalert2";
import { RiLoader5Fill } from "react-icons/ri";


const Footer = () => {
    const form = useRef()
    const [loading, setLoading]= useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true)
        emailjs.sendForm('service_7yunuha', 'template_03fakx1', form.current, 'o9UBm80lxxwl3CqDn')
          .then((result) => {
              console.log(result.text);
              Swal.fire({
                position: "center",
                icon: "success",
                background: 'black',
                title: "Email sent ! Relax I will respond .",
                showConfirmButton: false,
                timer: 2000
              });
              setLoading(false)
              form.current.reset();
          }, (error) => {
              console.log(error.text);
          });
      };



    return (
        <footer id="footer" className="footer p-10 bg-orange-200  text-black ">
            <aside className="text-lg">
                <p>Md Shahriar Shatab<br />Providing reliable website service since 2023</p>
            </aside>
            <nav>
                <header className="footer-title">Social</header>
                <div className="grid grid-flow-col gap-4">
                    <a rel="noreferrer" href="https://www.instagram.com/_shatab_/" target="_blank">
                        <FaInstagramSquare className="text-6xl" />
                    </a>
                    <a  rel="noreferrer" href="https://www.linkedin.com/in/md-shahriar-shatab-489811180/" target="_blank"><FaLinkedin className="text-6xl" /></a>
                    <a rel="noreferrer" href="https://github.com/Shatab99" target="_blank"><FaGithub className="text-6xl" /></a>

                </div>
            </nav>
            <div>
                <h1 className="footer-title">Contact me</h1>
                <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-2">
                    <input type="text" placeholder="Name . . ." className="input input-bordered w-full max-w-xs" name="user_name" required/>
                    <input type="email" placeholder="Email . . ." className="input input-bordered w-full max-w-xs" name="user_email" required/>
                    <textarea placeholder="Your message . . ." className="textarea textarea-bordered textarea-sm w-full max-w-xs" name="message" required></textarea>
                    {
                        loading ? <button className="btn btn-wide"><RiLoader5Fill className="animate-spin text-xl" /></button>
                        :
                        <button className="btn btn-wide bg-orange-600 text-white hover:text-black">Send <FaPaperPlane/></button>
                    }
                    
                </form>
            </div>
        </footer>
    );
};

export default Footer;