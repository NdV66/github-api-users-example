import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import * as ApiHelpers from '../api/helpers';
import { IRepo } from '../api/interfaces';
import ReposInfo from '../page/Main/ReposInfo';

const REPOS: IRepo[] = [
    {
        name: 'my-test-repo-name',
        stargazers_count: 5,
        html_url: 'https://link/here.git',
    },
];

const setup = () => {
    const queryClient = new QueryClient();

    render(
        <QueryClientProvider client={queryClient}>
            <ReposInfo username="Mairon" />
        </QueryClientProvider>
    );
};

describe('ReposInfo', () => {
    test('Should render all elements, when data is ready', async () => {
        // @ts-ignore
        ApiHelpers.fetchUserReposWithStars = jest.fn().mockResolvedValue(REPOS);
        setup();

        const header = await screen.findByText('Top repositories');
        const repoName = await screen.findByText(REPOS[0].name);

        expect(header).toBeInTheDocument();
        expect(repoName).toBeInTheDocument();
    });

    test('Should render loader', () => {
        // @ts-ignore
        ApiHelpers.fetchUserReposWithStars = jest.fn();
        setup();

        expect(screen.getByTestId('loader')).toBeInTheDocument();
    });
});
