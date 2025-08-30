import React, { useEffect, useMemo, useState } from "react";
import { profile, skills, projects, experience, education } from "../mock/mock";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Separator } from "../components/ui/separator";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { useToast } from "../hooks/use-toast";
import { ArrowRight, Pencil, MapPin, Phone, Mail, Star, CheckCircle2 } from "lucide-react";

function Section({ id, label, children }) {
  return (
    <section id={id} className="container mx-auto py-14 md:py-20">
      <div className="label mb-3 uppercase tracking-wider">{label}</div>
      {children}
    </section>
  );
}

export default function Portfolio() {
  const { toast } = useToast();
  const [tagline, setTagline] = useState(() => localStorage.getItem("vbk_tagline") || profile.summary);
  const [editing, setEditing] = useState(false);
  const [filter, setFilter] = useState("All");
  const [shortlist, setShortlist] = useState(() => {
    try { return JSON.parse(localStorage.getItem("vbk_shortlist") || "[]"); } catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem("vbk_tagline", tagline);
  }, [tagline]);

  useEffect(() => {
    localStorage.setItem("vbk_shortlist", JSON.stringify(shortlist));
  }, [shortlist]);

  const categories = useMemo(() => ["All", "ML", "Systems", "NLP"], []);
  const filteredProjects = useMemo(() =>
    filter === "All" ? projects : projects.filter((p) => p.category === filter),
    [filter]
  );

  const onSubmitContact = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    const existing = JSON.parse(localStorage.getItem("vbk_messages") || "[]");
    existing.push({ ...payload, ts: Date.now() });
    localStorage.setItem("vbk_messages", JSON.stringify(existing));
    e.currentTarget.reset();
    toast({ title: "Message saved locally", description: "This is a mock submission. We'll wire it to the backend next." });
  };

  const toggleShortlist = (id) => {
    setShortlist((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
  };

  return (
    <main>
      {/* Hero */}
      <section className="container mx-auto py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-9">
            <h1 className="hero-title leading-none">{profile.name}</h1>
            <div className="mt-4 text-big">{profile.role}</div>
            <div className="mt-6">
              {!editing ? (
                <p className="text-regular max-w-3xl">{tagline}</p>
              ) : (
                <Input
                  autoFocus
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value)}
                  className="border border-input focus-visible:ring-0 rounded-none"
                />
              )}
              <button
                onClick={() => setEditing((v) => !v)}
                className="btn-ghost mt-2 inline-flex items-center"
              >
                <Pencil className="mr-2 h-3.5 w-3.5" /> {editing ? "Done" : "Edit tagline"}
              </button>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button className="btn-accent">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="btn-primary" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                Contact
              </Button>
            </div>
          </div>
          <div className="md:col-span-3">
            <Card className="card">
              <CardHeader className="p-4">
                <CardTitle className="card-title">Contact</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex items-center gap-2 text-body"><MapPin size={16}/> {profile.location}</div>
                <div className="flex items-center gap-2 text-body mt-2"><Phone size={16}/> {profile.phone}</div>
                <div className="flex items-center gap-2 text-body mt-2"><Mail size={16}/> {profile.email}</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="container mx-auto" />

      {/* About */}
      <Section id="about" label="Profile">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-2">
            <Avatar className="h-20 w-20">
              <AvatarFallback>VBK</AvatarFallback>
            </Avatar>
          </div>
          <div className="md:col-span-10">
            <p className="text-body max-w-4xl">{profile.summary}</p>
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" label="Technical Skills">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((s) => (
            <Card key={s.category} className="card">
              <CardHeader className="p-4 pb-0"><CardTitle className="card-title">{s.category}</CardTitle></CardHeader>
              <CardContent className="p-4 flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <Badge key={i} className="rounded-none border border-border bg-white text-foreground hover:bg-accent hover:text-foreground">{i}</Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" label="Selected Projects">
        <Tabs value={filter} onValueChange={setFilter} className="w-full">
          <TabsList className="rounded-none">
            {(["All", "ML", "Systems", "NLP"]).map((c) => (
              <TabsTrigger key={c} value={c} className="rounded-none">{c}</TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value={filter} className="mt-4">
            <div className="grid md:grid-cols-2 gap-4">
              {filteredProjects.map((p) => (
                <Card key={p.id} className="card">
                  <CardHeader className="p-4 pb-0">
                    <div className="flex items-center justify-between">
                      <CardTitle className="card-title">{p.title}</CardTitle>
                      <button
                        className={`btn-ghost inline-flex items-center ${shortlist.includes(p.id) ? "text-green-600" : ""}`}
                        onClick={() => toggleShortlist(p.id)}
                        aria-label="Shortlist project"
                      >
                        {shortlist.includes(p.id) ? <CheckCircle2 size={16}/> : <Star size={16}/>}
                      </button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 space-y-2">
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <Badge key={t} className="rounded-none border bg-white">{t}</Badge>
                      ))}
                    </div>
                    <ul className="list-disc pl-5 text-body">
                      {p.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                    <div className="flex gap-2 pt-2">
                      <Button className="btn-primary" asChild>
                        <a href={p.links.repo} target="_blank" rel="noreferrer">Repository</a>
                      </Button>
                      <Button className="btn-accent" asChild>
                        <a href={p.links.demo} target="_blank" rel="noreferrer">Demo</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </Section>

      {/* Experience */}
      <Section id="experience" label="Experience">
        <div className="grid gap-4">
          {experience.map((e) => (
            <Card key={e.company} className="card">
              <CardHeader className="p-4 pb-0">
                <CardTitle className="card-title">{e.role} · {e.company}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 text-body">
                <div className="text-sm text-muted-foreground">{e.location} · {e.period}</div>
                <ul className="list-disc pl-5 mt-2">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" label="Education">
        <div className="grid md:grid-cols-2 gap-4">
          {education.map((ed) => (
            <Card key={ed.school} className="card">
              <CardHeader className="p-4 pb-0">
                <CardTitle className="card-title">{ed.degree}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 text-body">
                <div className="font-medium">{ed.school}</div>
                <div className="text-sm text-muted-foreground">{ed.period} · {ed.meta}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" label="Contact">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Card className="card">
              <CardHeader className="p-4 pb-0"><CardTitle className="card-title">Send a message</CardTitle></CardHeader>
              <CardContent className="p-4">
                <form onSubmit={onSubmitContact} className="grid gap-3">
                  <Input name="name" placeholder="Your name" className="rounded-none" required />
                  <Input name="email" type="email" placeholder="you@email.com" className="rounded-none" required />
                  <Textarea name="message" placeholder="Tell me about your project or role..." className="rounded-none min-h-[120px]" required />
                  <Button type="submit" className="btn-accent">Send</Button>
                </form>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="card">
              <CardHeader className="p-4 pb-0"><CardTitle className="card-title">Availability</CardTitle></CardHeader>
              <CardContent className="p-4 text-body">
                Open to research internships and AI/ML engineering roles. Comfortable across data pipelines, model training, evaluation, and lightweight APIs.
              </CardContent>
            </Card>
            <div className="text-xs text-muted-foreground mt-2">
              This portfolio is frontend-only right now with mocked interactions. Backend coming next.
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-border mt-8">
        <div className="container mx-auto py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="header-logo">{profile.name}</div>
          <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} • Built with React, FastAPI, MongoDB</div>
        </div>
      </footer>
    </main>
  );
}