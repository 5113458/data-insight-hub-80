import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Download, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

function useTypedRole() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = profile.roles[index % profile.roles.length] ?? "";
    const done = !deleting && text === word;
    const empty = deleting && text === "";
    const timeout = window.setTimeout(
      () => {
        if (done) return setDeleting(true);
        if (empty) {
          setDeleting(false);
          setIndex((i) => i + 1);
          return;
        }
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
      },
      done ? 1400 : deleting ? 45 : 85,
    );
    return () => window.clearTimeout(timeout);
  }, [text, deleting, index]);

  return text;
}

function NodeField() {
  const nodes = [
    [12, 70], [22, 38], [34, 62], [46, 24], [58, 55], [70, 32], [82, 66], [92, 44],
  ];
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 w-full opacity-25"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <polyline
        points={nodes.map(([x, y]) => `${x},${y}`).join(" ")}
        fill="none"
        stroke="var(--primary)"
        strokeWidth="0.25"
        strokeOpacity="0.5"
      />
      {nodes.map(([x, y], i) => (
        <motion.circle
          key={i}
          cx={x}
          cy={y}
          r="0.7"
          fill="var(--primary)"
          initial={{ opacity: 0.2 }}
          animate={{ opacity: [0.2, 0.9, 0.2] }}
          transition={{ duration: 3.5, delay: i * 0.25, repeat: Infinity }}
        />
      ))}
    </svg>
  );
}

export function Hero() {
  const typed = useTypedRole();

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      <div aria-hidden className="grid-backdrop absolute inset-0" />
      <NodeField />
      <div className="relative mx-auto w-full max-w-6xl px-5 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-label"
        >
          {profile.location} · Graduating {profile.graduation}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl"
        >
          Hi, I'm {profile.name} — a Data Science student{" "}
          <span className="text-gradient">turning data into decisions.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
        >
          Interested in machine learning, NLP, and building end-to-end data products — from messy CSVs
          to a model someone can actually click on.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 font-mono text-sm text-primary"
        >
          {typed}
          <span className="ml-0.5 inline-block w-2 animate-pulse">|</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            View Projects <ArrowRight className="size-4" aria-hidden />
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
          >
            <Download className="size-4" aria-hidden /> Download Resume
          </a>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs"
        >
          {profile.socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                className="text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
              >
                {s.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="size-3.5" aria-hidden /> {profile.email}
            </a>
          </li>
        </motion.ul>
      </div>
    </section>
  );
}
