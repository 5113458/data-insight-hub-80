# Data Decisions Hub

THE PROMPT

You are an expert frontend engineer and UI/UX designer. Build a modern, high-performance personal portfolio website for a Data Science student. The site should position them as a serious, hands-on learner with real project experience — credible to recruiters and hiring managers for internships/entry-level roles, not a generic resume clone.

Persona / Content basis:

Name: [Krish Armurwar]

Title: Data Science Student | Aspiring Data Scientist / ML Engineer

Currently pursuing: /B.Sc in Data Science/CS] at [MIT ACSC], graduating 2027]

Based in: [Pune India]

Tone: Curious, driven, technically credible — show growth and initiative, not fake seniority. It's fine (and good) to sound like a student who builds things and learns fast.

Tech stack:

React + TypeScript + Vite (or Next.js if you want SEO/blog support)

Tailwind CSS for styling

Framer Motion for scroll/hover micro-interactions

Fully responsive (mobile-first), dark mode by default with light mode toggle

Deployable as a static site (Vercel/Netlify friendly)

Design direction:

Clean, modern, data-forward aesthetic: dark charcoal or off-white background with one accent color (blue, teal, or violet) used consistently

Subtle data-visualization-inspired background elements in the hero (dots, chart lines, network nodes) — tasteful, not busy

Monospace accents for tags/code, clean sans-serif (Inter, Geist) for body text

Strong typographic hierarchy, generous white space

Smooth scroll-reveal animations on section entry, hover states on project/skill cards

Avoid stock "AI robot" or generic dashboard stock images — use real notebook screenshots, chart outputs, or clean abstract visuals instead

SITE STRUCTURE (in order)

1. Navbar (sticky)

Name/logo, links to sections (About, Projects, Skills, Experience, Certifications, Contact), resume download button, dark/light toggle

2. Hero Section

Intro line: "Hi, I'm [Name] — a Data Science student turning data into decisions."

One-line focus statement (e.g., "Interested in machine learning, NLP, and building end-to-end data products")

Primary CTA: "View Projects" | Secondary CTA: "Download Resume"

Social/profile links: GitHub, LinkedIn, Kaggle, LeetCode, email

Optional: typing animation cycling through "Data Analyst", "ML Enthusiast", "Kaggle Competitor"

3. About Me

2–3 short paragraphs: what got you into data science, what you're currently learning/focused on, what kind of problems excite you

Quick stats strip — use real, honest numbers: e.g., "X projects built", "Y Kaggle competitions", "Z certifications completed", "CGPA (optional)"

Optional photo or clean illustrated avatar

4. Skills / Tech Stack

Grouped by category (student-appropriate, honest about level):

Languages: Python, SQL, R (whichever apply)

Data & ML Libraries: Pandas, NumPy, scikit-learn, Matplotlib/Seaborn, PyTorch/TensorFlow (if applicable)

Tools: Jupyter, Git/GitHub, Excel, Power BI/Tableau, Google Colab

Currently Learning: be transparent — e.g., "Deep Learning", "MLOps basics" — this is a strength for a student profile, shows growth mindset

Icon grid or simple tag pills; avoid fake "90% proficiency" skill bars — they read poorly to technical recruiters

5. Projects (the centerpiece section)

This matters more than anything else for a student — it's your proof of work. For each project (aim for 4–6 solid ones):

Project title + one-line summary

Problem/question you were solving (academic, Kaggle, self-initiated, or coursework-based — label which)

Your approach: data source, methods/models used, key steps

Tech stack tags (Python, Pandas, scikit-learn, etc.)

Result: a concrete outcome — accuracy/RMSE/insight found/business takeaway (real numbers, not vague claims)

Links: GitHub repo (must be clean and documented), live demo/Streamlit app if you built one, Kaggle notebook link

Thumbnail: a real chart, confusion matrix, dashboard screenshot, or notebook output

Include a mix: at least one full end-to-end project (data cleaning → model → deployment/dashboard) if possible — this is what separates a strong student portfolio from a course-assignment list.

6. Experience (internships, research assistantships, competitions)

Vertical timeline: role, organization/competition, dates, 2–3 bullets on what you did and learned

Include: internships, research under a professor, teaching assistant roles, Kaggle competition ranks, hackathon results — anything hands-on counts, even unpaid or academic

7. Education

Degree, institution, expected graduation year

Relevant coursework (Statistics, Machine Learning, Data Structures, Databases, etc.)

CGPA if strong; thesis/capstone topic if you have one

8. Certifications & Coursework

Name, issuing platform (Coursera, DataCamp, Google, IBM, etc.), completion date, verification link/badge

Keep this section tight — 3–6 credible ones beat a long unfocused list

9. Contact / Footer

CTA: "Open to internships and entry-level data roles — let's talk"

Contact form or mailto link + social icons repeated

Footer: copyright, "Built with [stack]"

TECHNICAL REQUIREMENTS

SEO: proper meta title/description, Open Graph tags with a custom OG image, favicon

Performance: lazy-load images, aim for Lighthouse 90+

Accessibility: semantic HTML, alt text, keyboard nav, good color contrast

Sticky navbar with active-section highlighting on scroll

Fully responsive: mobile, tablet, desktop

WHAT TO CUSTOMIZE BEFORE USING

 Real bio, university, graduation year

 4–6 real projects with actual GitHub links and honest results

 Real, honest skills list (only what you can discuss in an interview)

 Real internships/competitions (or omit the section if you have none yet — don't pad it)

 Resume PDF link

 Social links: GitHub, LinkedIn, Kaggle, email

 Chosen accent color

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://data-insight-hub-80.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d8c91c3f-a48b-4882-9ce5-79ecc85488be).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
