import { useEffect } from "react";
import About from "./About";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Aos from "aos";
import 'aos/dist/aos.css';
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
import PrgressBar from "./PrgressBar";


const Home = () => {

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div>
            <Navbar>
                <Banner />
                <About />
                <Skills />
                <PrgressBar />
                <Projects />
                <Footer />
            </Navbar>
        </div>
    );
};

export default Home;