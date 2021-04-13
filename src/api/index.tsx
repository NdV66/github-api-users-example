import { useQuery } from 'react-query';

import { fetchUserData, fetchUserReposWithStars } from './helpers';
import { IRepo, IUser } from './interfaces';

export const useFetchUserData = (username: string) => {
    const result = useQuery<IUser>(username, () => fetchUserData(username));
    return result;
};

export const useFetchUserRepositories = (username: string) => {
    const key = username + 'repos';
    const result = useQuery<IRepo[]>(key, () =>
        fetchUserReposWithStars(username)
    );

    return result;
};
