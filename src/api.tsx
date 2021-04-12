import { useQuery } from 'react-query';

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

const API_URL = 'https://api.github.com';
const API_USERS = `${API_URL}/users`;

const resolveFetch = (res: Response) => res.json();

export const useFetchUserData = (username: string) => {
    const result = useQuery<IUser>(username, () =>
        fetch(`${API_USERS}/${username}`).then(resolveFetch)
    );

    return result;
};

export const useFetchUserRepositories = (username: string) => {
    const result = useQuery<IRepo[]>(username + 'repos', async () => {
        const data = await fetch(`${API_USERS}/${username}/repos`);
        const postsData = await data.json();
        return postsData;
    });

    return result;
};
