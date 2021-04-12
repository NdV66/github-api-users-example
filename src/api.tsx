import { useQuery } from 'react-query';

const REPO_NUMBER = 3;

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

        const repos: IRepo[] = await data.json();
        const filteredData = repos.filter((el) => !!el.stargazers_count);
        const sortedData = filteredData.sort((a, b) => {
            if (a.stargazers_count > b.stargazers_count) {
                return -1;
            }
            if (a.stargazers_count < b.stargazers_count) {
                return 1;
            }
            return 0;
        });

        const mostTrendingRepos = sortedData.slice(0, REPO_NUMBER);
        return mostTrendingRepos;
    });

    return result;
};
