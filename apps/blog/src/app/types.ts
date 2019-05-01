export class User {
  id: string;
  createdAt?: string;
  updatedAt?: string;
  name: string;
  email?: string;
  password?: string;
  posts?: Post[];
}

export interface Post {
  id: string;
  keywords: string[];
  title: string;
  content?: string;
  postedBy?: User;
}
