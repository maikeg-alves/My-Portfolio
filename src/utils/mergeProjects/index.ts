import { Github, IProject, CombinedProject } from '@interfaces';
import { orderProjects } from '../orderProjects';
import { formatDate } from '../formateData';

export function mergeProjects(
  apiProjects: Github[],
  dbProjects: IProject[],
): CombinedProject[] {
  const combinedProjects: CombinedProject[] = [];

  // Merge data based on a common identifier, e.g., the GitHub repository name
  dbProjects.forEach((dbProject) => {
    const matchingApiProject = apiProjects.find(
      (apiProject) => apiProject.name === dbProject.github,
    );

    if (matchingApiProject) {
      const combinedProject: CombinedProject = {
        ...dbProject,
        description: matchingApiProject.description,
        html_url: matchingApiProject.html_url,
        language: matchingApiProject.language,
        created_at: formatDate(matchingApiProject.created_at),
        updated_at: formatDate(matchingApiProject.updated_at),
        pushed_at: formatDate(matchingApiProject.pushed_at),
        homepage: matchingApiProject.homepage,
      };

      combinedProjects.push(combinedProject);
    }
  });

  return orderProjects(combinedProjects);
}
