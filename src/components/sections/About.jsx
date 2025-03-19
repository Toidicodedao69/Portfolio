import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const frontendSkills = ["React", "TypeScript", "JavaScript", "TailwindCSS", "Bootstrap"];

    const backendSkills = ["C#", ".NET Core API", ".NET Core MVC", "Entity Framework", "Node.js", "LINQ", "PostgreSQL", "MySQL"];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20 transition-all duration-300 ease-in-out">
            <RevealOnScroll>
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        About Me
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-5">
                            I'm very ambitious full-stack developer looking for a role with the opportunity to work with the latest technologies on challenging and diverse projects.
                        </p>
                        <p className="text-gray-300 mb-5">
                            I'm quietly confident, naturally curious, and an avid problem-solver. I'm experienced in modern technologies, object-oriented design, and quality engineering practices.
                        </p>
                        {/* Tech Skills */}
                        
                    </div>

                    <div className="grid grid-cols-1 gap-5 mt-5">
                        <div className="p-8 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Work Experience </h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold">Software Engineer Intern at Silverpond (2024)</h4>
                                </div>
                                <strong>Responsibilites:</strong>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <li>
                                        Designed and developed a large language model (LLM) pipeline to process text and audio streams.
                                    </li>
                                    <li>
                                        Used the company's framework to implement microservice architecture on the LLM pipeline.
                                    </li>
                                    <li>
                                        Used MQTT servers to handle communication between the pipeline's components.
                                    </li>
                                </ul>

                                <strong>Achievements:</strong>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <li>
                                        Integrated the LLM pipeline with a robot dog, making it capable of responding to questions and commands in real time.
                                    </li>
                                </ul>

                            </div>
                        </div>

                        <div className="p-8 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Education </h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong>Bachelors in Information & Communication Technology</strong> - Swinburne University of Technology (2021-2024)
                                </li>
                                <li>
                                    <strong>Relevant Coursework:</strong> Data Struture & Algorithms, Object-oriented Programming, Software Architecture & Design, Artificial Intelligence, Database Management.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Education and Work Experience */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">

                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};