import me from '../assets/images/me.jpg'

const About = () => {
    return (
        <div id='about' className="my-12 max-w-3xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-center">
                <div
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                >
                    <img src={me} alt="" className='w-64 h-64 rounded-full' />
                </div>
                <div className='divider lg:divider-horizontal divider-warning'></div>
                <div className='max-w-xs'>
                    <h1 className="text-3xl font-bold">About <span className='text-orange-700'>Me</span></h1>
                    <div className="divider my-0"></div>
                    <p className='text-gray-600 font-semibold' >Hi , I am Md Shahriar Shatab.Basicaly I am a MERN Stack developer . I usualy design in React for fron end . For Backend I use express and mongo db . My vision is to be a good and honest person.
                    Maybe I am not a good technical guy but I have a dedication in this sector and I try to make myself in discipline .</p>
                </div>
            </div>
        </div>
    );
};

export default About;