import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import NavBar from "./components/NavBar.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import TechStack from "./sections/TechStack.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import {Cone} from "@react-three/drei";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import AnimatedCounter from "./components/AnimatedCounter.jsx";
import AboutMe from "./sections/AboutMe.jsx";
import Skills from "./sections/Skills.jsx";
import CreativeExpertise from "./sections/CreativeExpertise.jsx";

const App =() => {
    return (
        <>
            <NavBar/>
            <Hero/>
            <AboutMe/>
            <AnimatedCounter/>
            <ShowcaseSection/>
                {/*<FeatureCards/>*/}
            <ExperienceSection/>
            <Skills/>
            <TechStack/>
            <CreativeExpertise/>
            {/*<Testimonials/>*/}
            <Contact/>
            <Footer/>
        </>
    )
}

export default App