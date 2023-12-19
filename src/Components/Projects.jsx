import InfiniteScroll from 'react-infinite-scroll-component';
import web1 from '../assets/images/webpage1.png'
import web2 from '../assets/images/webpage2.png'
import web3 from '../assets/images/webpage3.png'
import web4 from '../assets/images/webpage4.png'
import React, { useRef, useState } from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Projects = () => {
    return (
        <div id="projects" className="max-w-xs lg:max-w-4xl mx-auto mb-12">
            <h1 className="text-3xl font-semibold">My Projects</h1>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                <SwiperSlide>
                    <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row p-6 shadow-xl items-center justify-center" data-aos="flip-left">
                        <InfiniteScroll dataLength={8} height={300}>
                            <a href="https://lucky-pear.surge.sh/" target='_blank'>
                                <img src={web1} alt="" className='w-60 ' />
                            </a>
                        </InfiniteScroll>
                        <div className='lg:divider lg:divider-horizontal lg:divider-warning'></div>
                        <div className='max-w-xs flex flex-col gap-2'>
                            <h1 className='text-2xl font-semibold'>Online Restaurent </h1>
                            <p className='text-xs font-semibold text-gray-500'>
                                An online restaurant webpage serves as the digital storefront for your culinary establishment. It typically includes a welcoming homepage featuring high-quality images of the restaurant and its signature dishes, along with prominent calls-to-action for menu exploration and reservations. The menu section organizes culinary offerings into categories, providing enticing descriptions and prices. A gallery showcases the {`restaurant's`} ambiance and delectable creations, complemented by positive testimonials and any accolades.</p>

                            <p className='font-bold text-red-800'>Contains with Admin panel </p>
                            <a href="https://lucky-pear.surge.sh/" target='_blank' className='btn bg-orange-600 text-white hover:text-black mt-3'>
                                Live Link <FaExternalLinkAlt />
                            </a>
                        </div>
                    </div>

                </SwiperSlide>


                <SwiperSlide>
                    <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row p-6 shadow-xl items-center justify-center" data-aos="flip-right">
                        <InfiniteScroll dataLength={8} height={300}>
                            <a href="https://noxious-apples.surge.sh/" target='_blank'>
                                <img src={web2} alt="" className='w-60 ' />
                            </a>
                        </InfiniteScroll>
                        <div className='lg:divider lg:divider-horizontal lg:divider-warning'></div>
                        <div className='max-w-xs flex flex-col gap-2'>
                            <h1 className='text-2xl font-semibold'>Food Share  </h1>
                            <p className='text-xs font-semibold text-gray-500'>
                                This webapage hosts the codebase for our food share website project, which aims to help poor people. Our platform connects individuals and organizations with surplus food to those in need, promoting sustainability and community sharing.</p>
                                <a href="https://noxious-apples.surge.sh/" target='_blank' className='btn bg-orange-600 text-white hover:text-black mt-3'>
                                Live Link <FaExternalLinkAlt />
                            </a>
                                
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row p-6 shadow-xl items-center justify-center" data-aos="flip-left">
                        <InfiniteScroll dataLength={8} height={300}>
                            <a href="https://erratic-houses.surge.sh/" target='_blank'>
                                <img src={web3} alt="" className='w-60' />
                            </a>
                        </InfiniteScroll>
                        <div className='lg:divider lg:divider-horizontal lg:divider-warning'></div>
                        <div className='max-w-xs flex flex-col gap-2'>
                            <h1 className='text-2xl font-semibold'>Biya Shaadi .com  </h1>
                            <p className='text-xs font-semibold text-gray-500'>
                                In the modern era, love stories aren't confined to handwritten letters or whispered secrets. They find a new home on the digital stage through the enchanting world of marriage websites. As couples embark on the journey towards matrimony, they're increasingly turning to the web to weave their narratives and share the excitement of their upcoming nuptials.</p>
                            <p className='font-bold text-red-800'>Contains with Admin panel </p>
                            <a href="https://erratic-houses.surge.sh/" target='_blank' className='btn bg-orange-600 text-white hover:text-black mt-3'>
                                Live Link <FaExternalLinkAlt />
                            </a>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row p-6 shadow-xl items-center justify-center" data-aos="flip-right">
                        <InfiniteScroll dataLength={8} height={300}>
                            <a href="https://square-hall.surge.sh/" target='_blank'>
                                <img src={web4} alt="" className='w-60 ' />
                            </a>
                        </InfiniteScroll>
                        <div className='lg:divider lg:divider-horizontal lg:divider-warning'></div>
                        <div className='max-w-xs flex flex-col gap-2'>
                            <h1 className='text-2xl font-semibold'>Car Shop  </h1>
                            <p className='text-xs font-semibold text-gray-500'>
                                In the fast lane of the digital age, the traditional car-buying experience has undergone a transformative shift, steering towards the vibrant world of online car shops. As automotive enthusiasts and everyday drivers alike seek their dream rides, the internet emerges as the ultimate showroom, offering an immersive and convenient space to explore, compare, and purchase vehicles</p>
                            <a href="https://square-hall.surge.sh/" target='_blank' className='btn bg-orange-600 text-white hover:text-black mt-3'>
                                Live Link <FaExternalLinkAlt />
                            </a>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

        </div>
    );
};

export default Projects;