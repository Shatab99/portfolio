import me from '../assets/images/me.png'

const About = () => {
    return (
        <div id='about' className="my-12 max-w-3xl mx-auto ">
            <div className="flex flex-col lg:flex-row items-center justify-center">
                <div
                   
                >
                    <img src={me} alt="" className='w-64 h-64' />
                </div>
                <div className='divider lg:divider-horizontal divider-warning'></div>
                <div className='max-w-xs'>
                    <h1 className="text-3xl font-bold">About <span className='text-orange-700'>Me</span></h1>
                    <div className="divider my-0"></div>
                    <p className='text-gray-600 font-semibold' >I am a dedicated Software Engineer with nearly 2 years of experience in full-stack development, proficient in HTML, CSS, JavaScript, TypeScript, Node.js, Express, Mongoose, and React. I specialize in building scalable and efficient web applications with a focus on delivering exceptional user experiences. My experience spans both front-end and back-end development, and I’m passionate about solving complex problems and continuously learning new technologies to stay ahead in the fast-evolving tech landscape.</p>
                </div>
            </div>
        </div>
    );
};

export default About;
