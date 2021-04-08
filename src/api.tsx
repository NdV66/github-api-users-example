import { useQuery } from 'react-query';

export interface IUser {
    avatar_url: string;
    name: string;
    bio: string;
}

const API_URL = 'https://api.github.com';
const API_USERS = `${API_URL}/users`;

export const useFetchUserData = (username: string) => {
    const result = useQuery<IUser>(username, () =>
        fetch(`${API_USERS}/${username}`).then((res) => res.json())
    );

    return result;
};
