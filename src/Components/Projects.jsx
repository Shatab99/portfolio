import InfiniteScroll from 'react-infinite-scroll-component';
import web1 from '../assets/images/webpage1.png'
import web2 from '../assets/images/webpage2.png'
import web3 from '../assets/images/webpage3.png'
import web4 from '../assets/images/webpage4.png'
import uiUxImg from '../assets/images/Uiux-1.png'
import uiUxImg2 from '../assets/images/Uiux-2.png'
import { FaExternalLinkAlt } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import DropDown from '../Reuseables/DropDown';
import { useState } from 'react';

const people = [
    { name: 'Full Stack Projects' },
    { name: 'Frontend Projects' },
    { name: 'Backend Projects' },
    { name: 'UiUx Design' },
]

const projects = [
    {
        title: 'Online Restaurent',
        category: 'Full Stack Projects',
        description: "An online restaurant webpage serves as the digital storefront for your culinary establishment. It typically includes a welcoming homepage featuring high-quality images of the restaurant and its signature dishes, along with prominent calls-to-action for menu exploration and reservations. The menu section organizes culinary offerings into categories, providing enticing descriptions and prices. A gallery showcases the restaurant's ambiance and delectable creations, complemented by positive testimonials and any accolades.",
        admin: true,
        img: web1,
        liveLink: 'https://lucky-pear.surge.sh/'
    },
    {
        title: 'Food Share ',
        category: 'Full Stack Projects',
        description: "This webapage hosts the codebase for our food share website project, which aims to help poor people. Our platform connects individuals and organizations with surplus food to those in need, promoting sustainability and community sharing.",
        admin: false,
        img: web2,
        liveLink: 'https://noxious-apples.surge.sh/'
    },
    {
        title: 'Biya Shaadi .com ',
        category: 'Full Stack Projects',
        description: "In the modern era, love stories aren't confined to handwritten letters or whispered secrets. They find a new home on the digital stage through the enchanting world of marriage websites. As couples embark on the journey towards matrimony, they're increasingly turning to the web to weave their narratives and share the excitement of their upcoming nuptials",
        admin: true,
        img: web3,
        liveLink: 'https://erratic-houses.surge.sh/'
    },
    {
        title: 'Car Shop ',
        category: 'Full Stack Projects',
        description: "In the fast lane of the digital age, the traditional car-buying experience has undergone a transformative shift, steering towards the vibrant world of online car shops. As automotive enthusiasts and everyday drivers alike seek their dream rides, the internet emerges as the ultimate showroom, offering an immersive and convenient space to explore, compare, and purchase vehicles",
        admin: false,
        img: web4,
        liveLink: 'https://square-hall.surge.sh/'
    },
    {
        title: 'Ride Share App -UiUx Design ',
        category: 'UiUx Design',
        description: "Designing a ride-share app in Figma involves creating a cohesive user experience across various screens, including the homepage, sign-up/sign-in, dashboard, search and booking, driver profiles, ride tracking, payment, notifications, settings, and help/support sections. Each screen should prioritize simplicity, clarity, and ease of use, with consistent design elements such as color schemes, typography, and iconography. User testing and iterative improvements are crucial to ensure that the app meets the needs of its users effectively.",
        admin: false,
        img: uiUxImg,
        liveLink: 'https://www.figma.com/file/jiN8km6lb42MuKBPTi8Jma/UI-of-Ride-Share-app?type=design&node-id=0%3A1&mode=design&t=Zkf8buHW3pD90Q8z-1'
    },
    {
        title: 'Online Restaurent -UiUx Design ',
        category: 'UiUx Design',
        description: "Designing an online restaurant management system in Figma involves a comprehensive approach to address the diverse needs of restaurant owners, staff, and customers. At the heart of the system lies an intuitive dashboard accessible to restaurant managers, providing a centralized hub for overseeing various aspects of operations. This dashboard typically includes modules for order management, inventory tracking, staff scheduling, and financial reporting. Each module should offer clear visual representations of data, enabling quick decision-making and efficient resource allocation.",
        admin: false,
        img: uiUxImg2,
        liveLink: 'https://www.figma.com/file/jiN8km6lb42MuKBPTi8Jma/UI-of-Ride-Share-app?type=design&node-id=0%3A1&mode=design&t=Zkf8buHW3pD90Q8z-1'
    },
]

