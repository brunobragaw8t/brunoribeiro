export interface TypeIconLink {
  title: string;
  label?: string;
  url: string;
  image?: string;
  icon?: string;
}

export interface TypeCategory {
  id: number;
  title: string;
}

export interface Project {
  id: number;
  title: string;
  image: string;
  videoId: string;
  categories: Array<number>;
}
