import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        My Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2"> Sport World</h3>
                            <p className="text-gray-400 mb-4">
                                An online sport store developed with ASP.NET Core framework. This web application includes all neccessary ecommerce features from ordering, checking-out, and payment to managing and tracking orders.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["ASP.NET Core", "MVC", "EF Core", "MS SQL", "Azure", "GitHub Actions"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://sportworld.azurewebsites.net/" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    View Demo →
                                </a>
                                <a href="https://github.com/Toidicodedao69/sportWorld" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    View Project →
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2"> Responsive Portfolio</h3>
                            <p className="text-gray-400 mb-4">
                                My portfolio website, which you are seeing here 😄. It is responsive for both desktop and mobile screens.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Vite", "JavaScript", "TailwindCSS", "Vercel"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://github.com/Toidicodedao69/Portfolio" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    View Project →
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2"> Restaurant Information System</h3>
                            <p className="text-gray-400 mb-4">
                                This web-based information system aims to assist the scaling operations of an expanding restaurant called Koala. The web application supports dine-in & delivery ordering, online checkout, and admin dashboard for the restaurant to manage orders and reservations.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["ASP.NET Core", "Minimal API", "EF Core","React", "TailwindCSS", "MS SQL"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://github.com/Toidicodedao69/KoalaRIS" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    View Project →
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2"> Aged Care Management System</h3>
                            <p className="text-gray-400 mb-4">
                                This web application aims to provide aged care clinics with a comprehensive management system, helping them streamline their services.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Python", "Django", "TypeScript", "VueJS", "Bootsrap", "MySQL"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://github.com/Toidicodedao69/Aged-Care-Management-System" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    View Project →
                                </a>
                            </div>
                        </div>


                    </div>
                </div>
            </RevealOnScroll> 
        </section>
    );
};