export const profile = {
  name: "Krish Armurwar",
  title: "Data Science Student | Aspiring Data Scientist / ML Engineer",
  degree: "B.Sc. in Data Science",
  institution: "MIT ACSC, Pune",
  graduation: "2027",
  location: "Pune, India",
  email: "krish.armurwar@example.com",
  resumeUrl: "/resume.pdf",
  roles: ["Data Analyst", "ML Enthusiast", "Kaggle Competitor", "Python Developer"],
  socials: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/in/" },
    { label: "Kaggle", href: "https://kaggle.com/" },
    { label: "LeetCode", href: "https://leetcode.com/" },
  ],
};

export const stats = [
  { value: "6", label: "Projects built" },
  { value: "3", label: "Kaggle competitions" },
  { value: "5", label: "Certifications" },
  { value: "8.6", label: "CGPA" },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "SQL", "R", "JavaScript (basics)"],
  },
  {
    title: "Data & ML Libraries",
    items: ["Pandas", "NumPy", "scikit-learn", "Matplotlib", "Seaborn", "XGBoost", "PyTorch (learning)"],
  },
  {
    title: "Tools & Platforms",
    items: ["Jupyter", "Google Colab", "Git / GitHub", "Power BI", "Excel", "Streamlit", "PostgreSQL"],
  },
  {
    title: "Currently Learning",
    items: ["Deep Learning", "NLP with Transformers", "MLOps basics", "Docker"],
  },
];

export type Project = {
  title: string;
  summary: string;
  kind: string;
  problem: string;
  approach: string;
  result: string;
  stack: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: "Customer Churn Prediction & Retention Dashboard",
    summary: "End-to-end pipeline from raw telecom data to a deployed Streamlit app.",
    kind: "Self-initiated · End-to-end",
    problem:
      "A telecom provider loses revenue to silent churn. Which customers are most likely to leave in the next billing cycle, and why?",
    approach:
      "Cleaned 7,043 customer records, engineered tenure and contract-value features, compared Logistic Regression, Random Forest and XGBoost with stratified 5-fold CV, then shipped the best model behind a Streamlit interface with SHAP explanations.",
    result: "ROC-AUC 0.86 (up from 0.71 baseline); recall 0.79 on churners. Month-to-month contracts drove 63% of predicted churn.",
    stack: ["Python", "Pandas", "scikit-learn", "XGBoost", "SHAP", "Streamlit"],
    links: [
      { label: "GitHub", href: "https://github.com/" },
      { label: "Live demo", href: "https://streamlit.io/" },
    ],
  },
  {
    title: "Housing Price Regression — Kaggle",
    summary: "Feature-heavy regression with careful leakage control and ensembling.",
    kind: "Kaggle competition",
    problem: "Predict residential sale prices from 79 explanatory variables with heavy missingness and skew.",
    approach:
      "Systematic missing-value strategy per column type, log-transform of the target, ordinal encoding for quality features, and a blend of Ridge + Gradient Boosting tuned with Optuna.",
    result: "RMSLE 0.121 — top 9% of the public leaderboard at submission.",
    stack: ["Python", "Pandas", "scikit-learn", "Optuna", "Matplotlib"],
    links: [
      { label: "Kaggle notebook", href: "https://kaggle.com/" },
      { label: "GitHub", href: "https://github.com/" },
    ],
  },
  {
    title: "Sentiment Analysis of Product Reviews",
    summary: "Classical NLP baseline benchmarked against a fine-tuned transformer.",
    kind: "Coursework · Extended",
    problem: "Can review text alone predict a 1–5 star rating well enough to triage support tickets?",
    approach:
      "Built a TF-IDF + Linear SVM baseline on 50k reviews, then fine-tuned DistilBERT on the same split; error analysis on confusion matrices for the mid-range 3-star class.",
    result: "Macro-F1 improved 0.68 → 0.81; 3-star recall remained the hardest class at 0.54.",
    stack: ["Python", "NLTK", "scikit-learn", "Hugging Face", "PyTorch"],
    links: [{ label: "GitHub", href: "https://github.com/" }],
  },
  {
    title: "Pune Air Quality Time-Series Study",
    summary: "Public-data analysis of seasonal PM2.5 patterns with forecasting.",
    kind: "Self-initiated · Analysis",
    problem: "How do PM2.5 levels in Pune move across seasons, and can the next 7 days be forecast usefully?",
    approach:
      "Scraped and cleaned 4 years of CPCB station data, handled sensor gaps with interpolation, decomposed trend/seasonality, and compared SARIMA against Prophet.",
    result: "SARIMA reached MAE 11.4 µg/m³ on held-out weeks; winter peaks averaged 2.3× monsoon levels.",
    stack: ["Python", "Pandas", "statsmodels", "Prophet", "Seaborn"],
    links: [{ label: "GitHub", href: "https://github.com/" }],
  },
  {
    title: "Retail Sales Power BI Dashboard",
    summary: "SQL-backed reporting layer with drill-through store performance views.",
    kind: "Coursework",
    problem: "Store managers had no single view of category-level margin across regions.",
    approach:
      "Modelled a star schema in PostgreSQL, wrote the aggregation views in SQL, and built DAX measures for YoY growth, basket size and margin contribution.",
    result: "Reduced a manual weekly report from ~3 hours to a live refresh; surfaced 4 categories with negative margin.",
    stack: ["SQL", "PostgreSQL", "Power BI", "DAX", "Excel"],
    links: [{ label: "GitHub", href: "https://github.com/" }],
  },
  {
    title: "Handwritten Digit Recognition from Scratch",
    summary: "A neural network implemented with NumPy only, to learn the math.",
    kind: "Learning project",
    problem: "Understand backpropagation properly instead of calling model.fit().",
    approach:
      "Implemented forward/backward passes, ReLU, softmax + cross-entropy and mini-batch SGD in raw NumPy on MNIST, then verified against a Keras equivalent.",
    result: "97.1% test accuracy with a 2-hidden-layer network; matched the Keras baseline within 0.4pp.",
    stack: ["Python", "NumPy", "Matplotlib"],
    links: [{ label: "GitHub", href: "https://github.com/" }],
  },
];

