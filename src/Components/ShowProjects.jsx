import Projects from "./Projects";
import bgImg from "../assets/images/fixed-bg.png"


const ShowProjects = ({ left, setLeft }) => {
    return (
        <div style={{backgroundImage : `url(${bgImg})`, backgroundSize: 'cover'}}  className={`
        min-h-screen transition-all duration-1000 z-50 ease-in flex items-center justify-center bg-yellow-100 fixed 
        ${left ? 'left-[-2900px] w-full ' : 'left-0 w-full overflow-y-auto '}
        `}>
            <Projects setLeft={setLeft} />
        </div>
    );
};

export default ShowProjects;