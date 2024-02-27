import { useEffect, useState } from "react";
import Modal from "../Reuseables/Modal";
import { FaUserTie } from "react-icons/fa6";
import me from '../assets/images/me.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function WelcomeModal() {

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        AOS.init();
        const timer = setTimeout(() => {
            setIsOpen(true)
        }, 5000)

        return () => clearInterval(timer)

    }, [])



    return (
        <>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                <div className="flex flex-col  gap-3">
                    <h1 className="text-2xl font-semibold text-center">Hi There, Welcome to my portfolio</h1>
                    <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-4">
                        <div className="leading-7">
                            <p>As a junior MERN Stack developer , I can offer you to build you SPA{'(Single Page Application)'} project .</p>
                            <p>So , {`let's`} have a cup of coffee on google meet . You can  <a onClick={() => setIsOpen(false)} href="#footer" className="font-semibold text-orange-600 hover:text-orange-800">contact me clicking here</a> through  filling the contact me form </p>
                            <div className="flex items-center justify-start gap-3 mt-5">
                                <button onClick={() => document.getElementById('my_modal_3').showModal()} className="btn btn-sm bg-orange-600 text-white hover:text-black border-0"><FaUserTie className="text-lg" /> Hire Me </button>
                                <button onClick={() => setIsOpen(false)} className="btn btn-sm btn-outline text-orange-600   border-2">May Be later ! </button>
                                
                            </div>
                        </div>
                        <div className='divider lg:divider-horizontal divider-warning'></div>
                        <img src={me} alt="" className='w-64 h-64' />
                    </div>
                </div>
            </Modal>

        </>
    )
}
