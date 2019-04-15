export class Link {
  id: string;
  description: string;
  url: string;
  createdAt: string;
}

export class User {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  email: string;
  password: string;
  links: [Link];
}

export interface Post {
  id: string;
  keywords: string[];
  title: string;
}
