import { FiUserCheck } from "react-icons/fi";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { RiLoader5Fill } from "react-icons/ri";



const HireMeForm = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false)
    const [display, setDisplay] = useState(true)

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true)
        emailjs.sendForm('service_7yunuha', 'template_sdn3vma', form.current, 'o9UBm80lxxwl3CqDn')
            .then((result) => {
                console.log(result.text);
                setLoading(false)
                setDisplay(false)
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                setLoading(false)
            });
    };
    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    {
                        display ?
                            <>
                                <h3 className="font-bold text-lg text-center">Please Fill Up the Information</h3>
                                <form ref={form} onSubmit={sendEmail} className="flex flex-col items-center mt-3 gap-3 ">
                                    <input name="user_name" type="text" placeholder="What's your name " className="input input-bordered w-full max-w-xs" required />
                                    <input name="email" type="email" placeholder="Your contact email  " className="input input-bordered w-full max-w-xs" required />
                                    <input name="company_name" type="text" placeholder="Your company name eg : Abc ltd  " className="input input-bordered w-full max-w-xs" required />
                                    <textarea placeholder="Your message / project details / policy" className="textarea textarea-bordered textarea-md w-full max-w-xs" name="message" required></textarea>
                                    {
                                        loading ? <button className="btn btn-wide"><RiLoader5Fill className="animate-spin text-xl" /></button> : <button className="btn btn-wide bg-orange-600 text-white hover:text-black border-0"><FiUserCheck className="text-xl" /> Hire Me</button>
                                    }
                                </form>
                            </>
                            :
                            <div className="text-center space-y-3 mt-5">
                                <h1 className=" text-2xl font-bold animate-bounce">Thanks for hiring me </h1>
                                <p>I will email you back as soon as possible ❤</p>
                            </div>
                    }
                </div>
            </dialog>
        </div>
    );
};

export default HireMeForm;