const Projects = () => {

    const [selected, setSelected] = useState(people[0])

    console.log(selected?.name)

    const fullStacks = projects.filter(project => project.category === 'Full Stack Projects')
    const frontEnds = projects.filter(project => project.category === 'Frontend Projects')
    const backEnds = projects.filter(project => project.category === 'Backend Projects')
    const uiUx = projects.filter(project => project.category === 'UiUx Design')


    return (
        <div id="projects" className="max-w-xs lg:max-w-4xl mx-auto mb-12 mt-4 w-full">
            <div className='flex items-center justify-between '>
                <h1 className="text-3xl font-semibold">My Projects</h1>
                <DropDown selected={selected} setSelected={setSelected} />
            </div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    selected?.name === 'Full Stack Projects' &&
                    fullStacks?.map(project => <>
                        <SwiperSlide>
                            <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row p-6 shadow-xl items-center justify-center"
                                data-aos="flip-down"
                            >
                                <InfiniteScroll dataLength={8} height={300}>
                                    <a rel='noreferrer' href={project.liveLink} target='_blank'>
                                        <img src={project.img} alt="" className='w-60 ' />
                                    </a>
                                </InfiniteScroll>
                                <div className='lg:divider lg:divider-horizontal lg:divider-warning'></div>
                                <div className='max-w-xs flex flex-col gap-2'>
                                    <h1 className='text-2xl font-semibold'>{project.title} </h1>
                                    <p className='text-xs font-semibold text-gray-500'>
                                        {project.description}
                                    </p>

                                    {
                                        project.admin && <p className='font-bold text-red-800'>Contains with Admin panel </p>
                                    }
                                    <a rel='noreferrer' href={project.liveLink} target='_blank' className='btn bg-orange-600 text-white hover:text-black mt-3'>
                                        Live Link <FaExternalLinkAlt />
                                    </a>
                                </div>
                            </div>

                        </SwiperSlide>
                    </>)
                }

                {
                    selected?.name === 'Frontend Projects' ?
                        frontEnds.length === 0 ? <div className='flex justify-center my-12 '>
                            <p className='text-5xl font-bold animate-bounce'>Projects Comming Soon</p>
                    </div> :
                        frontEnds?.map(project => <>
                            <SwiperSlide>
                                <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row p-6 shadow-xl items-center justify-center"
                                    data-aos="flip-down"
                                >
                                    <InfiniteScroll dataLength={8} height={300}>
                                        <a rel='noreferrer' href={project.liveLink} target='_blank'>
                                            <img src={project.img} alt="" className='w-60 ' />
                                        </a>
                                    </InfiniteScroll>
                                    <div className='lg:divider lg:divider-horizontal lg:divider-warning'></div>
                                    <div className='max-w-xs flex flex-col gap-2'>
                                        <h1 className='text-2xl font-semibold'>{project.title} </h1>
                                        <p className='text-xs font-semibold text-gray-500'>
                                            {project.description}
                                        </p>

                                        {
                                            project.admin && <p className='font-bold text-red-800'>Contains with Admin panel </p>
                                        }
                                        <a rel='noreferrer' href={project.liveLink} target='_blank' className='btn bg-orange-600 text-white hover:text-black mt-3'>
                                            Live Link <FaExternalLinkAlt />
                                        </a>
                                    </div>
                                </div>

                            </SwiperSlide>
                        </>) : <p></p>
                }
                {
                    selected?.name === 'Backend Projects' &&
                        backEnds.length === 0 ? <div className='flex justify-center my-12 '>
                            <p className='text-5xl font-bold animate-bounce'>Projects Comming Soon</p>
                    </div> :
                        backEnds?.map(project => <>
                            <SwiperSlide>
                                <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row p-6 shadow-xl items-center justify-center"
                                    data-aos="flip-down"
                                >
                                    <InfiniteScroll dataLength={8} height={300}>
                                        <a rel='noreferrer' href={project.liveLink} target='_blank'>
                                            <img src={project.img} alt="" className='w-60 ' />
                                        </a>
                                    </InfiniteScroll>
                                    <div className='lg:divider lg:divider-horizontal lg:divider-warning'></div>
                                    <div className='max-w-xs flex flex-col gap-2'>
                                        <h1 className='text-2xl font-semibold'>{project.title} </h1>
                                        <p className='text-xs font-semibold text-gray-500'>
                                            {project.description}
                                        </p>

                                        {
                                            project.admin && <p className='font-bold text-red-800'>Contains with Admin panel </p>
                                        }
                                        <a rel='noreferrer' href={project.liveLink} target='_blank' className='btn bg-orange-600 text-white hover:text-black mt-3'>
                                            Live Link <FaExternalLinkAlt />
                                        </a>
                                    </div>
                                </div>

                            </SwiperSlide>
                        </>)
                }
                {
                    selected?.name === 'UiUx Design' &&
                        uiUx?.map(project => <>
                            <SwiperSlide>
                                <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row p-6 shadow-xl items-center justify-center"
                                    data-aos="flip-down"
                                >
                                    <InfiniteScroll dataLength={8}  >
                                        <a rel='noreferrer' href={project.liveLink} target='_blank'>
                                            <img src={project.img} alt="" className='w-60 ' />
                                        </a>
                                    </InfiniteScroll>
                                    <div className='lg:divider lg:divider-horizontal lg:divider-warning'></div>
                                    <div className='max-w-xs flex flex-col gap-2'>
                                        <h1 className='text-2xl font-semibold'>{project.title} </h1>
                                        <p className='text-xs font-semibold text-gray-500'>
                                            {project.description}
                                        </p>

                                        {
                                            project.admin && <p className='font-bold text-red-800'>Contains with Admin panel </p>
                                        }
                                        <a rel='noreferrer' href={project.liveLink} target='_blank' className='btn bg-orange-600 text-white hover:text-black mt-3'>
                                            Live Link <FaExternalLinkAlt />
                                        </a>
                                    </div>
                                </div>

                            </SwiperSlide>
                        </>)
                }




            </Swiper>

        </div>
    );
};

export default Projects;