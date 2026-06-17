'use client';

import { useState } from 'react';
import { IconType } from 'react-icons';
import { SiReact, SiNodedotjs, SiExpress, SiTailwindcss, SiTypescript, SiPython, SiNextdotjs, SiJavascript, SiPhp, SiLaravel, SiVercel} from 'react-icons/si';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  year: string;
  images?: string[];
  techStack: IconType[];
  sourceCode?: string;
}

const projects: Project[] = [
  {
    id: '01',
    title: 'Axis Accounting System',
    category: 'Full-Stack Web Development',
    description: 'Axis is a Philippine-focused accounting and tax compliance app for small businesses, self-employed individuals, professionals, and mixed-income earners. It simplifies tax filing and financial management, ensuring compliance with local regulations while providing an intuitive user experience.',
    year: '2026',
    techStack: [SiTypescript, SiReact, SiTailwindcss, SiNodedotjs, SiExpress],
    images: ['/projects/axis-1.png', '/projects/axis-2.png', '/projects/axis-3.png'],
    sourceCode: 'https://axis-accounting-system.vercel.app/',
  },  
  {
    id: '02',
    title: 'Chug-a-lot: Hydration Calculator',
    category: 'Personal Project',
    description: 'This is a hydration calculator that finds out how much water you need to drink daily based on your age, sex, height, weight, activity level, and climate.',
    year: '2026',
    techStack: [SiTypescript, SiTailwindcss, SiReact, SiVercel ],
    images: ['/projects/chug-a-lot-1.png', '/projects/chug-a-lot-2.png'],
    sourceCode: 'https://chugalot.vercel.app/',
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project>(projects[0]);

  return (
    <div className="min-h-screen text-slate-100 flex pt-32 flex-col md:flex-row overflow-hidden font-sans">
      {/* Selection Pane */}
      <aside className="w-full md:w-1/3 lg:w-1/4 border-r border-blue-500/20 flex flex-col bg-blue-900/20 backdrop-blur z-20">
        <div className="p-8 border-b border-blue-500/20">
          <h1 className="text-2xl font-bold tracking-tighter">Projects</h1>
          <p className="text-slate-400 text-sm mt-2">Select a project to view details.</p>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(project)}
              className={`w-full text-left p-6 border-b border-blue-500/20 transition-all duration-300 hover:bg-blue-900/30 group ${
                activeProject.id === project.id ? 'bg-blue-900/30' : ''
              }`}
            >
              <div className="flex justify-between items-baseline mb-1">
                <span className={`text-lg font-medium transition-colors ${
                  activeProject.id === project.id ? 'text-white' : 'text-slate-400 group-hover:text-white'
                }`}>
                  {project.title}
                </span>
                <span className="text-xs text-slate-500 font-mono">{project.id}</span>
              </div>
              <span className="text-xs text-slate-500 uppercase tracking-wider">{project.category}</span>
            </button>
          ))}
        </div>
      </aside>

      {/* Center Display */}
      <main className="flex-1 relative flex items-center justify-center p-8 md:p-16">


        <div className="max-w-3xl w-full z-10">
          <div key={activeProject.id}>
            <div className="flex items-center gap-4 mb-6 text-sm text-slate-500 font-mono">
              <span>{activeProject.year}</span>
              <span className="w-px h-4 bg-blue-500/30"></span>
              <span>{activeProject.category}</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8 leading-tight">
              {activeProject.title}
            </h2>

            <div className="flex gap-4 mb-8">
              <a href={activeProject.sourceCode} className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-400 transition-colors shadow-lg shadow-blue-500/30">
                View Project
              </a>
            </div>
            
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-8">
              {activeProject.description}
            </p>

            <div className="flex gap-4 mb-12">
              {activeProject.techStack.map((Icon, index) => (
                <div key={index} className="p-3 bg-blue-900/30 backdrop-blur rounded-xl border border-blue-500/30 text-slate-400 hover:text-white hover:border-blue-400/50 transition-colors">
                  <Icon size={24} />
                </div>
              ))}
            </div>

            <div className="grid gap-4 mb-12">
              {(() => {
                const imagesToShow = activeProject.images && activeProject.images.length > 0 ? activeProject.images : [null];
                return imagesToShow.map((src, index) => (
                  <div key={index} className="rounded-3xl border border-slate-700/60 bg-slate-950/20 p-4 min-h-[400px] flex flex-col items-center">
                    {src ? (
                      <img
                        src={src}
                        alt={`${activeProject.title} screenshot ${index + 1}`}
                        className="w-full h-full object-cover rounded-[1.5rem]"
                      />
                    ) : (
                      <div className="w-full h-40 rounded-[1.5rem] border-2 border-dashed border-slate-600/70 bg-slate-900/40 flex items-center justify-center">
                        <span className="text-slate-500 text-sm uppercase tracking-widest">Screenshot</span>
                      </div>
                    )}
                    <p className="mt-4 text-slate-500 text-xs text-center">{src ? 'Screenshot' : 'Web app screenshot placeholder'}</p>
                  </div>
                ));
              })()}
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}