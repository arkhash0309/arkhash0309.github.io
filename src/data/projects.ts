export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  description: string;
  tags: string[];
  featured: boolean;
  year?: string;
  links?: { github?: string; demo?: string; paper?: string };
  caseStudy?: {
    problem: string;
    approach: string;
    architecture?: string;
    results: string;
    stack: string[];
  };
};

export const projects: Project[] = [
  {
    slug: 'esg-interpretable-ai',
    title:
      'Faithfulness-Driven ESG Score Prediction with Interpretable AI and Small Language Models',
    oneLiner:
      'Predicting ESG scores using explainable AI and generating natural-language justifications via Small Language Models.',
    description:
      'Research project combining tabular ESG score prediction with interpretable AI techniques and Small Language Models to produce faithful, natural-language justifications for each prediction.',
    tags: ['Research', 'XAI', 'SLMs', 'ESG', 'NLP'],
    featured: true,
    year: 'TODO',
    links: {
      github: 'TODO',
      paper: 'TODO',
    },
    caseStudy: {
      problem:
        'TODO: Describe the problem — why interpretable ESG scoring matters, what gap in existing models this addresses, and the dataset(s) used.',
      approach:
        'TODO: Describe the methodology — base prediction models, choice of interpretability technique (e.g., SHAP, attention, surrogate models), and how the SLM is fine-tuned/prompted to ground explanations in the model evidence.',
      architecture:
        'TODO: Add system architecture description and link to a diagram if available.',
      results:
        'TODO: Add concrete results — predictive metrics, faithfulness scores, sample explanations, human-eval if any.',
      stack: ['Python', 'PyTorch', 'HuggingFace', 'Scikit-learn'],
    },
  },
  {
    slug: 'genomic-ir-nlp',
    title: 'GenomicIR-NLP',
    oneLiner:
      'End-to-end pipeline that scrapes genomics research, stores it, summarizes abstracts, and serves a QA chatbot over retrieved top responses.',
    description:
      'Information-retrieval and NLP pipeline for genomics literature: scraping, indexing, abstractive summarization, and a retrieval-augmented QA interface.',
    tags: ['NLP', 'RAG', 'Information Retrieval', 'Bioinformatics'],
    featured: true,
    year: 'TODO',
    links: {
      github: 'TODO',
    },
    caseStudy: {
      problem:
        'TODO: Describe the motivation — scale of genomics literature, the need for fast retrieval and grounded answers, and target users.',
      approach:
        'TODO: Describe the pipeline — scraping sources, storage layer, summarization model, retriever, and QA layer.',
      architecture:
        'TODO: Describe end-to-end architecture and link to a diagram if available.',
      results:
        'TODO: Add retrieval metrics, sample QA outputs, and any user/qualitative evaluation.',
      stack: ['Python', 'HuggingFace', 'Scikit-learn'],
    },
  },
  {
    slug: 'guardian-ai',
    title: 'Guardian-AI',
    oneLiner:
      'Edge-AI application that detects firearms and unattended baggage from CCTV feeds using deep learning object detection and image classification.',
    description:
      'Edge-deployed CCTV monitoring system combining object detection and classification to flag firearms and unattended baggage in real time.',
    tags: ['Computer Vision', 'Edge AI', 'React', 'AWS', 'Deep Learning'],
    featured: true,
    year: 'TODO',
    links: {
      github: 'TODO',
      demo: 'TODO',
    },
    caseStudy: {
      problem:
        'TODO: Describe the security/safety motivation, deployment constraints (edge, latency, privacy), and target environment.',
      approach:
        'TODO: Describe model choices for detection vs. classification, dataset(s), training and edge-deployment strategy, and the React/AWS front-end and infrastructure.',
      architecture:
        'TODO: Describe the edge → cloud architecture and link to a diagram.',
      results:
        'TODO: Add precision/recall, inference latency on the target device, and qualitative examples.',
      stack: ['PyTorch', 'React', 'AWS', 'Python'],
    },
  },
  {
    slug: 'evolutionary-stock-prediction',
    title: 'Evolutionary-Stock-Price-Prediction',
    oneLiner:
      'Stock-price forecaster that uses genetic algorithms (PyGAD) to select the optimal feature set and hyperparameters.',
    description:
      'Forecasting system that uses evolutionary search via PyGAD to jointly optimize feature selection and model hyperparameters for stock-price prediction.',
    tags: ['Genetic Algorithms', 'Time Series', 'Finance', 'Feature Selection'],
    featured: true,
    year: 'TODO',
    links: {
      github: 'TODO',
    },
    caseStudy: {
      problem:
        'TODO: Describe the forecasting target, dataset, and why evolutionary search is well-suited to the joint feature/hyperparameter problem.',
      approach:
        'TODO: Describe the GA encoding, fitness function, base forecasting model, and training/validation protocol.',
      architecture:
        'TODO: Describe the pipeline and link to a diagram if available.',
      results:
        'TODO: Add error metrics vs. baselines, selected features, and observations about the search dynamics.',
      stack: ['Python', 'PyGAD', 'Scikit-learn', 'Pandas'],
    },
  },
  {
    slug: 'smog-sentry',
    title: 'Smog-Sentry',
    oneLiner:
      'HCHO gas level analysis in Sri Lanka via time-series forecasting, with a Power BI dashboard.',
    description:
      'Time-series analysis of formaldehyde (HCHO) levels across Sri Lanka, paired with a Power BI dashboard for stakeholders.',
    tags: ['Time Series', 'Power BI', 'Environmental Data'],
    featured: false,
    links: { github: 'TODO' },
  },
  {
    slug: 'marketwiz',
    title: 'MarketWiz: Supermarket Sales Prediction',
    oneLiner:
      'Full-stack web app predicting supermarket sales from weather and economic forecasts.',
    description:
      'Full-stack application combining sales, weather, and economic signals to forecast supermarket demand.',
    tags: ['Full-Stack', 'Forecasting', 'Web App'],
    featured: false,
    links: { github: 'TODO' },
  },
  {
    slug: 'textnet',
    title: 'TextNet: Lexicon Modelling with RNNs',
    oneLiner:
      'LSTM-based RNN classifier and language model on the Text8 dataset (Matt Mahoney).',
    description:
      'LSTM language model and classifier trained on the Text8 corpus, exploring lexicon-level modelling with recurrent networks.',
    tags: ['RNN', 'LSTM', 'Language Modeling'],
    featured: false,
    links: { github: 'TODO' },
  },
  {
    slug: 'assistnet',
    title: 'ASSISTnet',
    oneLiner:
      'ML, FFNN, and RNN implementations on the ASSISTments dataset for student-performance prediction.',
    description:
      'Comparison of classical ML, feed-forward networks, and RNNs on the ASSISTments dataset for predicting student performance.',
    tags: ['EdTech', 'Deep Learning', 'Sequence Models'],
    featured: false,
    links: { github: 'TODO' },
  },
  {
    slug: 'twitter-pipeline',
    title: 'Twitter Data Pipeline',
    oneLiner: 'Apache Airflow + Python pipeline for Twitter data ingestion.',
    description:
      'Airflow-orchestrated data pipeline for ingesting and storing Twitter data for downstream analysis.',
    tags: ['Data Engineering', 'Airflow', 'Pipelines'],
    featured: false,
    links: { github: 'TODO' },
  },
  {
    slug: 'invest-edge',
    title: 'Invest-Edge',
    oneLiner:
      'Investment-banker chatbot built on the ChatGPT API with Retrieval-Augmented Generation.',
    description:
      'RAG-based investment-banking assistant built on top of the ChatGPT API, with domain-specific document retrieval.',
    tags: ['LLM', 'RAG', 'FinTech'],
    featured: false,
    links: { github: 'TODO' },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const additionalProjects = projects.filter((p) => !p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string): Project | undefined {
  const featured = featuredProjects;
  const idx = featured.findIndex((p) => p.slug === slug);
  if (idx === -1) return undefined;
  return featured[(idx + 1) % featured.length];
}
