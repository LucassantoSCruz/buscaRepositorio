export type User = {
  login: string;
  avatar_url: string | null;
  public_repos: number;
  followers: number;
  following: number;
  bio: string | null;
  location?: string | null;
  company?: string | null;
  blog?: string | null;
};

export type Users = {
  id: string;
  login: string;
  avatar_url: string | null;
  type: string;
};
