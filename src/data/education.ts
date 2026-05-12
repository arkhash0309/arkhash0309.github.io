export type EducationItem = {
  qualification: string;
  institution: string;
  detail?: string;
};

export const education: EducationItem[] = [
  {
    qualification: 'BSc (Hons) Artificial Intelligence and Data Science',
    institution: 'Informatics Institute of Technology',
    detail: 'Affiliated with Robert Gordon University, Aberdeen, Scotland',
  },
  {
    qualification: 'Cambridge International Advanced Level (A/L) — Maths Stream',
    institution: 'Lyceum International School Nugegoda',
  },
  {
    qualification: 'Cambridge International Ordinary Level (O/L)',
    institution: 'Lyceum International School Nugegoda',
  },
];
