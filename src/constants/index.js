const navLinks = [
    {
        name: "About Me",
        link: "#aboutMe",
    },
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    {
        name: "Creativity",
        link: "#creativeExpertise",

    },
];

const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

const photographyImgs = [
    { imgPath: "/images/photo1.png", name: "Photo 1" },
    { imgPath: "/images/photo2.jpg", name: "Photo 2" },
    { imgPath: "/images/photo3.png", name: "Photo 3" },
    { imgPath: "/images/photo4.png", name: "Photo 4" },
    { imgPath: "/images/photo5.png", name: "Photo 5" },
    { imgPath: "/images/photo6.jpg", name: "Photo 6" },
    { imgPath: "/images/photo7.png", name: "Photo 7" },
    { imgPath: "/images/photo8.jpg", name: "Photo 8" },
];

const graphicDesignImgs = [
    { name: "Poster1", imgPath: "/images/graphic1.png" },
    { name: "Poster2", imgPath: "/images/graphic2.png" },
    { name: "Poster3", imgPath: "/images/graphic3.png" },
    { name: "Poster4", imgPath: "/images/graphic4.png" },
    { name: "Poster4", imgPath: "/images/graphic5.png" },
    { name: "Poster4", imgPath: "/images/graphic6.png" },
    { name: "Poster4", imgPath: "/images/graphic7.png" },
    // Add more if needed
];

const counterItems = [
    { value: 5, suffix: "+", label: "Years of Experience" },
    { value: 50, suffix: "+", label: "Satisfied Clients" },
    { value: 20, suffix: "+", label: "Completed Projects" },
    { value: 30, suffix: "+", label: "Hackathons Participated" },
];

const counterCreativeItems = [
    { value: 8, suffix: "+", label: "Years of Experience" },
    { value: 500, suffix: "+", label: "Photographs clicked" },
    { value: 100, suffix: "+", label: "Graphics designed" },
    { value: 80, suffix: "+", label: "Brand Photoshoots" },
    { value: 93, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-1.png",
    },
    {
        imgPath: "/images/logos/company-logo-2.png",
    },
    {
        imgPath: "/images/logos/company-logo-3.png",
    },
    {
        imgPath: "/images/logos/company-logo-4.png",
    },
    {
        imgPath: "/images/logos/company-logo-5.png",
    },
    {
        imgPath: "/images/logos/company-logo-6.png",
    },
    {
        imgPath: "/images/logos/company-logo-7.png",
    },
    {
        imgPath: "/images/logos/company-logo-8.png",
    },
    {
        imgPath: "/images/logos/company-logo-9.png",
    },
    {
        imgPath: "/images/logos/company-logo-10.png",
    },
    {
        imgPath: "/images/logos/company-logo-11.png",
    },
];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Quality Focus",
        desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Reliable Communication",
        desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
        imgPath: "/images/time.png",
        title: "On-Time Delivery",
        desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
];

const techStackImgs = [
    {
        name: "React Developer",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "Python Developer",
        imgPath: "/images/logos/python.svg",
    },
    {
        name: "Backend Developer",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "Interactive Developer",
        imgPath: "/images/logos/three.png",
    },
    {
        name: "Project Manager",
        imgPath: "/images/logos/git.svg",
    },
];

