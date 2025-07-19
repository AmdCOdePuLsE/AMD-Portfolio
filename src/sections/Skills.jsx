import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader.jsx";

gsap.registerPlugin(ScrollTrigger);

const skills = [
    { name: "HTML/CSS", level: 98, category: "frontend", icon: "/images/skills/htmx.svg" },
    { name: "JavaScript", level: 95, category: "frontend", icon: "/images/skills/javascript.svg" },
    { name: "React", level: 96, category: "frontend", icon: "/images/skills/react.svg" },
    { name: "TypeScript", level: 85, category: "frontend", icon: "/images/skills/typescript.svg" },
    { name: "Tailwind CSS", level: 94, category: "frontend", icon: "/images/skills/tailwindcss.svg" },
    { name: "Next.js", level: 80, category: "frontend", icon: "/images/skills/nextdotjs.svg" },
    { name: "Node.js", level: 93, category: "backend", icon: "/images/skills/nodedotjs.svg" },
    { name: "Express", level: 75, category: "backend", icon: "/images/skills/express.svg" },
    { name: "MongoDB", level: 90, category: "backend", icon: "/images/skills/mongodb.svg" },
    { name: "PostgreSQL", level: 65, category: "backend", icon: "/images/skills/postgresql.svg" },
    { name: "GraphQL", level: 60, category: "backend", icon: "/images/skills/graphql.svg" },
    { name: "Git/GitHub", level: 91, category: "tools", icon: "/images/skills/github.svg" },
    { name: "Docker", level: 70, category: "tools", icon: "/images/skills/docker.svg" },
    { name: "Figma", level: 99, category: "tools", icon: "/images/skills/figma.svg" },
    { name: "TensorFlow", level: 90, category: "AI & ML", icon: "/images/skills/tensorflow.svg" },
    { name: "PyTorch", level: 91, category: "AI & ML", icon: "/images/skills/pytorch.svg" },
    { name: "NLP", level: 94, category: "AI & ML", icon: "/images/skills/noun-nlp-7771897.svg" },
    { name: "Neural Networks", level: 93, category: "AI & ML", icon: "/images/skills/noun-neural-network-911654.svg" },
    { name: "APIs", level: 94, category: "tools", icon: "/images/skills/rapid.svg" },
    { name: "Django", level: 94, category: "backend", icon: "/images/skills/django.svg" },
];

const categories = ["all", "frontend", "backend","AI & ML", "tools"];

const Skills = () => {
    const sectionRef = useRef(null);
    const [openCategory, setOpenCategory] = useState("all");

    useGSAP(() => {
        gsap.fromTo(
            sectionRef.current.querySelectorAll(".skill-card"),
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                },
            }
        );
    }, []);

    return (
        <section id="skills" ref={sectionRef} className="section-padding bg-black text-white">
            <div className="max-w-6xl mx-auto px-4">
                <TitleHeader
                    sub="The Skills I Bring to the Table"
                />
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                    My <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
                </h2>

                {/* Desktop Filter Tabs */}
                <div className="hidden md:flex justify-center gap-6 mb-10">
                    {categories.map((cat, i) => (
                        <button
                            key={i}
                            onClick={() => setOpenCategory(cat)}
                            className={`px-5 py-2 rounded-full capitalize border text-sm transition-all duration-300 ${
                                openCategory === cat
                                    ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white border-none"
                                    : "bg-black-200 text-white-50 border-cyan-400 hover:border-purple-500"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Mobile Accordion Toggle */}
                <div className="md:hidden space-y-3 mb-8">
                    {categories.map((cat, i) => (
                        <div key={i} className="border border-gray-700 rounded-lg">
                            <button
                                onClick={() => setOpenCategory(openCategory === cat ? "" : cat)}
                                className="w-full text-left px-5 py-3 bg-black-100 text-white-50 flex justify-between items-center"
                            >
                                <span className="capitalize">{cat}</span>
                                <span>{openCategory === cat ? "−" : "+"}</span>
                            </button>
                            {openCategory === cat && (
                                <div className="p-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    {skills
                                        .filter((s) => cat === "all" || s.category === cat)
                                        .map((skill, i) => (
                                            <SkillCard skill={skill} key={i} />
                                        ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Grid Skills View for Desktop */}
                <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills
                        .filter((s) => openCategory === "all" || s.category === openCategory)
                        .map((skill, i) => (
                            <SkillCard skill={skill} key={i} />
                        ))}
                </div>
            </div>
        </section>
    );
};

const SkillCard = ({ skill }) => (
    <div
        className="skill-card card-border p-5 rounded-xl relative group transition-transform duration-300 hover:-translate-y-1"
        title={`${skill.name} - ${skill.level}%`}
    >
        <div className="flex items-center gap-4 mb-3">
            <img
                src={skill.icon}
                alt={skill.name}
                className="w-8 h-8 object-contain invert" // <-- makes icon white
            />
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
);

export default Skills;
