import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const projectRefs = useRef([]);

    useEffect(() => {
        projectRefs.current.forEach((card, index) => {
            gsap.fromTo(
                card,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    }
                }
            );
        });

        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1 }
        );
    }, []);

    const buttons = (projectUrl, githubUrl) => (
        <div className="flex gap-4 mt-5">
            <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white transition duration-300 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg hover:scale-105">
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
          Open
        </span>
                <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">View Project</span>
                <span className="relative invisible">View Project</span>
            </a>

            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="group p-3 rounded-full bg-white shadow-md transition duration-500 hover:scale-110 hover:bg-black">
                <img src="/images/github_scs.svg" alt="GitHub" className="w-7 h-7 transition duration-300 group-hover:invert" />
            </a>
        </div>
    );

    return (
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    <div className="first-project-wrapper" ref={(el) => (projectRefs.current[0] = el)}>
                        <div className="image-wrapper">
                            <img src="/images/WRev_4.png" alt="WeRev" />
                        </div>
                        <div className="text-content">
                            <h2>WRev - An AI powered Respiratory Healthcare Monitoring System</h2>
                            <p className="text-white-50 md:text-xl">
                                AI/ML combined with IOT to provide accurate and genuine respiratory healthcare solutions.
                            </p>
                            {buttons("https://w-rev.vercel.app/", "https://github.com/Debsmit16/WRev")}
                        </div>
                    </div>

                    <div className="project-list-wrapper">
                        <div className="project" ref={(el) => (projectRefs.current[1] = el)}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src="/images/ARTHA.png" alt="Financial Assistant" />
                            </div>
                            <h2>ARTHA - Your Personal Financial Assistant</h2>
                            {buttons("https://project-artha.vercel.app/", "https://github.com/Rexosaury/Project_Artha")}
                        </div>

                        <div className="project" ref={(el) => (projectRefs.current[2] = el)}>
                            <div className="image-wrapper bg-[#dce9eb]">
                                <img src="/images/amdportfimg.png" alt="My Portfolio" />
                            </div>
                            <h2>My Portfolio</h2>
                            {buttons("https://amd-portfolio-lemon.vercel.app/", "https://github.com/AmdCOdePuLsE/AMD-Portfolio.git")}
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-20">
                    <a
                        href="https://github.com/AmdCOdePuLsE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center justify-center bg-gradient-to-br from-[#ff1a1a] via-[#800000] to-[#0d0d0d] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] hover:w-16 hover:h-16 hover:rounded-full hover:px-0 hover:py-0 hover:shadow-[0_0_25px_#ff1a1a] overflow-hidden"
                    >
                        <span className="absolute -inset-1 bg-gradient-to-br from-[#ff4c4c] via-[#800000] to-[#1a1a1a] opacity-30 blur-xl z-0 rounded-xl group-hover:rounded-full animate-pulse transition-all duration-700 ease-in-out" />
                        <span className="z-10 transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:scale-0">
              Visit My GitHub
            </span>
                        <img
                            src="/images/github_scs.svg"
                            alt="GitHub"
                            className="w-7 h-7 absolute opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out invert z-10"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ShowcaseSection;
