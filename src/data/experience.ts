export type ExperienceItem = {
  company: string;
  role: string;
  type: string;
  start: string;
  end: string;
  achievements: { title: string; body: string }[];
};

export const experience: ExperienceItem[] = [
  {
    company: 'IronOne AI Labs',
    role: 'Intern — Machine Learning Engineer',
    type: 'Full-time',
    start: 'June 2024',
    end: 'September 2025',
    achievements: [
      {
        title: 'FinTech ML Platform',
        body: 'Architected and deployed an end-to-end ML pipeline on AWS SageMaker, incorporating automated data-drift and model-drift detection to ensure production reliability. Implemented fairness constraints to mitigate bias in financial predictions.',
      },
      {
        title: 'Geo-Intelligence News Clustering',
        body: 'Designed and delivered a clustering system that groups large volumes of news articles by semantic similarity, building the full pipeline from ingestion to client-facing output.',
      },
      {
        title: 'Board Paper Summarization Tool',
        body: 'Benchmarked multiple LLMs against a custom evaluation rubric to identify the optimal model for summarizing financial-institution documents, balancing accuracy, coherence, and domain relevance.',
      },
    ],
  },
];