export const experience = [
  {
    role: "Data Analyst Intern",
    org: "Local analytics startup, Pune",
    period: "May 2026 — Jul 2026",
    bullets: [
      "Cleaned and consolidated marketing data from 3 sources into a single reporting table used by the growth team.",
      "Automated a weekly KPI report in Python, cutting manual prep time by roughly 70%.",
      "Learned how much of real analytics work is data quality and stakeholder questions, not modelling.",
    ],
  },
  {
    role: "Kaggle Competitor",
    org: "Housing Prices & Titanic playground competitions",
    period: "2025 — present",
    bullets: [
      "Top 9% finish on the Housing Prices regression leaderboard.",
      "Published documented notebooks focused on feature engineering and validation strategy.",
    ],
  },
  {
    role: "Data Science Club — Core Member",
    org: "MIT ACSC, Pune",
    period: "2025 — present",
    bullets: [
      "Ran two beginner workshops on Pandas and exploratory data analysis for ~60 students.",
      "Mentored first-year teams during an internal 24-hour data hackathon.",
    ],
  },
];

export const education = {
  degree: "B.Sc. in Data Science",
  institution: "MIT ACSC, Pune",
  period: "2024 — 2027 (expected)",
  cgpa: "8.6 / 10",
  coursework: [
    "Statistics & Probability",
    "Machine Learning",
    "Data Structures & Algorithms",
    "Database Systems",
    "Linear Algebra",
    "Data Visualization",
  ],
};

export const certifications = [
  { name: "Google Data Analytics Professional Certificate", issuer: "Coursera / Google", date: "2025", href: "https://coursera.org/" },
  { name: "Machine Learning Specialization", issuer: "DeepLearning.AI / Stanford", date: "2025", href: "https://coursera.org/" },
  { name: "SQL for Data Science", issuer: "DataCamp", date: "2025", href: "https://datacamp.com/" },
  { name: "Python for Data Science, AI & Development", issuer: "IBM", date: "2024", href: "https://coursera.org/" },
];

export const navSections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];
