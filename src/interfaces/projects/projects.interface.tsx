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
  description: string;
  difficulty: number;
  img: string;
  gif: string;
  github: string;
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

export interface CombinedProject extends IProject, Github {}

export interface IProject {
  id: number;
  name: string;
  github: string;
  description_: string | null;
  difficulty: number;
  img: string;
  technologies: Technology[];
}

export interface Technology {
  id: number;
  name: string;
  icon: string;
  ability: number;
}

export interface Github {
  name: string;
  description: string;
  html_url: string;
  language: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  homepage: string;
}
