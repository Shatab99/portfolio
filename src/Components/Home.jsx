import { useEffect, useState } from "react";
import About from "./About";
import Banner from "./Banner";
import Navbar from "./Navbar";
import CvModal from "./CvModal";
import Aos from "aos";
import 'aos/dist/aos.css';
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";


const Home = () => {
    const [navScroll, setNavScroll] = useState(true);

    const handlewindowScroll = () => {
        console.log('h:',window.scrollY)
        if (window.scrollY === 890) {
            if(navScroll){
                document.getElementById('my_modal_3').showModal()
                setNavScroll(false)
            }
        }
        else {
            setNavScroll(false)
        }
    }

    useEffect( ()=>{
        Aos.init();
    },[])

    window.addEventListener('scroll', handlewindowScroll)
    return (
        <div>
            <Navbar>
                <Banner />
                <About />
                <CvModal/>
                <Skills/>
                <Projects/>
                <Footer/>   
            </Navbar>
        </div>
    );
};

export default Home;