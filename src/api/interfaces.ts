export interface IUser {
    avatar_url: string;
    name: string;
    bio: string;
    public_repos: number;
}

export interface IRepo {
    name: string;
    stargazers_count: number;
    html_url: string;
}
