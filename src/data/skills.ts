export type SkillGroup = { name: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    name: 'Artificial Intelligence',
    items: ['Scikit-learn', 'PyTorch', 'Ollama', 'HuggingFace', 'PyGAD'],
  },
  {
    name: 'Data Science',
    items: ['MS Excel', 'Pandas', 'Scikit-learn', 'SQL'],
  },
  {
    name: 'Cloud Platforms',
    items: ['Amazon AWS', 'GCP'],
  },
  {
    name: 'Front-end Development',
    items: ['HTML', 'CSS', 'React', 'JavaScript', 'Figma'],
  },
  {
    name: 'Additional Frameworks & Tools',
    items: ['Python', 'Git', 'GitHub', 'Microsoft 365'],
  },
];

export const softSkills: string[] = [
  'Teamwork & collaboration',
  'Adaptability',
  'Communication',
  'Willingness to learn',
  'Problem-solving',
  'Critical thinking',
];
