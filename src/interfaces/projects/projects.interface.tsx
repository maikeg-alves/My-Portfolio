export interface IProjects {
  projects: {
    id: number;
    name: string;
    description: string;
    img: string;
    url: string;
    github: string;
    technologies: string[];
  }[];

  github: {
    id: number;
    name: string;
    description: string;
    html_url: string;
    language: string;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    homepage: string;
  }[];
}

// card

export interface ICard {
  id: number;
  name: string;
  description: string;
  img: string;
  url: string;
  github: string;
  technologies: string[];
  data: string;
}

export interface Allover {
  name: string;
  difficulty: number;
  gif: string;
  img: string;
  description: string;
  github: string;
  message: string;
  html_url: string;
  language: string;
  created_at: string;
  pushed_at: string;
  updated_at: string;
  homepage: string;
  technologys: {
    name: string;
    icon: string;
  }[];
  AllTechnologys: {
    name: string;
  }[];
}
