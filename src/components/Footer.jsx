export const Footer = () => {
    return (
        <footer className="z-40 bg-slate-900 flex items-center justify-center relative">
            <div className="mx-auto p-10 ">
                <div className="flex justify-center space-x-10">
                    <a href="https://github.com/Toidicodedao69" target="_blank" className="p-2 bg-white/20 border border-white/10 rounded-full hover:bg-gray-200 transition">
                        <img className="h-10 w-10" src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/github/github-original.svg" alt="github profile"></img>
                    </a>
                    <a href="https://www.linkedin.com/in/nghia-hieu-pham/" target="_blank" className="p-2 bg-white/20 border border-white/10 rounded-full hover:bg-gray-200 transition">
                        <img className="h-10 w-10" src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/linkedin/linkedin-plain.svg" alt="github profile"></img>
                    </a>
                </div>
                <p className="text-gray-300 mt-8">
                    Copyright © Nghia Hieu Pham - All rights reserved
                </p>
            </div>
           
        </footer>
    );
};