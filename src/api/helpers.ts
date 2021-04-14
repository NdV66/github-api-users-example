import { IRepo } from './interfaces';
import { API_USERS } from './urls';

const REPO_NUMBER = 3;

export const fetchUserReposWithStars = async (username: string) => {
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
};

export const fetchUserData = async (username: string) => {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> AAAAAAAAAAA');
    const data = await fetch(`${API_USERS}/${username}`);
    const json = await data.json();
    return json;
};
