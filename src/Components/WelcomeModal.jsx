import { useEffect, useState } from "react";
import Modal from "../Reuseables/Modal";
import { FaUserTie } from "react-icons/fa6";
import me from '../assets/images/me.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function WelcomeModal({top, setShowMoreInfo}) {

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        AOS.init();
        if(top){
            const timer = setTimeout(() => {
                setIsOpen(true)
            }, 8000)
            return () => clearInterval(timer)
        }

    }, [top])



    return (
        <>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                <div className="flex flex-col  gap-3">
                    <h1 className="text-2xl font-semibold text-center">Hi There, Welcome to my portfolio</h1>
                    <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-4">
                        <div className="leading-7" data-aos="zoom-out-up" data-aos-duration="2000">
                            <p>As a software engineer , I can offer you to build you SPA{'(Single Page Application)'} or any full stack project .</p>
                            <p>So , we can have a cup of coffee on google meet . You can  <a onClick={() => {
                                setIsOpen(false);
                            }} href="#footer" className="font-semibold text-orange-600 hover:text-orange-800">contact me clicking here</a> through  filling the contact me form .</p> <span className="font-semibold">Thank you ❤🧡</span>
                            <div className="flex items-center justify-start gap-3 mt-5">
                                <button onClick={() => {
                                    document.getElementById('my_modal_3').showModal();
                                    setIsOpen(false);
                                    setShowMoreInfo(true)
                                }} className="btn btn-sm bg-orange-600 text-white hover:text-black border-0"><FaUserTie className="text-lg" /> Hire Me </button>
                                <button onClick={() => {
                                    setIsOpen(false);
                                    setShowMoreInfo(true)
                                }} className="btn btn-sm btn-outline text-orange-600   border-2">May Be later ! </button>

                            </div>
                        </div>
                        <div className='divider lg:divider-horizontal divider-warning'></div>
                        <div data-aos="zoom-in-left" data-aos-duration="2000" className="w-2/3">
                            <img src={me} alt="" className='w-64 h-64'  />
                        </div>
                    </div>
                </div>
            </Modal>

        </>
    )
}
