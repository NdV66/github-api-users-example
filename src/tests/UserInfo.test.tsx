import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import * as ApiHelpers from '../api/helpers';
import { IUser } from '../api/interfaces';
import UserInfo from '../page/Main/UserInfo';

const USER: IUser = {
    name: 'Mairon',
    bio: 'bio bio bio here',
    avatar_url: 'http://avatars/avatar.jpeg',
    public_repos: 1,
};

const setup = () => {
    const queryClient = new QueryClient({
        defaultOptions: { queries: { retry: false } },
    });

    render(
        <QueryClientProvider client={queryClient}>
            <UserInfo username={USER.name} />
        </QueryClientProvider>
    );
};

describe('UserInfo', () => {
    test('Should render all elements, when data is ready', async () => {
        // @ts-ignore
        ApiHelpers.fetchUserData = jest.fn().mockResolvedValue(USER);
        setup();

        const name = await screen.findByText(USER.name);
        const avatar = await screen.findByAltText('Selected user avatar');
        const bio = await screen.findByText(USER.bio);

        expect(name).toBeInTheDocument();
        expect(avatar).toBeInTheDocument();
        expect(bio).toBeInTheDocument();
    });

    test('Should render loader', () => {
        // @ts-ignore
        ApiHelpers.fetchUserData = jest.fn();
        setup();

        expect(screen.getByTestId('loader')).toBeInTheDocument();
    });
});
