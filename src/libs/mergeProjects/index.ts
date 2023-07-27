import { Github, IProject } from '@interfaces';
import { CombinedProject } from 'src/interfaces/projects/projects.interface';

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
        created_at: matchingApiProject.created_at,
        updated_at: matchingApiProject.updated_at,
        pushed_at: matchingApiProject.pushed_at,
        homepage: matchingApiProject.homepage,
      };

      combinedProjects.push(combinedProject);
    }
  });

  return combinedProjects;
}
