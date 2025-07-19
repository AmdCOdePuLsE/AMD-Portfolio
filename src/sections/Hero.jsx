import {words} from "../constants/index.js";
import Button from "../components/Button.jsx";
import HeroExperience from "../components/HeroModels/HeroExperience.jsx";
import { useGSAP} from '@gsap/react';
import gsap from 'gsap';
import AnimatedCounter from "../components/AnimatedCounter.jsx";

const Hero = () => {
    useGSAP(()=>{
        gsap.fromTo('.hero-text h1',
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: 'power2.inOut'
            })
    })
    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                {/* BACKGROUND IMAGE */}
                <img src="/images/bg.png" alt="background"/>
            </div>

            <div className="hero-layout">
                {/*LEFT: HERO CONTENT */}
                <header className="flex flex-col justify-center md:w-full w-screen
                md:px-20 px-5">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1 className="flex">Hi!
                                <div className="relative ml-3 md:ml-5 mx-2 h-[60px] md:h-[100px] flex items-center
                                 align-baseline -top-[17px] md:-top-[23px] -mb-1 md:-mb-2"><img className="h-full w-full object-fill" src="/images/amdnewlogooo.png" alt="amd_logo"/>
                                </div><span>here</span></h1>
                            <h1>
                                Shaping
                                <span className="slide">
                                    <span className="wrapper">
                                        {words.map((word) => (
                                            <span key={word.text} className="flex items-center
                                            md:gap-3 gap-1 pb-2">
                                                <img
                                                    src={word.imgPath}
                                                    alt={word.text}
                                                    className="xl:size-12 md:size-10 size-7 md:p-2 p-1
                                                    rounded-full bg-white-50"
                                                />

                                                <span>{word.text}</span>

                                            </span>
                                        ))}

                                    </span>
                                </span>
                            </h1>
                            <h1>into Real Projects</h1>
                            <h1>that Deliver Results</h1>
                        </div>
                        <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                            I'm Ayushman, a developer based in Kolkata with a passion for coding
                            and turning concepts into reality.
                        </p>
                        <Button
                        className="md:w-80 md:h-16 w-60 h-12"
                        id="button"
                        text="See my Work"
                        />
                    </div>

                </header>

                {/*RIGHT:3D MODEL */ }
                <figure>
                    <div className="hero-3d-layout">
                        <HeroExperience/>

                    </div>
                </figure>
            </div>
            {/*<AnimatedCounter/>*/}
        </section>
    )
}
export default Hero
