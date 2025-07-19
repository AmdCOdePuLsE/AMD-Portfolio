import { socialImgs } from "../constants";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col md:items-start justify-center items-center">
                    <a
                        href="/"
                        className="text-white-50 hover:text-cyan-400 transition-colors duration-300"
                    >
                        Visit my blog
                    </a>
                </div>

                <div className="socials flex gap-4 mt-4 md:mt-0">
                    {socialImgs.map((img) => (
                        <a
                            className="icon transition-transform duration-300 hover:scale-110"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={img.url}
                            key={img.url}
                        >
                            <img src={img.imgPath} alt="social icon" loading="lazy" />
                        </a>
                    ))}
                </div>

                <div className="flex flex-col justify-center mt-4 md:mt-0">
                    <p className="text-center md:text-end text-white-50">
                        © {new Date().getFullYear()} Ayushman | AMD. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
