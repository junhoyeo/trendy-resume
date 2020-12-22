export interface IInfo {
  title: string;
  author: string;
  catchphrase: {
    text: string;
    description: string[];
  };
}

export interface ILink {
  icon: string;
  text: string;
  href: string;
}

export interface IProduct {
  image: string;
  title: string;
  parts?: string[];
  category?: string;
  place?: string;
  date?: string;
  description?: string;
  links?: ILink[];
}

export interface IStack {
  name: string;
  image: string;
  skill: number;
  color: string;
  description: string;
}

export interface ISocial {
  name: string;
  icon: string;
  href: string;
}

export interface INavigation {
  name: string;
  href: string;
}

export interface IAvatar {
  image: string;
  contain?: boolean;
}
