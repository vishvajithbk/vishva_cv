export const profile = {
  name: "VISHVAJITH BK",
  role: "AI/ML Engineer",
  location: "Coimbatore, India",
  phone: "+91 6382742434",
  email: "vishvajithbk@gmail.com",
  summary:
    "Graduate engineer focused on applied machine learning with practical systems work. Hands-on experience building analytics and ML pipelines in Python—feature engineering, training/evaluation, and deployment. Comfortable across data preprocessing, modeling, and lightweight API integrations.",
  socials: {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
    portfolio: "#"
  }
};

export const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "SQL"]
  },
  {
    category: "Machine Learning / Modeling",
    items: [
      "PyTorch",
      "scikit-learn",
      "CNNs",
      "RNNs / LSTMs / GRUs",
      "Transformers",
      "Autoencoders"
    ]
  },
  {
    category: "LLM Tooling & Orchestration",
    items: ["LangChain (RAG)", "FAISS"]
  },
  {
    category: "Data & Analytics",
    items: ["Pandas", "NumPy", "Feature Engineering", "Data Cleaning"]
  },
  {
    category: "Visualization",
    items: ["Matplotlib", "Seaborn", "Confusion Matrices"]
  },
  {
    category: "Web & APIs",
    items: ["FastAPI", "Flask (basics)", "REST"]
  },
  {
    category: "Databases",
    items: ["Oracle SQL", "MongoDB"]
  },
  {
    category: "Cloud & DevOps",
    items: ["Git/GitHub", "Linux", "Bash", "Docker"]
  },
  {
    category: "Front-end",
    items: ["HTML", "CSS", "Vanilla JavaScript"]
  },
  {
    category: "UI/UX",
    items: ["Figma"]
  }
];

export const projects = [
  {
    id: "proj-wafer",
    title: "Wafer Defect Detection using CNN (with attention)",
    tags: ["Computer Vision", "CNN", "Imbalanced Data", "Attention"],
    highlights: [
      "Built FCN + GAP CNN with built-in attention modules across 8 defect classes (+ none)",
      "Handled class imbalance via CutMix and class-balanced augmentation/upsampling",
      "Test Accuracy: 98.6% with strong per-class recall, robust minority-class performance"
    ],
    links: { repo: "#", demo: "#" },
    category: "ML"
  },
  {
    id: "proj-sobel",
    title: "Parallelizing Sobel Edge Detection",
    tags: ["Systems", "Parallel Computing", "ARM", "SIMD"],
    highlights: [
      "Implemented parallelized Sobel edge detection on Apple M1 (8-core ARM)",
      "Used PyMP and SIMD intrinsics; benchmarked speedup vs sequential",
      "Demonstrated near real-time processing improvements"
    ],
    links: { repo: "#", demo: "#" },
    category: "Systems"
  },
  {
    id: "proj-deep-research",
    title: "Deep Research Agent for Academic Literature",
    tags: ["LLMs", "LangChain", "FAISS", "RAG"],
    highlights: [
      "Automated arXiv retrieval + metadata ingestion",
      "FAISS-based retrieval for context-aware search over PDFs",
      "Citation-grounded summarization and multi-source reasoning"
    ],
    links: { repo: "#", demo: "#" },
    category: "NLP"
  },
  {
    id: "proj-notes",
    title: "Automated Notes Maker using NLP",
    tags: ["NLP", "BERT", "Whisper", "Summarization"],
    highlights: [
      "Used Whisper API for YouTube STT transcription",
      "BERT-based summarization to generate structured notes",
      "End-to-end pipeline from audio to notes"
    ],
    links: { repo: "#", demo: "#" },
    category: "NLP"
  }
];

export const experience = [
  {
    company: "Encure Biotherapeutics",
    role: "Research Intern (AI for Drug Discovery)",
    location: "New York, NY (Remote—India)",
    period: "May–Jul 2025",
    bullets: [
      "Shipped MolGPT app on REINVENT4 with FastAPI backend + web UI",
      "SMILES sanitization/validation with RDKit; CSV export; metrics logging",
      "Supported de novo, scaffold decoration, fragment linking, molecular transforms with tunable sampling"
    ]
  }
];

export const education = [
  {
    school: "Vellore Institute of Technology, Vellore",
    degree: "Masters in Artificial Intelligence and Machine Learning",
    period: "2024 - 2026",
    meta: "CGPA: 8.67"
  },
  {
    school: "Kumaraguru College of Technology, Coimbatore",
    degree: "Bachelors in Computer Science and Engineering",
    period: "2020 - 2024",
    meta: "CGPA: 8.66"
  }
];