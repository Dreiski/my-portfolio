import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import ContactForm from '../../components/ContactForm';

export default function Contact() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col items-center justify-center p-8 pt-32 font-sans relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>

      <div className="max-w-4xl w-full z-10">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold tracking-tighter mb-4 text-white">Let's Connect</h1>
          <p className="text-neutral-400">Have a project in mind or just want to say hi?</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Methods */}
          <div className="space-y-4">
            {/* Email Card */}
            <a href="mailto:andreicalo101@gmail.com" className="block p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-600 transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl hover:shadow-neutral-900/50">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-neutral-800 rounded-full text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg group-hover:text-white transition-colors">Email</h3>
                  <p className="text-neutral-500 text-sm group-hover:text-neutral-300 transition-colors">andreicalo101@gmail.com</p>
                </div>
              </div>
            </a>

            {/* Socials Grid */}
            <div className="grid grid-cols-2 gap-4">
              <a href="https://www.linkedin.com/in/andreibenedictcalo/" target="_blank" rel="noopener noreferrer" className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-blue-500/50 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <FaLinkedin size={24} className="mb-3 text-neutral-400 group-hover:text-blue-400 transition-colors" />
                <span className="font-medium text-neutral-300 group-hover:text-white">LinkedIn</span>
              </a>
              <a href="https://github.com/Dreiski" target="_blank" rel="noopener noreferrer" className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-purple-500/50 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <FaGithub size={24} className="mb-3 text-neutral-400 group-hover:text-purple-400 transition-colors" />
                <span className="font-medium text-neutral-300 group-hover:text-white">GitHub</span>
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