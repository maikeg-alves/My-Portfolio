export interface IProjects {
  projects: {
    id: number;
    name: string;
    description: string;
    image: string;
    url: string;
    github: string;
    technologies: string[];
    data: string;
  }[];
}

// card

export interface ICard {
  id: number;
  name: string;
  description: string;
  image: string;
  url: string;
  github: string;
  technologies: string[];
  data: string;
}
