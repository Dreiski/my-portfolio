"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { FaGithub, FaLinkedin, FaEnvelope, FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiTailwindcss, SiPython } from 'react-icons/si';

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col items-center p-8 pt-32 font-sans relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>

      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center z-10 border-b border-neutral-800 pb-24">
        {/* Text Content */}
        <motion.div 
          className="space-y-8 order-2 md:order-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="text-sm font-mono text-neutral-400 mb-4 tracking-wider uppercase">Software Developer</h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-white">
              Andrei Calo
            </h1>
            <p className="text-xl text-neutral-400 leading-relaxed max-w-lg">
              A developer based in the Philippines currently focused on full-stack web applications.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-6 text-neutral-500">
            <p className="font-bold text-2xl text-white">Tech Stack:</p>
            <p>JavaScript, TypeScript, React, Next.js, Node.js, Express, Tailwind CSS, Python</p>
            <SiJavascript className="w-6 h-6 hover:text-yellow-400 transition-colors" title="JavaScript" />
            <SiTypescript className="w-6 h-6 hover:text-blue-400 transition-colors" title="TypeScript" />
            <SiReact className="w-6 h-6 hover:text-cyan-400 transition-colors" title="React" />
            <SiNextdotjs className="w-6 h-6 hover:text-white transition-colors" title="Next.js" />
            <SiNodedotjs className="w-6 h-6 hover:text-green-500 transition-colors" title="Node.js" />
            <SiExpress className="w-6 h-6 hover:text-white transition-colors" title="Express" />
            <SiTailwindcss className="w-6 h-6 hover:text-cyan-300 transition-colors" title="Tailwind CSS" />
            <SiPython className="w-6 h-6 hover:text-yellow-300 transition-colors" title="Python" />
          </div>

          {/* Actions / Socials */}
          <div className="flex items-center gap-6 pt-4">
            <Link href="/projects" className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors">
              View Work
            </Link>
            <div className="flex gap-5 text-neutral-400">
              <a href="https://github.com/Dreiski" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaGithub size={22} /></a>
              <a href="https://www.linkedin.com/in/andreibenedictcalo/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaLinkedin size={22} /></a>
              <a href="mailto:andreicalo101@gmail.com" className="hover:text-white transition-colors"><FaEnvelope size={22} /></a>
            </div>
          </div>
        </motion.div>

        {/* Image */}
        <div className="relative flex justify-center md:justify-end order-1 md:order-2">
          <div className="relative w-64 h-64 md:w-80 md:h-80 group">
            <div className="absolute inset-0 border-2 border-neutral-800 rounded-full transition-transform"></div>
            <Image
              src="/profile.jpg"
              alt=""
              fill
              className="rounded-full object-cover border-4 border-neutral-950 grayscale group-hover:grayscale-0 transition-all duration-500 "
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
              <div className="p-3 bg-neutral-900 rounded-lg border border-neutral-800">
                <FaBriefcase className="text-xl text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Experience</h2>
            </div>
            
            <div className="space-y-10 border-l border-neutral-800 pl-8 ml-4">
              {/* Experience Item 1 */}
              <div className="relative">
                <div className="absolute -left-[38px] top-1.5 w-3 h-3 rounded-full bg-neutral-600 shadow-[0_0_0_4px_#0a0a0a]"></div>
                <span className="text-sm text-neutral-500 font-mono mb-2 block">May - June 2025</span>
                <h3 className="text-xl font-semibold text-white mb-1">Frontend Developer Intern</h3>
                <p className="text-neutral-300 text-sm mb-3">University of the Philippines - Resilience Institute</p>
                <p className="text-neutral-400 leading-relaxed text-sm">
                  Spearheaded in the design and development of a new leaderboard feature for the GINA App for UPRI.
                </p>
              </div>

              {/* Experience Item 2 */}
              <div className="relative">
                <div className="absolute -left-[38px] top-1.5 w-3 h-3 rounded-full bg-neutral-600 shadow-[0_0_0_4px_#0a0a0a]"></div>
                <span className="text-sm text-neutral-500 font-mono mb-2 block">July 2025</span>
                <h3 className="text-xl font-semibold text-white mb-1">Level 3 Certification</h3>
                <p className="text-neutral-300 text-sm mb-3">Test of Practical Competency in IT (TOPCIT)</p>
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
              <div className="p-3 bg-neutral-900 rounded-lg border border-neutral-800">
                <FaGraduationCap className="text-xl text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Education</h2>
            </div>

            <div className="space-y-10 border-l border-neutral-800 pl-8 ml-4">
              {/* Education Item 1 */}
              <div className="relative">
                <div className="absolute -left-[38px] top-1.5 w-3 h-3 rounded-full bg-white shadow-[0_0_0_4px_#0a0a0a]"></div>
                <span className="text-sm text-neutral-500 font-mono mb-2 block">2022 - Present</span>
                <h3 className="text-xl font-semibold text-white mb-1">BS Computer Science</h3>
                <p className="text-neutral-300 text-sm mb-3">University of Philippines - Tacloban College</p>
                <p className="text-neutral-400 leading-relaxed text-sm">
                  Relevant Coursework: Data Structures and Algorithms, Web Development, Database Management, Computer Architecture
                </p>
              </div>
              {/* Education Item 2 */}
              <div className="relative">
                <div className="absolute -left-[38px] top-1.5 w-3 h-3 rounded-full bg-neutral-600 shadow-[0_0_0_4px_#0a0a0a]"></div>
                <span className="text-sm text-neutral-500 font-mono mb-2 block">2020 - 2022</span>
                <h3 className="text-xl font-semibold text-white mb-1">Computer Science Elective</h3>
                <p className="text-neutral-300 text-sm mb-3">Philippine Science High School - Eastern Visayas Campus</p>
              </div>
            </div>
          </motion.div>
        </div>
    </div>
  );
}
