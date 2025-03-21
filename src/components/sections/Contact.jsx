import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from 'emailjs-com';

export const Contact = () => {
    const [formData, setFormData] = useState({
        subject: "",
        email: "",
        message: "",
    });

    const HandleSubmit = (e) => {
        // prevent reload on submit
        e.preventDefault()

        emailjs
            .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
            .then((result) => {
                alert("Message Sent!");
                setFormData({ subject: "", email: "", message: "" })
            })
            .catch(() => alert("Oops! Something went wrong. Please try again."))
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="px-4 mx-auto w-xl">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Get In Touch
                    </h2>
                    <form className="space-y-6" onSubmit={HandleSubmit}>
                        <div className="relative mx-25 md:mx-auto">
                            <input type="text" id="subject" name="subject" required value={formData.subject} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" placeholder="Subject" onChange={(e) => setFormData({ ...formData, subject: e.target.value })} />
                        </div>
                        <div className="relative mx-25 md:mx-auto">
                            <input type="email" id="email" name="email" required value={formData.email} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" placeholder="youremail@gmail.com" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                        </div>
                        <div className="relative mx-25 md:mx-auto">
                            <textarea id="message" name="message" required value={formData.message} rows={5} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" placeholder="Enter Your Messages" onChange={(e) => setFormData({ ...formData, message: e.target.value })}>
                            </textarea>
                        </div>
                        
                        <div className="mx-25 md:mx-auto">
                            <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,140,246,0.5)]">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

            </RevealOnScroll>
        </section>
    );
};