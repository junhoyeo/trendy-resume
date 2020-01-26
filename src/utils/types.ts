export interface IProduct {
  category: string;
  title: string;
  parts: string[];
  place: string;
  date: string;
  image: string;
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
