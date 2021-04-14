import { IRepo, IUser } from '../api/interfaces';

export const REPOS: IRepo[] = [
    {
        name: 'my-test-repo-name',
        stargazers_count: 5,
        html_url: 'https://link/here.git',
    },
];

export const USER: IUser = {
    name: 'Mairon',
    bio: 'bio bio bio here',
    avatar_url: 'http://avatars/avatar.jpeg',
    public_repos: 1,
};
