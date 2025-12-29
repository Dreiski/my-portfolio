'use client';

import { useState } from 'react';
import { IconType } from 'react-icons';
import { SiReact, SiNodedotjs, SiExpress, SiTailwindcss, SiTypescript, SiPython, SiNextdotjs, SiJavascript, SiPhp, SiLaravel } from 'react-icons/si';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  year: string;
  techStack: IconType[];
  sourceCode?: string;
}

const projects: Project[] = [
  {
    id: '01',
    title: 'Maroon-Book: Exam Information Management System',
    category: 'Web Development',
    description: 'EIMS that supports exam creation, scheduling, announcements, secure file exchange, result publishing, and audit logging for Admin, Faculty, and Students.',
    year: '2025',
    techStack: [SiTypescript, SiReact, SiNextdotjs],
    sourceCode: 'https://github.com/UPTAC-KomSai-v2/Exam-Information-Management-System/',
  },  
  {
    id: '02',
    title: 'ISKOLMATE: Student Collaboration Platform',
    category: 'Web Development',
    description: 'Student collaboration platform that facilitates coursework completion and peer connections.',
    year: '2024',
    techStack: [SiLaravel, SiJavascript, SiTypescript, SiTailwindcss, SiPhp, ],
    sourceCode: 'https://github.com/UPTAC-KomSai-v2/ISKOLMATE',
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project>(projects[0]);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex pt-32 flex-col md:flex-row overflow-hidden font-sans">
      {/* Selection Pane */}
      <aside className="w-full md:w-1/3 lg:w-1/4 border-r border-neutral-900 flex flex-col bg-neutral-950 z-20">
        <div className="p-8 border-b border-neutral-900">
          <h1 className="text-2xl font-bold tracking-tighter">Projects</h1>
          <p className="text-neutral-500 text-sm mt-2">Select a project to view details.</p>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(project)}
              className={`w-full text-left p-6 border-b border-neutral-900 transition-all duration-300 hover:bg-neutral-900 group ${
                activeProject.id === project.id ? 'bg-neutral-900' : ''
              }`}
            >
              <div className="flex justify-between items-baseline mb-1">
                <span className={`text-lg font-medium transition-colors ${
                  activeProject.id === project.id ? 'text-white' : 'text-neutral-400 group-hover:text-white'
                }`}>
                  {project.title}
                </span>
                <span className="text-xs text-neutral-600 font-mono">{project.id}</span>
              </div>
              <span className="text-xs text-neutral-500 uppercase tracking-wider">{project.category}</span>
            </button>
          ))}
        </div>
      </aside>

      {/* Center Display */}
      <main className="flex-1 relative flex items-center justify-center p-8 md:p-16 bg-neutral-950">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        </div>

        <div className="max-w-3xl w-full z-10">
          <div key={activeProject.id}>
            <div className="flex items-center gap-4 mb-6 text-sm text-neutral-500 font-mono">
              <span>{activeProject.year}</span>
              <span className="w-px h-4 bg-neutral-800"></span>
              <span>{activeProject.category}</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8 leading-tight">
              {activeProject.title}
            </h2>
            
            <p className="text-xl text-neutral-400 leading-relaxed max-w-2xl mb-8">
              {activeProject.description}
            </p>

            <div className="flex gap-4 mb-12">
              {activeProject.techStack.map((Icon, index) => (
                <div key={index} className="p-3 bg-neutral-900 rounded-xl border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors">
                  <Icon size={24} />
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <a href={activeProject.sourceCode} className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors">
                View Project
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}