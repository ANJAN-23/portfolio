import { useState, useEffect } from "react";
import "./App.css";

const NAME = "Anjan Saklani";
const TAGLINE = "Aspiring AI Innovator | Future Engineer | Dreamer";

export default function App() {
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const reveal = () => {
      const sections = document.querySelectorAll(".reveal");
      const triggerBottom = window.innerHeight * 0.85;

      sections.forEach((sec) => {
        const top = sec.getBoundingClientRect().top;
        if (top < triggerBottom) {
          setVisibleSections((prev) => [...new Set([...prev, sec.id])]);
        }
      });
    };
    window.addEventListener("scroll", reveal);
    reveal();
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  const isVisible = (id) => visibleSections.includes(id);

  return (
    <div className="min-h-screen bg-black text-slate-200">
      {/* ---------- Navbar ---------- */}
      <nav className="fixed w-full top-0 z-50 bg-black/40 backdrop-blur-md border-b border-gray-800 text-slate-200">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-emerald-400 font-semibold tracking-wide text-lg">
            {NAME}
          </h1>
          <div className="hidden sm:flex gap-6 text-sm">
            <a href="#about" className="hover:text-emerald-400">About</a>
            <a href="#projects" className="hover:text-emerald-400">Projects</a>
            <a href="#skills" className="hover:text-emerald-400">Skills</a>
            <a href="#contact" className="hover:text-emerald-400">Contact</a>
          </div>
          <a
            href="https://www.linkedin.com/in/anjan-saklani-369748327/"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:block bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-4 py-1.5 rounded-lg transition"
          >
            LinkedIn
          </a>
        </div>
      </nav>

      {/* ---------- Hero Section ---------- */}
      <section
        id="hero"
        className="flex flex-col justify-center items-center min-h-screen text-center fade-in pt-20 px-4"
      >
        <h1 className="text-4xl sm:text-6xl font-bold hero-glow">{NAME}</h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-400 max-w-2xl">
          {TAGLINE}
        </p>

        {/* ---------- LinkedIn Video ---------- */}
        <div className="mt-6">
          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:share:7273242113436213248"
            height="400"
            width="600"
            frameBorder="0"
            allowFullScreen
            title="LinkedIn Intro Video"
            className="rounded-lg shadow-lg max-w-full"
          ></iframe>
        </div>

        <a
          href="#contact"
          className="mt-6 bg-emerald-500 text-black px-6 py-2 rounded-xl font-semibold hover:bg-emerald-400 transition"
        >
          Let’s Connect
        </a>
      </section>

      {/* ---------- About ---------- */}
      <section
        id="about"
        className={`section reveal ${isVisible("about") ? "visible" : ""}`}
      >
        <h2 className="text-3xl font-bold mb-6 text-emerald-400">About Me</h2>
        <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Hey! I’m Anjan Saklani, a Computer Science student from Graphic Era
          Hill University, Dehradun. I’m passionate about AI, futuristic
          technologies, and building something the world hasn’t seen yet. My
          goal is to merge creativity with technology — and make innovations
          that truly impact humanity.
        </p>
      </section>

      {/* ---------- Projects ---------- */}
      <section
        id="projects"
        className={`section reveal ${isVisible("projects") ? "visible" : ""}`}
      >
        <h2 className="text-3xl font-bold mb-6 text-emerald-400">Projects</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="card card-hover">
            <h3 className="text-xl font-semibold mb-2 text-white">
              Trading Portfolio Manager
            </h3>
            <p className="text-gray-400 text-sm">
              A C-based trading system with file handling and modularity.
              Displays user portfolio and handles real-time data.
            </p>
          </div>
          <div className="card card-hover">
            <h3 className="text-xl font-semibold mb-2 text-white">
              Eco-Friendly Bamboo Bucket
            </h3>
            <p className="text-gray-400 text-sm">
              An innovative household solution replacing plastic with
              biodegradable bamboo and lotus-leaf resin.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Skills ---------- */}
      <section
        id="skills"
        className={`section reveal ${isVisible("skills") ? "visible" : ""}`}
      >
        <h2 className="text-3xl font-bold mb-6 text-emerald-400">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["C", "Python", "HTML", "CSS", "JavaScript", "React", "Tailwind"].map(
            (skill) => (
              <div
                key={skill}
                className="card-hover bg-gray-800 text-emerald-300 px-5 py-2 rounded-full text-sm font-semibold"
              >
                {skill}
              </div>
            )
          )}
        </div>
      </section>

      {/* ---------- Contact ---------- */}
      <section
        id="contact"
        className={`section reveal ${isVisible("contact") ? "visible" : ""}`}
      >
        <h2 className="text-3xl font-bold mb-6 text-emerald-400">Contact Me</h2>
        <p className="text-gray-300 mb-6">
          Interested in collaborating or just want to say hi? Drop me a message!
        </p>
        <a
          href="mailto:anjansaklani@gmail.com"
          className="bg-emerald-500 text-black px-6 py-2 rounded-xl font-semibold hover:bg-emerald-400 transition"
        >
          Email Me
        </a>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="mt-20 py-6 text-sm text-gray-500 border-t border-gray-800 text-center">
        © {new Date().getFullYear()} {NAME}. All rights reserved.
      </footer>
    </div>
  );
}
