import banner from '../assets/images/banner2.jpg'
import cv from '/cv.pdf'
import Lottie from "lottie-react";
import webportfolio from '../assets/animation/Animation-portfoiloNew.json'
import { FaShareFromSquare } from "react-icons/fa6";
import { GrDocumentUser } from "react-icons/gr";
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
    return (
        <div id='home' className="">

            <div className="hero min-h-screen bg-base-200 " style={{ backgroundImage: `url(${banner})` }}>

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Lottie animationData={webportfolio} className="max-w-lg " />
                    <div className='lg:w-[650px]'>
                        <h1 className="text-2xl font-bold">Hi There ,</h1>
                        <h1 className="text-5xl font-bold">I am <span className='text-orange-600'>S</span><Typewriter
                            loop={0}
                            words={['hahriar Shatab',
                                `oftware Engineer`
                            ]}
                            typeSpeed={60}
                        /></h1>
                        <p className="py-6 text-lg font-semibold"><span className='text-orange-600 font-extrabold'>Full</span>  Stack Developer</p>
                        <div className='flex items-center gap-4'>
                            <a href={cv} download={cv} className="btn bg-orange-600 text-white hover:bg-orange-700 flex gap-2 transition-all duration-700 hover:gap-4">Download CV <FaShareFromSquare className='text-lg' /></a>
                            <a rel='noreferrer' href='https://drive.google.com/file/d/17fo5Af-E8w4L_gfQGDvO6Ry7G_VMFVbQ/view?usp=sharing' target='_blank' className='btn btn-outline text-orange-600 hover:bg-orange-600 hover:border-orange-600  transition-all duration-1000'>
                                See Resume <GrDocumentUser className='text-xl' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
