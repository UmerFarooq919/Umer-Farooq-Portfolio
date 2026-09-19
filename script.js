const projects = [
  {
    id: 1,
    title: "Job Application Form",
    badge: "Web Form",
    description: "An interactive, validated multi-step application form featuring real-time input validations, responsive design, and clean UI feedback.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://job-application-form-nu-opal.vercel.app/",
    githubUrl: "https://github.com/UmerFarooq919/Job-Application-Form"
  },
  {
    id: 2,
    title: "DesiByte Restaurant Website",
    badge: "Restaurant App",
    description: "A dynamic and fully responsive restaurant website with modular layout components, category navigation, and rich visual appeal.",
    tech: ["Tailwind CSS", "HTML5", "JavaScript"],
    liveUrl: "https://desi-byte-restaurant-website.vercel.app",
    githubUrl: "https://github.com/UmerFarooq919/DesiByte-Restaurant-Website"
  },
  {
    id: 3,
    title: "Qaabil AI Web-Platform",
    badge: "AI Platform",
    description: "An AI web interface deployed on Hugging Face Spaces featuring model integration, modern styling, and responsive user interaction.",
    tech: ["Streamlit", "Python", "API"],
    liveUrl: "https://huggingface.co/spaces/Umer233/QABIL-Platform",
    githubUrl: "https://github.com/UmerFarooq919/Qaabil-AI-Web-Platform"
  },
  {
    id: 4,
    title: "FrostByte — Ice Cream Landing Page",
    badge: "React Milestone",
    description: "A pixel-perfect responsive promotional landing page with pop-out 3D product cards, mobile slide menu, and dynamic state integration.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://frostbyte-ice-cream-page.vercel.app/",
    githubUrl: "https://github.com/UmerFarooq919/Frostbyte-Ice-Cream.Page"
  }
];

function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;

  container.innerHTML = projects.map(project => `
    <div 
      class="group relative bg-[#111827] border border-slate-800 hover:border-blue-500/50 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(59,130,246,0.12)]">
      <div>
        <div class="flex items-center justify-between mb-4">
          <span class="text-[11px] font-semibold tracking-wide px-3 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
            ${project.badge}</span>
          
          <!-- Live Demo Arrow Button -->
          <a href="${project.liveUrl}" target="_blank" rel="noreferrer" title="View Live Page"
            class="w-8 h-8 rounded-full bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg></a>
      </div>
        <h3 class="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">${project.title}</h3>
        <p class="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">${project.description}</p>
      </div>

      <div class="pt-4 border-t border-slate-800 flex items-center justify-between flex-wrap gap-3">
        <div class="flex flex-wrap gap-1.5">${project.tech.map(t => `
        <span class="text-[11px] font-mono text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded">${t}</span>`).join('')}
      </div>

        <!-- Source Code GitHub Button -->
        <div>
          <a href="${project.githubUrl}" target="_blank" rel="noreferrer" title="View Source Code"
          class="text-xs font-semibold text-slate-400 hover:text-white hover:underline transition flex items-center gap-1 cursor-pointer">GitHub ↗</a>
        </div>
       </div>
    </div>
  `).join('');
}

document.addEventListener("DOMContentLoaded", renderProjects);

// --- Mobile Drawer ---
function initMobileMenu() {
  const menuBtn = document.getElementById("menu-btn");
  const closeBtn = document.getElementById("close-btn");
  const drawer = document.getElementById("mobile-drawer");
  const overlay = document.getElementById("drawer-overlay");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  function openMenu() {
    overlay.classList.remove("hidden");
    setTimeout(() => overlay.classList.remove("opacity-0"), 10);
    drawer.classList.remove("translate-x-full");
    document.body.classList.add("overflow-hidden");}

  function closeMenu() {
    drawer.classList.add("translate-x-full");
    overlay.classList.add("opacity-0");
    setTimeout(() => overlay.classList.add("hidden"), 300);
    document.body.classList.remove("overflow-hidden");}

  if (menuBtn) menuBtn.addEventListener("click", openMenu);
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  if (overlay) overlay.addEventListener("click", closeMenu);

  mobileLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  initMobileMenu();
});