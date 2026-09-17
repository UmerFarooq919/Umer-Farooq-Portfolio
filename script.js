 const projects = [
      {
        id: 1,
        title: "Student Registration Portal",
        badge: "Form App",
        description: "An interactive and validated student data handling form with dynamic inputs, clean error states, and responsive data viewing.",
        tech: ["HTML5", "CSS3", "JavaScript"],
        liveUrl: "https://github.com/umerfarooq0320",
        githubUrl: "https://github.com/umerfarooq0320"
      },
      {
        id: 2,
        title: "FrostByte — Ice Cream Landing Page",
        badge: "React Milestone",
        description: "A pixel-perfect responsive promotional landing page with pop-out 3D product cards, mobile slide menu, and dynamic state integration.",
        tech: ["React", "Tailwind CSS", "JavaScript"],
        liveUrl: "https://github.com/umerfarooq0320",
        githubUrl: "https://github.com/umerfarooq0320"
      },
      {
        id: 3,
        title: "Interactive Card Slider",
        badge: "UI Component",
        description: "Smooth sliding carousel component with dynamic card positioning, responsive breakpoints, and custom navigation controls.",
        tech: ["JavaScript", "CSS3", "HTML5"],
        liveUrl: "https://github.com/umerfarooq0320",
        githubUrl: "https://github.com/umerfarooq0320"
      },
      {
        id: 4,
        title: "DesiByte Web App",
        badge: "Web App",
        description: "Custom web interface built with a modular layout, responsive components, and clean user experience.",
        tech: ["Tailwind CSS", "JavaScript"],
        liveUrl: "https://github.com/umerfarooq0320",
        githubUrl: "https://github.com/umerfarooq0320"
      }
    ];

    const container = document.getElementById("projects-container");
    if (container) {
      container.innerHTML = projects.map(project => `
        <div 
          onclick="window.open('${project.liveUrl}', '_blank')"
          class="group relative bg-[#111827] border border-slate-800 hover:border-blue-500/50 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(59,130,246,0.12)] cursor-pointer"
        >
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-[11px] font-semibold tracking-wide px-3 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
                ${project.badge}
              </span>
              <div class="w-8 h-8 rounded-full bg-slate-800 group-hover:bg-blue-600 text-slate-400 group-hover:text-white flex items-center justify-center transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>

            <h3 class="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
              ${project.title}
            </h3>
            <p class="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
              ${project.description}
            </p>
          </div>

          <div class="pt-4 border-t border-slate-800 flex items-center justify-between flex-wrap gap-3">
            <div class="flex flex-wrap gap-1.5">
              ${project.tech.map(t => `
                <span class="text-[11px] font-mono text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded">
                  ${t}
                </span>
              `).join('')}
            </div>

            <div class="flex items-center gap-3" onclick="event.stopPropagation()">
              <a 
                href="${project.githubUrl}" 
                target="_blank" 
                class="text-xs font-semibold text-slate-400 hover:text-white transition flex items-center gap-1"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>
      `).join('');
    }