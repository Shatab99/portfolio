import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import pythonLogo from "../assets/images/Python-Logo.png"
import mongooseLogo from "../assets/images/mongose-logo.png"
import { SiTypescript } from "react-icons/si";

const data = [
    {
        name: '',
        uv: 0,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'HTML',
        uv: 50,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'CSS',
        uv: 60,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Javasript',
        uv: 60,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Typesript',
        uv: 50,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'React',
        uv: 70,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Express',
        uv: 50,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Mongo Db ',
        uv: 30,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Python ',
        uv: 30,
        pv: 4300,
        amt: 2100,
    },
];


const Skills = () => {


    return (
        <div id="skills" className="my-12 max-w-xs lg:max-w-5xl mx-auto">
            <h1 className="text-3xl font-semibold text-center mb-10">My Skills</h1>
            <div className='flex justify-center'>
                {/* for pc */}
                <AreaChart
                    width={900}
                    height={300}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                    className='hidden lg:block'
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
                {/* For phone */}
                <AreaChart
                    width={300}
                    height={300}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                    className='lg:hidden block'
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </div>
            <div className='my-8 flex justify-center items-center gap-9 flex-wrap'>
                <div className='flex flex-col items-center '>
                    <FaHtml5 className='text-6xl text-orange-500' />
                    <p>HTML</p>
                </div>
                <div className='flex flex-col items-center'>
                    <FaCss3Alt className='text-6xl text-blue-500' />
                    <p>CSS</p>
                </div>
                <div className='flex flex-col items-center'>
                    <IoLogoJavascript className='text-6xl text-yellow-400' />
                    <p>Javascript</p>
                </div>
                <div className='flex flex-col items-center'>
                    <FaReact className='text-6xl text-[#00FFFF]' />
                    <p>React</p>
                </div>
                <div className='flex flex-col items-center'>
                    <FaNodeJs className='text-6xl text-green-600' />
                    <p>Express</p>
                </div>
                <div className='flex flex-col items-center'>
                    <SiMongodb className='text-6xl text-green-600' />
                    <p>MongoDB</p>
                </div>
                <div className='flex flex-col items-center'>
                    <SiTypescript className='text-6xl text-blue-600' />
                    <p>Type Script</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={pythonLogo} alt="" className='w-16'/>
                    <p>Python</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={mongooseLogo} alt="" className='w-28' />
                    <p>Mongoose</p>
                </div>

            </div>
        </div>
    );
};

export default Skills;