// src/App.jsx
import React, { useState } from "react";
import profile from "./assets/profile.jpg"; // put your photo at src/assets/profile.jpg

// --- Edit these config values ---
const NAME = "Anjan Saklani";
const TITLE = "Aspiring Software Engineer • AI & Automation Enthusiast";
const EMAIL = "akarshsajlan855@gmail.com";
const PHONE = "7009240899";
const LINKEDIN = "https://www.linkedin.com/in/anjan-saklani-369748327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
const GITHUB = "#"; // replace with your GitHub URL
// Video: 'youtube' | 'local' | '' (empty hides the video)
const VIDEO_TYPE = ""; // set later to 'youtube' or 'local'
const VIDEO_LINK = ""; // e.g. "https://www.youtube.com/embed/VIDEO_ID" or "/intro.mp4"
// ---------------------------------

function Nav() {
  return (
    <nav className="fixed w-full top-0 z-40 bg-gradient-to-b from-black/60 to-transparent backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="text-emerald-400 font-semibold">{NAME}</div>
        <div className="flex gap-4 items-center text-sm text-slate-300">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#achievements" className="hover:text-white">Achievements</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" className="ml-3 inline-block bg-emerald-500 text-black px-3 py-1 rounded">LinkedIn</a>
        </div>
      </div>
    </nav>
  );
}

function Hero({ onOpenVideo }) {
  return (
    <header className="min-h-screen flex items-center bg-gradient-to-b from-[#060216] via-[#04102a] to-[#02040a] pt-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Intro */}
        <div className="order-2 md:order-1">
          <div className="inline-block px-3 py-1 rounded-full bg-emerald-600/10 text-emerald-300 mb-4 text-sm">Computer Science • Aspiring Software Engineer</div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-cyan-300 mb-4">
            Hi — I’m <span className="text-white">{NAME}</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-xl mb-6">
            Second-year Computer Science student at Graphic Era Hill University. I lead team projects such as an Auto Text Completer & Spell Checker and sharpen problem-solving skills on LeetCode. My immediate goal is to join industry, learn product-oriented engineering workflows, and later build AI-driven products.
          </p>

          <div className="flex gap-3 flex-wrap">
            <a href="#projects" className="bg-violet-600 hover:bg-violet-700 px-5 py-3 rounded-lg shadow-lg text-white">View Projects</a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="border border-slate-700 px-5 py-3 rounded-lg text-slate-200 hover:bg-slate-800">LinkedIn</a>
            <button onClick={onOpenVideo} className="border border-slate-700 px-5 py-3 rounded-lg text-slate-200 hover:bg-slate-800">▶ Watch Intro</button>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <MiniCard label="Location" value="Dehradun, India" />
            <MiniCard label="Availability" value="Internships / Entry roles" />
            <MiniCard label="Focus" value="DSA & System Design" />
          </div>
        </div>

        {/* Right: Photo */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative">
            <div className="rounded-full w-56 h-56 overflow-hidden border-4 border-transparent shadow-[0_10px_40px_rgba(59,130,246,0.12)]" style={{ boxShadow: "0 20px 60px rgba(99,102,241,0.12)" }}>
              <img src={profile} alt="Profile" className="w-full h-full object-cover" />
            </div>

            {/* glow ring */}
            <div className="absolute -inset-1 rounded-full pointer-events-none blur-2xl opacity-60" style={{ background: "radial-gradient(circle at 30% 30%, rgba(99,102,241,0.18), rgba(6,182,212,0.06) 40%, transparent 50%)" }} />
          </div>
        </div>
      </div>
    </header>
  );
}

function MiniCard({ label, value }) {
  return (
    <div className="bg-[#07101a] border border-slate-800 p-3 rounded-lg">
      <p className="text-xs text-slate-400">{label}</p>
      <p className="text-white font-medium">{value}</p>
    </div>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-6 py-14">
      <h2 className="text-2xl md:text-3xl font-bold text-violet-300 mb-6">{title}</h2>
      {children}
    </section>
  );
}

function ProjectsGrid() {
  const projects = [
    {
      name: "Auto Text Completer & Spell Checker",
      role: "Team Lead",
      desc: "Led architecture and integration for an intelligent text completion and spell-checking pipeline designed for editor integration.",
      tech: "C, Trie, Algorithms"
    },
    {
      name: "Modular Trading Portfolio (C)",
      role: "Developer",
      desc: "Command-line portfolio manager using modular C and file persistence.",
      tech: "C, File I/O"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((p) => (
        <article key={p.name} className="bg-[#07101a] border border-slate-800 p-5 rounded-xl hover:scale-[1.02] transition">
          <h3 className="text-lg font-semibold text-white">{p.name}</h3>
          <p className="text-sm text-slate-400 mt-1">{p.role} • {p.tech}</p>
          <p className="mt-3 text-slate-300">{p.desc}</p>
        </article>
      ))}
    </div>
  );
}

function AchievementsList() {
  const items = [
    "Led Auto Text Completer & Spell Checker — architecture, reviews, integration.",
    "Consistent LeetCode practice to strengthen DSA skills.",
    "Built modular C projects to learn file handling and module design."
  ];
  return (
    <div className="space-y-3">
      {items.map((t, i) => (
        <div key={i} className="bg-[#07101a] border border-slate-800 p-4 rounded-lg text-slate-200">{t}</div>
      ))}
    </div>
  );
}

function SkillsGrid() {
  const skills = ["C / C++", "Python", "JavaScript", "React", "Tailwind", "DSA", "Git", "Basic ML"];
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
      {skills.map(s => (
        <div key={s} className="bg-[#07121a] border border-slate-800 rounded-lg p-4">
          <p className="text-white font-medium">{s}</p>
        </div>
      ))}
    </div>
  );
}

