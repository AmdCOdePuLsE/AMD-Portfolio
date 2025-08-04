import React, { useRef } from 'react';
 import { gsap } from 'gsap';
 import { ScrollTrigger } from 'gsap/ScrollTrigger';
 import { useGSAP } from '@gsap/react';
import TitleHeader from "../components/TitleHeader.jsx";

const AboutMe = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);

    useGSAP(() => {
        const imgAnim = gsap.fromTo(
            imageRef.current,
            { x: -100, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    once: true,
                },
            }
        );

        const textAnim = gsap.fromTo(
            textRef.current,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    once: true,
                },
            }
        );

        return () => {
            imgAnim.kill();
            textAnim.kill();
        };
    }, []);

    return (
        <section
            id="aboutMe"
            ref={sectionRef}
            className="py-20 md:py-28 flex justify-center items-center bg-black text-white will-change-transform"
        >
            <div className="max-w-6xl w-full px-4 md:px-10">
                <TitleHeader title="About Me" sub="Who Am I ?" />
                <div className="flex flex-col md:flex-row gap-12 md:gap-20 mt-16 items-stretch">
                    <div
                        ref={imageRef}
                        className="flex-1 flex flex-col justify-start items-center md:items-start md:-mt-16"
                    >
                        <div className="w-full max-w-lg md:max-w-xl rounded-xl overflow-hidden">
                            <img
                                src="/images/amdport.png"
                                alt="WeRev"
                                loading="lazy"
                                className="w-full h-auto object-cover will-change-transform"
                            />
                        </div>
                    </div>

                    <div ref={textRef} className="flex-1 flex flex-col justify-between">
                        <div className="space-y-6 text-sm md:text-base leading-relaxed text-muted-foreground">
                            <h3 className="text-3xl font-semibold leading-tight text-white">
                                Passionate Web Developer & Tech Creator
                            </h3>
                            <p>
                                I'm a passionate Web Developer based in Kolkata with over 5 years of experience crafting responsive, accessible,
                                and high-performance web applications using modern technologies. My journey in tech has been driven
                                by a deep curiosity and an unrelenting desire to solve real-world problems with innovative solutions.

                            </p>
                            <p>
                                Currently pursuing B.Tech in Computer Science and Engineering with specialization
                                in Artificial Intelligence and Machine Learning with an equal fascination about the future of intelligent
                                systems and how AI can be leveraged to make life easier and smarter.

                            </p>
                            <p>
                                My expertise extends beyond the browser—I’m also a creative technologist and visual thinker.
                                Photography is my second language, allowing me to frame life with the same attention to detail
                                and composition I apply to design systems and component hierarchies.

                            </p>
                        </div>

                        {/* Buttons (unchanged but GPU-hinted) */}
                        <div className="mt-10 flex flex-col md:hidden lg:flex lg:flex-row gap-5 w-full max-w-md will-change-transform">
                            {/* === Download CV Button === */}
                            <a
                                href="https://drive.google.com/drive/folders/1vuYJBqXOCdbHpdc-J_HcRJ8IuS5VQM3A"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta-button group w-full relative overflow-hidden transition-all duration-500"
                            >
                                <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#5c0a0a] to-[#0a1e5c] group-hover:from-black group-hover:to-cyan-400 transition-all duration-500" />
                                <div className="bg-circle !bg-cyan-200 opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-500" />

                                {/* Text fades on hover (desktop only) */}
                                <p className="text relative z-10 text-white flex items-center justify-center gap-2 transition-opacity duration-500 group-hover:opacity-0 md:group-hover:opacity-0">
                                    <span className="flex items-center gap-3 w-5 h-5 md:hidden" ><img src="/images/resume1.png" alt="Resume" /> Resume</span>
                                    <span className="hidden md:inline">Download My CV</span>
                                </p>

                                <div className="arrow-wrapper z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <img src="/images/arrow-down.svg" alt="arrow" />
                                </div>
                            </a>

                            {/* === LinkedIn Button === */}
                            <a
                                href="https://www.linkedin.com/in/ayushman-das-ba6272320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta-button group w-full relative overflow-hidden transition-all duration-500"
                            >
                                <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0077B5] to-[#6a0dad] group-hover:from-black group-hover:to-cyan-400 transition-all duration-500" />
                                <div className="bg-circle !bg-cyan-200 opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-500" />

                                {/* Text fades on hover (desktop only) */}
                                <p className="text relative z-10 text-white flex items-center justify-center gap-2 transition-opacity duration-500 group-hover:opacity-0 md:group-hover:opacity-0">
                                    <span className="flex items-center gap-3 w-5 h-5 md:hidden" ><img src="/images/linkedin.png" alt="Resume" /> LinkedIn</span>
                                    <span className="hidden md:inline">My LinkedIn</span>
                                </p>

                                <div className="arrow-wrapper z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <img src="/images/arrow-right.svg" alt="arrow" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
