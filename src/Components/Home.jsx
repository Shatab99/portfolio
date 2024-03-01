import { useEffect, useState } from "react";
import About from "./About";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Aos from "aos";
import 'aos/dist/aos.css';
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
import PrgressBar from "./PrgressBar";
import Exprerience from "./Exprerience";
import FixedBg from "./FixedBg";
import WelcomeModal from "./WelcomeModal";
import WelcomeLoading from "./WelcomeLoading";


const Home = () => {
    const [top, setTop] = useState(false)

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div>
            <Navbar>
                <WelcomeLoading setTop={setTop} top={top}/>
                <WelcomeModal top={top}/>
                <Banner />
                <About />
                <Exprerience />
                <Skills />
                <PrgressBar />
                <Projects />
                <Footer />
                <FixedBg />
            </Navbar>
        </div>
    );
};

export default Home;