const techStackIcons = [
    {
        name: "React Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Python Developer",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend Developer",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Interactive Developer",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review: "Pursuing Bachelor of Technology in Computer Science & Engineering with specialization in Artificial Intelligence and Machine Learning. Actively exploring cutting-edge technologies such as Web Development, App Development, AI/ML, Blockchain, etc. to build innovative, future-ready solutions.",
        imgPath: "/images/exp1.png",
        logoPath: "/images/education.png",
        title: "B.Tech in Computer Science & Engineering(AI & ML)",
        label: "Education",
        date: "2024 - Present",
        responsibilities: [
            "Software Engineering & System Design",
            "Specialized coursework in Artificial Intelligence and Machine Learning",
            "Active member of the Photography Club of Techno International New Town",
            "Participating in numerous hackathons and coding Competitions"
        ],
    },
    {
        review: "Empowering individuals and businesses with holistic creative services, including visual storytelling, digital branding, web solutions, and strategic marketing.",
        imgPath: "/images/exp2.png",
        logoPath: "/images/photography.png",
        title: "Creative Professional",
        label: "Freelancing",
        date: "2023 - Present",
        responsibilities: [
            "Created over 50+ visual content for brands and social media influencers",
            "Participated in 20+ global photography competitions",
            "Designed 200+ graphics for different brands and companies",
            "Specialized in potraits, street photography, event photography and documentries",
            "Worked with 50+ brands for their product photoshoots",
        ],
    },
    {
        review: "Driving innovation through open-source contributions and the development of impactful, real-world solutions using the emerging technologies.",
        imgPath: "/images/exp3.png",
        logoPath: "/images/developer.png",
        title: "Developer & Open Source Contributor",
        label: "Development | Contribution",
        date: "2023 - Present",
        responsibilities: [
            "Created 20+ innovative projects to solve real-world problems",
            "Participated in 20+ hackathons with innovative projects",
            "Visited IIT Kharagpur and NIT Durgapur to exhibit cutting-edge, self-developed projects",
            "Built WeRev - An AI powered respiratory healthcare solution",
            "Contributed in the development of ARTHA - An AI based personal financial advisor ",
            "Contributed to 15+ open source projects"
        ],
    },
    {
        review: "Currently working as a Graphic Design Intern at Tending to Infinity, where I am responsible for creating a wide range of visual content including posters, thumbnails, and promotional assets. My role also involves video editing for digital campaigns and social media, ensuring brand consistency and visual appeal. Through this internship, I am gaining hands-on experience in real-world design projects, sharpening my creative skills, and learning to adapt designs to meet various marketing objectives.",
        imgPath: "/images/exp2.png",
        logoPath: "/images/internship.png",
        title: "Internship at Tending To Infinity",
        label: "Work",
        date: "2025 - Present",
        responsibilities: [
            "Collaborated closely with the content and marketing teams to translate concepts into engaging visuals tailored for various platforms.",
            "Gained practical experience using industry-standard tools like Adobe Illustrator, Photoshop, and Premiere Pro for design and editing workflows.",
            "Adapted branding guidelines to maintain visual consistency across static and motion graphics for online promotions.",
            "Learned to manage multiple design tasks simultaneously while meeting tight deadlines in a dynamic, creative environment.",
        ],
    },
    {
        review: "Actively pursuing professional certifications while consistently enhancing my skill set, and earning recognition for excellence in the fields of Artificial Intelligence and Machine Learning.",
        imgPath: "/images/exp2.png",
        logoPath: "/images/achievements.png",
        title: "Certifications & Achievements",
        label: "Achievements",
        date: "2024 - Present",
        responsibilities: [
            "Certification in Machine Learning",
            "Certified JAVA Developer",
            "Microsoft Azure AI Engineer Associate certification achieved",
        ],
    },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];

const testimonials = [
    {
        name: "Esther Howard",
        mentions: "@estherhoward",
        review:
            "I can’t say enough good things about Ayushman. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
        imgPath: "/images/client1.png",
    },
    {
        name: "Wade Warren",
        mentions: "@wadewarren",
        review:
            "Working with Ayushman was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
        imgPath: "/images/client3.png",
    },
    {
        name: "Guy Hawkins",
        mentions: "@guyhawkins",
        review:
            "Collaborating with Ayushman was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Ayushman's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, He is the ideal partner.",
        imgPath: "/images/client2.png",
    },
    {
        name: "Marvin McKinney",
        mentions: "@marvinmckinney",
        review:
            "Ayushman was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
        imgPath: "/images/client5.png",
    },
    {
        name: "Floyd Miles",
        mentions: "@floydmiles",
        review:
            "Ayushman’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
        imgPath: "/images/client4.png",
    },
    {
        name: "Albert Flores",
        mentions: "@albertflores",
        review:
            "Ayushman was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
        imgPath: "/images/client6.png",
    },
];

const socialImgs = [
    {
        name: "insta",
        url: "https://www.instagram.com/_ayushman04._?igsh=MTBzY3QwenpoZ2hk ",
        imgPath: "/images/insta.png",
    },
    {
        name: "fb",
        imgPath: "/images/fb.png",
    },
    {
        name: "x",
        url: "https://x.com/DasAyushman2109?t=yyd6urJT8cA8ST8vIQOF2g&s=09",
        imgPath: "/images/x.png",
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/in/ayushman-das-ba6272320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        imgPath: "/images/linkedin.png",
    },
    {
        name: "github",
        url: "https://github.com/AmdCOdePuLsE",
        imgPath: "/images/github-35.png",
    },
    {
        name: "gmail",
        url: "https://mail.google.com/mail/?view=cm&fs=1&to=ayushmandascjc@gmail.com",
        imgPath: "/images/gmail-logo-35.png",
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
    photographyImgs,
    graphicDesignImgs,
    counterCreativeItems
};