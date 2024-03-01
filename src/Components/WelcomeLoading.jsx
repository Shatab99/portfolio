import Lottie from "lottie-react";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import welComeLoading from '../assets/animation/welcome-Screen.json'



const WelcomeLoading = ({ top, setTop }) => {

    return (
        <div className={`min-h-screen  transition-all duration-1000 z-50 ease-in flex items-center justify-center bg-yellow-100 fixed 
        ${top ? 'top-[-900px] w-full ' : 'top-0 w-full overflow-y-auto '
            }
        `}>
            <div className="flex flex-col lg:flex-row items-center justify-center ">
                <div className="w-96 max-w-xl lg:w-[600px] mx-auto"
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1000"
                >
                    <Lottie animationData={welComeLoading} />
                </div>
                <div className="space-y-5 flex flex-col items-center lg:items-start gap-4  "
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="2000"
                >
                    <div className="text-4xl text-center lg:text-left lg:text-[50px] font-bold flex flex-col gap-5">
                        <h1>Hi There, Welcome To My </h1>
                        <span className="text-orange-500">Portfolio</span>
                    </div>
                    <button onClick={() => {
                        setTop(true)
                        window.scroll({ top: 0 })
                    }} className="btn  flex items-center gap-2 bg-orange-600 text-white border-0 transition-all duration-1000 hover:bg-orange-700 hover:gap-6 ">Get Started <FaArrowRightFromBracket /></button>
                </div>
            </div>
        </div>
    );
};

export default WelcomeLoading;