import { useEffect, useState } from "react";
import Modal from "../Reuseables/Modal";
import Lottie from "lottie-react";
import gitani from "../assets/animation/Github-animation.json"


const GetMoreInfo = ({showMoreInfo}) => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if(showMoreInfo){
            const timer = setTimeout(() => {
                setIsOpen(true)
            }, 8000)
            return () => clearInterval(timer)
        }

    }, [showMoreInfo])



    return (
        <>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                <div className="flex flex-col items-center gap-3">
                <Lottie animationData={gitani} className="max-w-sm " />
                <h1 className="text-2xl">
                    Do you want to explore more about me ? 
                </h1>
                <div className="flex items-center gap-6">
                    <a rel="noreferrer" href="https://github.com/Shatab99" target="_blank" className="btn btn-sm bg-orange-600 text-white hover:bg-orange-700 flex gap-2 transition-all duration-700 hover:gap-4 ">Yes, I want to </a>
                    <button onClick={()=>setIsOpen(false)} className="btn btn-sm btn-outline text-orange-600 hover:bg-orange-600 hover:border-orange-600  transition-all duration-1000">No, I {`don't`} want to</button>
                </div>
                </div>
            </Modal>

        </>
    )
};

export default GetMoreInfo;