import banner from '../assets/images/banner2.jpg'
import cv from '/cv.pdf'
import Lottie from "lottie-react";
import webportfolio from '../assets/animation/Animation-portfoiloNew.json'
import { FaShareFromSquare } from "react-icons/fa6";
import { GrDocumentUser } from "react-icons/gr";
// import SeeResume from './SeeResume';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
    return (
        <div id='home' className="">

            <div className="hero min-h-screen bg-base-200 " style={{ backgroundImage: `url(${banner})` }}>

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Lottie animationData={webportfolio} className="max-w-lg " />
                    <div className='lg:w-[650px]'>
                        <h1 className="text-2xl font-bold">Hi There ,</h1>
                        <h1 className="text-5xl font-bold">I am <span className='text-orange-600'>M</span><Typewriter
                            loop={0}
                            words={['D Shahriar Shatab',
                                `ERN Stack Developer`
                            ]}
                            typeSpeed={60}
                        /></h1>
                        <p className="py-6 text-lg font-semibold"><span className='text-orange-600 font-extrabold'>MERN</span>  Stack Developer</p>
                        <div className='flex items-center gap-4'>
                            <a href={cv} download={cv} className="btn bg-orange-600 text-white hover:text-black border-0">Download CV <FaShareFromSquare className='text-lg' /></a>
                            <button onClick={() => document.getElementById('my_modal_5').showModal()} className='btn btn-outline text-orange-600'>
                                See Resume <GrDocumentUser className='text-xl' />
                            </button>
                            {/* <SeeResume /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
