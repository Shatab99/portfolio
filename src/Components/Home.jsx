import { useEffect, useState } from "react";
import About from "./About";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Aos from "aos";
import 'aos/dist/aos.css';
import Skills from "./Skills";
import Footer from "./Footer";
import PrgressBar from "./PrgressBar";
import Exprerience from "./Exprerience";
import FixedBg from "./FixedBg";
import WelcomeModal from "./WelcomeModal";
import WelcomeLoading from "./WelcomeLoading";
import BackToTop from "./BackToTop";
import Social from "./Social";
import GetMoreInfo from "./GetMoreInfo";
import ShowProjects from "./ShowProjects";


const Home = () => {
    const [top, setTop] = useState(false)
    const [showTop , setShowTop]= useState(false)
    const [showSocial, setShowSocial] = useState(false)
    const [showMoreInfo , setShowMoreInfo]= useState(false)
    const [left, setLeft]= useState(true)
    
    // setTimeout=>


    useEffect(() => {
        Aos.init();
        const handleScroll = ()=>{
            if(window.scrollY > 700 ){
                setShowTop(true)
                setShowSocial(true)
            }
            else{
                setShowTop(false)
                setShowSocial(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return ()=>{
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    return (
        <div>
            <Navbar setLeft={setLeft}>
                <WelcomeLoading setTop={setTop} top={top}/>
                <ShowProjects left ={left} setLeft={setLeft}/>
                <WelcomeModal setShowMoreInfo={setShowMoreInfo} top={top}/>
                <GetMoreInfo showMoreInfo={showMoreInfo}/>
                <Banner />
                <About />
                <Exprerience />
                <Skills />
                <PrgressBar />
                <Footer />
                <FixedBg />
                {showTop && <BackToTop/>}
                {showSocial && <Social/>}
            </Navbar>
        </div>
    );
};

export default Home;