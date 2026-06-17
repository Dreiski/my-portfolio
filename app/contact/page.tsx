import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import ContactForm from '../../components/ContactForm';

export default function Contact() {
  return (
    <div className="min-h-screen text-slate-100 flex flex-col items-center justify-center p-8 pt-32 font-sans relative overflow-hidden z-10">


      <div className="max-w-4xl w-full z-10">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold tracking-tighter mb-4 text-white">Let's Connect</h1>
          <p className="text-slate-400">Have a project in mind or just want to say hi?</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Methods */}
          <div className="space-y-4">
            {/* Email Card */}
            <a href="mailto:andreicalo101@gmail.com" className="block p-6 rounded-2xl bg-blue-900/30 backdrop-blur border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/30">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-800/60 backdrop-blur rounded-full text-white group-hover:bg-blue-500 transition-colors duration-300">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg group-hover:text-white transition-colors">Email</h3>
                  <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">andreicalo101@gmail.com</p>
                </div>
              </div>
            </a>

            {/* Socials Grid */}
            <div className="grid grid-cols-2 gap-4">
              <a href="https://www.linkedin.com/in/andreibenedictcalo/" target="_blank" rel="noopener noreferrer" className="p-6 rounded-2xl bg-blue-900/30 backdrop-blur border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <FaLinkedin size={24} className="mb-3 text-slate-400 group-hover:text-blue-300 transition-colors" />
                <span className="font-medium text-slate-300 group-hover:text-white">LinkedIn</span>
              </a>
              <a href="https://github.com/Dreiski" target="_blank" rel="noopener noreferrer" className="p-6 rounded-2xl bg-blue-900/30 backdrop-blur border border-blue-500/30 hover:border-cyan-400/50 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <FaGithub size={24} className="mb-3 text-slate-400 group-hover:text-cyan-300 transition-colors" />
                <span className="font-medium text-slate-300 group-hover:text-white">GitHub</span>
              </a>
            </div>
          </div>

          {/* Form */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
}