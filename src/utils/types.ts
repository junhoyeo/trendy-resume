export interface ILink {
  icon: string;
  text: string;
  href: string;
}

export interface IProduct {
  category?: string;
  title: string;
  parts?: string[];
  place?: string;
  date?: string;
  image: string;
  desc?: string;
  links?: ILink[];
}

export interface IStack {
  name: string;
  image: string;
  skill: number;
  color: string;
  desc: string;
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
