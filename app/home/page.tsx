"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { FaGithub, FaLinkedin, FaEnvelope, FaBriefcase, FaGraduationCap, FaAward} from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiTailwindcss, SiPython } from 'react-icons/si';
import TextType from "@/components/TextType";

export default function Home() {
  return (
    <div className="min-h-screen text-slate-100 flex flex-col items-center p-8 pt-32 font-sans relative overflow-hidden">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center z-10 border-b border-blue-500/20 pb-24">
        {/* Text Content */}
        <motion.div 
          className="space-y-8 order-2 md:order-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-2 text-white">
              Hi! I am <br></br>
            </h1>
            <TextType 
              text={["Andrei Benedict Calo", "a Full-Stack Developer", "a Creative Problem-Solver"]}
              typingSpeed={75}
              pauseDuration={1500}
              deletingSpeed={40}
              showCursor={true}
              cursorCharacter="|"
              className="text-4xl md:text-6xl font-bold tracking-tighter text-blue-400"
            />
          </div>

          {/* Tech Stack */}
          <div className="space-y-3 text-slate-400">
            <p className="font-bold text-2xl text-white">Tech Stack:</p>
            <p className="max-w-lg">React, Next.js, Node.js, Express, Tailwind CSS, Python</p>
            <div className="flex flex-wrap gap-4 mt-2 items-center">
              <SiJavascript className="w-6 h-6 hover:text-yellow-400 transition-colors" title="JavaScript" />
              <SiTypescript className="w-6 h-6 hover:text-blue-400 transition-colors" title="TypeScript" />
              <SiReact className="w-6 h-6 hover:text-cyan-400 transition-colors" title="React" />
              <SiNextdotjs className="w-6 h-6 hover:text-white transition-colors" title="Next.js" />
              <SiNodedotjs className="w-6 h-6 hover:text-green-500 transition-colors" title="Node.js" />
              <SiExpress className="w-6 h-6 hover:text-white transition-colors" title="Express" />
              <SiTailwindcss className="w-6 h-6 hover:text-cyan-300 transition-colors" title="Tailwind CSS" />
              <SiPython className="w-6 h-6 hover:text-yellow-300 transition-colors" title="Python" />
            </div>
          </div>

          {/* Actions / Socials */}
          <div className="flex items-center gap-6 pt-4">
            <Link href="/projects" className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-400 transition-colors">
              View Work
            </Link>
            <div className="flex gap-5 text-slate-400">
              <a href="https://github.com/Dreiski" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaGithub size={22} /></a>
              <a href="https://www.linkedin.com/in/andreibenedictcalo/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaLinkedin size={22} /></a>
              <a href="mailto:andreicalo101@gmail.com" className="hover:text-white transition-colors"><FaEnvelope size={22} /></a>
            </div>
          </div>
        </motion.div>

        {/* Image */}
        <div className="relative flex justify-center md:justify-end order-1 md:order-2">
          <div className="relative w-64 h-64 md:w-80 md:h-80 group">
            <div className="absolute inset-0 border-2 border-blue-500/30 rounded-full transition-transform"></div>
            <Image
              src="/profile.jpg"
              alt="Profile picture of Andrei Calo"
              fill
              sizes="(max-width: 768px) 256px, 320px"
              loading="eager"
              className="rounded-full object-cover border-4 border-blue-900/50 group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>

      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 z-10 mt-24">
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-900/40 backdrop-blur rounded-lg border border-blue-500/20">
                <FaBriefcase className="text-xl text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Experience</h2>
            </div>
            
            <div className="space-y-10 border-l border-blue-500/20 pl-8 ml-4">
              {/* Experience Item 1 */}
              <div className="relative">
                <div className="absolute -left-[38px] top-1.5 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_0_4px_rgba(15,23,42,0.6)]"></div>
                <span className="text-sm text-slate-400 font-mono mb-2 block">May - June 2025</span>
                <h3 className="text-xl font-semibold text-white mb-1">Frontend Developer Intern</h3>
                <p className="text-slate-300 text-sm mb-3">University of the Philippines - Resilience Institute</p>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Developed the Leaderboard page from custom Figma designs using HTML, CSS, and JavaScript, delivering a responsive and interactive feature now live on the production website
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[38px] top-1.5 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_0_4px_rgba(15,23,42,0.6)]"></div>
                <span className="text-sm text-slate-400 font-mono mb-2 block">2026 - Present</span>
                <h3 className="text-xl font-semibold text-white mb-1">Frontend Developer </h3>
                <p className="text-slate-300 text-sm mb-3">Accounting Tool Web Application (Client Project)</p>
                <p className="text-slate-400 leading-relaxed text-sm mb-2">
                  Designed initial UI/UX layouts using Figma, defining the structure and user flow of the accounting system.
                </p>
                <p className="text-slate-400 leading-relaxed text-sm mb-2">
                  Developed the frontend using React, Vite, and TypeScript, implementing responsive and reusable components.
                </p>
                <p className="text-slate-400 leading-relaxed text-sm mb-2">
                  Deployed the frontend and backend using Vercel and Railway, allowing the client to review and test the initial system UX.
                </p>
              </div>

             
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-900/40 backdrop-blur rounded-lg border border-blue-500/20">
                <FaGraduationCap className="text-xl text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Education</h2>
            </div>

            <div className="space-y-10 border-l border-blue-500/20 pl-8 ml-4">
              {/* Education Item 1 */}
              <div className="relative">
                <div className="absolute -left-[38px] top-1.5 w-3 h-3 rounded-full bg-white shadow-[0_0_0_4px_rgba(15,23,42,0.6)]"></div>
                <span className="text-sm text-slate-400 font-mono mb-2 block">2022 - Present</span>
                <h3 className="text-xl font-semibold text-white mb-1">BS Computer Science</h3>
                <p className="text-slate-300 text-sm mb-3">University of Philippines - Tacloban College</p>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Relevant Coursework: Data Structures and Algorithms, Web Development, Database Management, Computer Architecture
                </p>
              </div>
              {/* Education Item 2 */}
              <div className="relative">
                <div className="absolute -left-[38px] top-1.5 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_0_4px_rgba(15,23,42,0.6)]"></div>
                <span className="text-sm text-slate-400 font-mono mb-2 block">2020 - 2022</span>
                <h3 className="text-xl font-semibold text-white mb-1">Computer Science Elective</h3>
                <p className="text-slate-300 text-sm mb-3">Philippine Science High School - Eastern Visayas Campus</p>
              </div>
            </div>
          </motion.div>

           {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-900/40 backdrop-blur rounded-lg border border-blue-500/20">
                <FaAward className="text-xl text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Achievements</h2>
            </div>

            <div className="space-y-10 border-l border-blue-500/20 pl-8 ml-4">
              {/* Achievement Item 1 */}
              <div className="relative">
                <div className="absolute -left-[38px] top-1.5 w-3 h-3 rounded-full bg-white shadow-[0_0_0_4px_rgba(15,23,42,0.6)]"></div>
                <span className="text-sm text-slate-400 font-mono mb-2 block">2025</span>
                <h3 className="text-xl font-semibold text-white mb-1"> Test of Practical Competency in Information Technology</h3>
                <p className="text-slate-300 text-sm mb-3">Earned Level 3 Certification in the Test of Practical Competency in IT (TOPCIT), demonstrating proficiency in core IT concepts and practical problem-solving skills.</p>
              </div>
              {/* Achievement Item 2 */}
              <div className="relative">
                <div className="absolute -left-[38px] top-1.5 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_0_4px_rgba(15,23,42,0.6)]"></div>
                <span className="text-sm text-slate-400 font-mono mb-2 block">May 2026</span>
                <h3 className="text-xl font-semibold text-white mb-1">Career Service Professional Eligibility Certificate</h3>
                <p className="text-slate-300 text-sm mb-3">Achieved Career Service Professional Eligibility (CSPE) by passing the Career Service Examination – Professional Level in May 2026 with a 91% rating.</p>
              </div>
            </div>
          </motion.div>
        </div>
    </div>
  );
}