function ContactForm() {
  return (
    <form className="space-y-4 max-w-xl">
      <div>
        <label className="text-sm text-slate-300">Name</label>
        <input className="w-full mt-1 p-3 rounded bg-[#061017] border border-slate-800 text-slate-200" placeholder="Your name" />
      </div>
      <div>
        <label className="text-sm text-slate-300">Email</label>
        <input className="w-full mt-1 p-3 rounded bg-[#061017] border border-slate-800 text-slate-200" placeholder="Your email" />
      </div>
      <div>
        <label className="text-sm text-slate-300">Message</label>
        <textarea className="w-full mt-1 p-3 rounded bg-[#061017] border border-slate-800 text-slate-200" rows="5" placeholder="Say hi..."></textarea>
      </div>
      <div>
        <button type="button" className="bg-violet-600 px-5 py-3 rounded text-white">Send Message</button>
      </div>
    </form>
  );
}

export default function App() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <div className="bg-gradient-to-b from-[#02030a] to-[#01010a] text-slate-200 min-h-screen">
      <Nav />
      <main className="pt-20">
        <Hero onOpenVideo={() => setVideoOpen(true)} />

        <Section id="about" title="About">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="prose prose-invert text-slate-300">
              <p>
                I am a second-year Computer Science student with practical team leadership experience.
                I led the Auto Text Completer & Spell Checker group project as team lead — responsible for architecture, coordinating teammates, and final integration.
                I am sharpening my coding skills on LeetCode and building practical projects to prepare for industry.
              </p>
              <p>
                My near-term goal is to join a company to learn product-oriented engineering practices. Long-term, I aim to found an AI & robotics company that builds practical solutions.
              </p>
              <div className="mt-4 flex gap-3">
                <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 bg-emerald-500 text-black px-4 py-2 rounded">Email</a>
                <a href={LINKEDIN} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-slate-700 px-4 py-2 rounded">LinkedIn</a>
                <a href={GITHUB} className="inline-flex items-center gap-2 border border-slate-700 px-4 py-2 rounded">GitHub</a>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-[#07101a] border border-slate-800 p-4 rounded-xl">
                <p className="text-xs text-slate-400">Location</p>
                <p className="font-medium text-white">Dehradun, India</p>
              </div>
              <div className="bg-[#07101a] border border-slate-800 p-4 rounded-xl">
                <p className="text-xs text-slate-400">Career Path</p>
                <p className="font-medium text-white">Join industry → Learn → Build startup</p>
              </div>
              <div className="bg-[#07101a] border border-slate-800 p-4 rounded-xl">
                <p className="text-xs text-slate-400">Contact</p>
                <p className="font-medium text-white">{EMAIL} • {PHONE}</p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="projects" title="Selected Projects">
          <ProjectsGrid />
        </Section>

        <Section id="achievements" title="Achievements">
          <AchievementsList />
        </Section>

        <Section id="skills" title="Skills">
          <SkillsGrid />
        </Section>

        <Section id="contact" title="Contact">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ContactForm />
            </div>
            <div className="bg-[#07101a] border border-slate-800 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-white mb-2">Quick Contact</h4>
              <p className="text-slate-300 mb-4">Email: {EMAIL}<br/>Phone: {PHONE}</p>
              <a href="/resume.pdf" className="inline-block px-4 py-2 bg-violet-600 text-white rounded">Download Resume</a>
            </div>
          </div>
        </Section>

        <footer className="py-8 text-center text-slate-500">
          © {new Date().getFullYear()} {NAME} — Designed for job applications & interviews.
        </footer>
      </main>

      {/* Video modal */}
      {videoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="w-full max-w-3xl bg-[#061018] rounded-lg overflow-hidden border border-slate-800">
            <div className="flex justify-between items-center p-3 border-b border-slate-800">
              <div className="text-white font-medium">Intro — {NAME}</div>
              <button onClick={() => setVideoOpen(false)} className="text-slate-300 px-3 py-1">Close ✕</button>
            </div>
            <div className="p-4">
              {VIDEO_TYPE === "youtube" && VIDEO_LINK ? (
                <div className="aspect-video rounded overflow-hidden">
                  <iframe src={VIDEO_LINK} title="Intro" frameBorder="0" allowFullScreen className="w-full h-full" />
                </div>
              ) : VIDEO_TYPE === "local" && VIDEO_LINK ? (
                <video controls className="w-full rounded">
                  <source src={VIDEO_LINK} type="video/mp4" />
                </video>
              ) : (
                <div className="text-slate-300">No video provided yet. Add VIDEO_TYPE and VIDEO_LINK in the top of src/App.jsx (or place intro.mp4 into /public and set VIDEO_TYPE='local', VIDEO_LINK='/intro.mp4').</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
