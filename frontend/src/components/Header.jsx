import React from "react";
import { Button } from "../components/ui/button";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";
import { profile } from "../mock/mock";

const nav = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" }
];

export default function Header() {
  const onJump = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3">
        <div className="header-logo tracking-wider select-none">
          {profile.name}
        </div>
        <nav className="hidden md:flex items-center gap-3">
          {nav.map((n) => (
            <button
              key={n.id}
              className="nav-link"
              onClick={() => onJump(n.id)}
            >
              {n.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a className="nav-link" href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a className="nav-link" href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a className="nav-link" href={`mailto:${profile.email}`} aria-label="Email">
            <Mail size={18} />
          </a>
          <Button
            variant="default"
            className="btn-accent h-10 px-4"
            onClick={() => onJump("contact")}
          >
            <FileDown className="mr-2 h-4 w-4" /> Resume
          </Button>
        </div>
      </div>
    </header>
  );
}