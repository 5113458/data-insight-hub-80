import { ExternalLink, GraduationCap, BadgeCheck } from "lucide-react";
import { Reveal, Section } from "./Reveal";
import {
  certifications,
  education,
  experience,
  profile,
  projects,
  skillGroups,
  stats,
} from "@/data/portfolio";

export function About() {
  return (
    <Section
      id="about"
      label="01 / About"
      title="A student who builds things, then explains the numbers."
    >
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            I got into data science through a very unglamorous spreadsheet. I was trying to figure out
            why a college event kept losing money, ended up in Python, and realised that the part I
            enjoyed most was the moment a messy dataset finally says something useful.
          </p>
          <p>
            Right now I'm in my {education.period.includes("2027") ? "third" : "current"} year of a{" "}
            {profile.degree} at {profile.institution}, focused on machine learning fundamentals, SQL
            that scales past a laptop, and getting comfortable shipping models rather than leaving them
            in a notebook. I'm currently working through deep learning and the basics of MLOps.
          </p>
          <p>
            The problems that pull me in are the ones with a decision attached — churn, pricing, demand,
            anything where a prediction changes what someone does on Monday morning. I'd rather present
            an honest 0.86 AUC with clear caveats than a suspiciously perfect score.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="grid grid-cols-2 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="surface-card p-5">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-mono text-3xl font-semibold text-primary">{s.value}</dd>
                <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section
      id="skills"
      label="02 / Skills"
      title="Tech stack"
      intro="Only things I can actually talk through in an interview — including what I'm still learning."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.06}>
            <div className="surface-card h-full p-6">
              <h3 className="font-mono text-sm font-medium text-primary">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="tag-pill">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      label="03 / Projects"
      title="Proof of work"
      intro="Each project lists the question, the approach, and the actual result — good or awkward."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.08}>
            <article className="surface-card flex h-full flex-col p-6 md:p-7">
              <p className="font-mono text-[0.7rem] uppercase tracking-widest text-primary">{p.kind}</p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>

              <dl className="mt-5 space-y-3 text-sm">
                <div>
                  <dt className="font-mono text-xs uppercase tracking-wider text-foreground/70">Problem</dt>
                  <dd className="mt-1 text-muted-foreground">{p.problem}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-wider text-foreground/70">Approach</dt>
                  <dd className="mt-1 text-muted-foreground">{p.approach}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-wider text-foreground/70">Result</dt>
                  <dd className="mt-1 font-medium text-primary">{p.result}</dd>
                </div>
              </dl>

              <ul className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <li key={t} className="tag-pill">
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-4 border-t border-border pt-4">
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label} <ExternalLink className="size-3.5" aria-hidden />
                  </a>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" label="04 / Experience" title="Where I've applied it">
      <ol className="relative space-y-10 border-l border-border pl-6 md:pl-8">
        {experience.map((e, i) => (
          <li key={e.role}>
            <Reveal delay={i * 0.06}>
              <span
                aria-hidden
                className="absolute -left-[5px] mt-2 size-2.5 rounded-full bg-primary"
              />
              <p className="font-mono text-xs text-muted-foreground">{e.period}</p>
              <h3 className="mt-1.5 text-lg font-semibold tracking-tight">{e.role}</h3>
              <p className="text-sm text-primary">{e.org}</p>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {e.bullets.map((b) => (
                  <li key={b} className="before:mr-2 before:text-primary before:content-['—']">
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" label="05 / Education" title="Academics">
      <Reveal>
        <div className="surface-card p-6 md:p-8">
          <div className="flex items-start gap-4">
            <GraduationCap className="mt-1 size-5 shrink-0 text-primary" aria-hidden />
            <div>
              <h3 className="text-lg font-semibold tracking-tight">{education.degree}</h3>
              <p className="text-sm text-primary">{education.institution}</p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">
                {education.period} · CGPA {education.cgpa}
              </p>
            </div>
          </div>
          <div className="mt-6">
            <p className="font-mono text-xs uppercase tracking-wider text-foreground/70">
              Relevant coursework
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {education.coursework.map((c) => (
                <li key={c} className="tag-pill">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export function Certifications() {
  return (
    <Section
      id="certifications"
      label="06 / Certifications"
      title="Coursework & credentials"
      intro="A short list I'd stand behind, not a badge collection."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((c, i) => (
          <Reveal key={c.name} delay={(i % 2) * 0.06}>
            <a
              href={c.href}
              target="_blank"
              rel="noreferrer noopener"
              className="surface-card flex h-full items-start gap-3 p-5"
            >
              <BadgeCheck className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
              <span>
                <span className="block text-sm font-medium">{c.name}</span>
                <span className="mt-1 block font-mono text-xs text-muted-foreground">
                  {c.issuer} · {c.date}
                </span>
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Contact() {
  return (
    <Section
      id="contact"
      label="07 / Contact"
      title="Open to internships and entry-level data roles — let's talk."
      intro="Fastest way to reach me is email. I usually reply within a day."
    >
      <Reveal>
        <div className="surface-card flex flex-col gap-6 p-7 md:flex-row md:items-center md:justify-between md:p-9">
          <div>
            <a
              href={`mailto:${profile.email}`}
              className="font-mono text-lg text-primary underline-offset-4 hover:underline"
            >
              {profile.email}
            </a>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs">
              {profile.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <a
            href={`mailto:${profile.email}?subject=Internship%20opportunity`}
            className="inline-flex w-fit items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Get in touch
          </a>
        </div>
      </Reveal>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between md:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="font-mono">Built with React, TypeScript, Tailwind CSS & Motion</p>
      </div>
    </footer>
  );
}
