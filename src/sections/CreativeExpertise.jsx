import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { photographyImgs, graphicDesignImgs } from "../constants";
import CreativeCounter from "../components/CreativeCounter.jsx";
import GlowCard from "../components/GlowCard.jsx";
import skills from "./Skills.jsx";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const PhotoItem = ({ photo }) => (
    <div className="flex-none flex-center marquee-item">
        <img
            src={photo.imgPath}
            alt={photo.name}
            loading="lazy"
            className="w-36 md:w-256 h-36 md:h-60 object-cover rounded-xl border border-white/10 shadow-lg transition-transform duration-500 hover:scale-110 will-change-transform"
        />
    </div>
);

const CreativeExpertise = () => {
    const photoHeadingRef = useRef();
    const designHeadingRef = useRef();

    useEffect(() => {
        gsap.fromTo(
            photoHeadingRef.current,
            { text: "", opacity: 0 },
            {
                text: "Photography",
                opacity: 1,
                duration: 2.5,
                scrollTrigger: {
                    trigger: photoHeadingRef.current,
                    start: "top 80%",
                },
            }
        );

        gsap.fromTo(
            designHeadingRef.current,
            { text: "", opacity: 0 },
            {
                text: "Graphic Designing",
                opacity: 1,
                duration: 2.5,
                scrollTrigger: {
                    trigger: designHeadingRef.current,
                    start: "top 80%",
                },
            }
        );
    }, []);

    return (
        <section id="creativeExpertise" className="relative text-center">
            {/* Section Title */}
            <h2 className="text-4xl md:text-5xl mt-20 font-bold mb-6 text-white">
                Creative Expertise
            </h2>

            {/* Photography */}
            <p
                ref={photoHeadingRef}
                className="text-2xl md:text-3xl font-mono text-white-50 mb-10 tracking-widest whitespace-nowrap"
            />
            <div className="relative md:my-20 my-10">
                <div className="gradient-edge" />
                <div className="gradient-edge" />
                <div className="marquee h-60">
                    <div className="marquee-box md:gap-12 gap-5">
                        {photographyImgs.map((photo, index) => (
                            <PhotoItem key={index} photo={photo} />
                        ))}
                        {photographyImgs.map((photo, index) => (
                            <PhotoItem key={`dup-${index}`} photo={photo} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Graphic Designing */}
            <p
                ref={designHeadingRef}
                className="text-2xl md:text-3xl font-mono text-white-50 mb-10 tracking-widest whitespace-nowrap"
            />
            <div className="relative md:my-20 my-10">
                <div className="gradient-edge" />
                <div className="gradient-edge" />
                <div className="marquee h-60">
                    <div className="marquee-box-reverse md:gap-12 gap-5">
                        {graphicDesignImgs.map((photo, index) => (
                            <PhotoItem key={index} photo={photo} />
                        ))}
                        {graphicDesignImgs.map((photo, index) => (
                            <PhotoItem key={`dup-${index}`} photo={photo} />
                        ))}
                    </div>
                </div>
            </div>


            {/* 🔷 Four Cards in One Row on Desktop, Vertical Stacks on Mobile */}
            <div className="flex flex-col lg:flex-row items-stretch gap-2 px-2 mr-4 md:mr-4 md:px-4 mt-10 ">


            {/* 🔵 Photography GlowCard */}
                <div className="w-full lg:w-[25%] h-full flex flex-col gap-4">
                    <GlowCard
                        card={{
                            label: "Photography",
                            review: "Capturing stories through a lens where artistry meets precision and emotion.",
                        }}
                        index={0}
                    >
                        <h3 className="text-2xl font-semibold text-white mb-3">Photography</h3>
                        <div className="mb-4">
                            <p className="text-white-50 text-sm">Level</p>
                            <div className="w-full h-2 bg-black-50 rounded-full mt-1 overflow-hidden">
                                <div className="h-full bg-cyan-500 rounded-full" style={{ width: "96%" }} />
                            </div>
                            <div className="text-right text-sm text-white-50 mt-1">96%</div>
                        </div>
                        <div className="mb-4">
                            <p className="text-white-50 text-sm mb-1">Tools Used</p>
                            <div className="flex gap-5 justify-center mt-4 flex-wrap">
                                <img src="/images/lightroom.svg" alt="Lightroom" className="w-8 h-8" />
                                <img src="/images/photoshop.svg" alt="Photoshop" className="w-8 h-8" />
                                <img src="/images/adobe-express.svg" alt="AdobeExpress" className="w-8 h-8" />
                            </div>
                        </div>
                        <div>
                            <p className="text-white-50 text-sm mb-2">Achievements</p>
                            <li className="text-white text-left text-base">
                                Participated in 20+ photography exhibitions.</li>
                            <li className="text-white text-left text-base">Won 5+ photo contests and featured in national exhibits.</li>
                        </div>
                    </GlowCard>
                </div>

                {/* 🔵 Photography Sliders */}
                <div className="w-full lg:w-[25%] h-full flex flex-col gap-4">
                    <div className="grid grid-rows-5 gap-4 h-full">
                        {[
                            { name: "Street Photography", icon: "/images/guidepost.png", level: 96 },
                            { name: "Portraits", icon: "/images/photo.png", level: 93 },
                            { name: "Product Photography", icon: "/images/studio-lighting.png", level: 90 },
                            { name: "Color Grading", icon: "/images/lightroom.svg", level: 94 },
                        ].map((skill, i) => (
                            <div
                                key={i}
                                className="skill-card card-border p-5 w-full rounded-xl relative group transition-transform duration-300 hover:-translate-y-1"
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    <img src={skill.icon} alt={skill.name} className="w-8 h-8 object-contain invert" />
                                    <h3 className="font-semibold text-lg bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                                        {skill.name}
                                    </h3>
                                </div>
                                <div className="w-full h-2 bg-black-50 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-indigo-500 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                        style={{ width: `${skill.level}%` }}
                                    />
                                </div>
                                <div className="text-right mt-1 text-sm text-white-50">{skill.level}%</div>
                            </div>
                        ))}
                    </div>
                </div>


                {/* 🔴 Graphic Design GlowCard */}
                <div className="w-full lg:w-[25%] h-full flex flex-col gap-4">
                    <GlowCard
                        card={{
                            label: "Graphic Design",
                            review: "Merging color theory with pixel perfection to craft meaningful visuals.",
                        }}
                        index={1}
                    >
                        <h3 className="text-2xl font-semibold text-white mb-3">Graphic Designing</h3>
                        <div className="mb-4">
                            <p className="text-white-50 text-sm">Level</p>
                            <div className="w-full h-2 bg-black-50 rounded-full mt-1 overflow-hidden">
                                <div className="h-full bg-cyan-500 rounded-full" style={{ width: "97%" }} />
                            </div>
                            <div className="text-right text-sm text-white-50 mt-1">97%</div>
                        </div>
                        <div className="mb-4">
                            <p className="text-white-50 text-sm mb-1">Tools Used</p>
                            <div className="flex gap-5 justify-center mt-4 flex-wrap">
                                <img src="/images/figma-icon.svg" alt="Figma" className="w-8 h-8" />
                                <img src="/images/canva-icon.svg" alt="Canva" className="w-8 h-8" />
                                <img src="/images/photoshop.svg" alt="Photoshop" className="w-8 h-8" />
                            </div>
                        </div>
                        <div>
                            <p className="text-white-50 text-sm mb-2">Achievement</p>
                            <p className="text-white text-base">Recognized for top UI/UX designs in National as well as International level hackathons.</p>
                        </div>
                    </GlowCard>
                </div>

                {/* 🔴 Graphic Design Sliders */}
                <div className="w-full lg:w-[25%] h-full flex flex-col gap-4">
                    <div className="grid grid-rows-5 gap-4 h-full">
                        {[
                            { name: "Lightroom", icon: "/images/lightroom.svg", level: 90 },
                            { name: "Photoshop", icon: "/images/photoshop.svg", level: 92 },
                            { name: "Canva", icon: "/images/canva-icon.svg", level: 95 },
                            { name: "Figma", icon: "/images/figma-icon.svg", level: 88 },
                        ].map((skill, i) => (
                            <div
                                key={i}
                                className="skill-card card-border p-5 w-full rounded-xl relative group transition-transform duration-300 hover:-translate-y-1"
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    <img src={skill.icon} alt={skill.name} className="w-8 h-8 object-contain invert" />
                                    <h3 className="font-semibold text-lg bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                                        {skill.name}
                                    </h3>
                                </div>
                                <div className="w-full h-2 bg-black-50 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-indigo-500 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                        style={{ width: `${skill.level}%` }}
                                    />
                                </div>
                                <div className="text-right mt-1 text-sm text-white-50">{skill.level}%</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <CreativeCounter/>

            <div className="mt-20 flex justify-center">
                <a
                    href="https://www.instagram.com/shutterlock.io?igsh=Z2xxZThtNWRvYnZk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-56 h-14 bg-gradient-to-br from-[#1f2b6c] via-[#4a3c91] to-[#a91c30] text-white text-lg font-semibold tracking-wide rounded-[2rem] shadow-lg transition-all duration-700 ease-in-out overflow-hidden hover:w-14 hover:h-14 hover:rounded-full hover:shadow-2xl transform hover:scale-105 active:scale-95"
                >
                    {/* Glow Background */}
                    <span className="absolute inset-0 z-0 bg-gradient-to-br from-[#1f2b6c]/40 via-[#4a3c91]/40 to-[#a91c30]/40 blur-md opacity-50 group-hover:opacity-80 transition duration-700"></span>

                    {/* Centered Text */}
                    <span className="relative z-10 flex items-center justify-center w-full h-full transition-all duration-500 ease-in-out group-hover:opacity-0">
      View My Page
    </span>

                    {/* Instagram Icon on Hover */}
                    <img
                        src="/images/insta.png"
                        alt="Instagram"
                        className="absolute z-10 inset-0 m-auto w-6 h-6 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-[360deg] transition-all duration-700 ease-in-out"
                    />
                </a>
            </div>

        </section>
    );
};

export default CreativeExpertise;
