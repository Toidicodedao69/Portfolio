import { useEffect, useState } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    // Tracks and highlight navbar link of the currently active section
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "projects", "contact"];
            const scrollPosition = window.scrollY;

            for (let section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
                        setActiveSection(section);
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-white">
                        Hieu Pham <span className="text-blue-500">Portfolio</span>
                    </a>

                    {/* Hamburger menu for smaller screen */}
                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                        &#9776;
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {["home", "about", "projects", "contact"].map((section) => (
                            <a
                                key={section}
                                href={`#${section}`}
                                className={`px-3 py-2 rounded-md transition-colors ${
                                    activeSection === section ? "bg-gray-700 text-white" : "text-gray-300 hover:text-white"
                                }`}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </a>
                        ))}
                        {/* <a href="#home" className="text-gray-300 hover:text-white transition-colors"> Home </a>
                        <a href="#about" className="text-gray-300 hover:text-white transition-colors"> About </a>
                        <a href="#projects" className="text-gray-300 hover:text-white transition-colors"> Projects </a>
                        <a href="#contact" className="text-gray-300 hover:text-white transition-colors"> Contact </a> */}
                    </div>

                </div>
            </div>
        </nav>
    );
}