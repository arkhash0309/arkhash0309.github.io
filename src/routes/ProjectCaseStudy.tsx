import { useParams } from 'react-router-dom';
import { getProjectBySlug } from '@/data/projects';
import { CaseStudyLayout } from '@/components/projects/CaseStudyLayout';
import NotFound from '@/routes/NotFound';

export default function ProjectCaseStudy() {
  const { slug } = useParams();
  const project = slug ? getProjectBySlug(slug) : undefined;
  if (!project || !project.featured) return <NotFound />;
  return <CaseStudyLayout project={project} />;
}
