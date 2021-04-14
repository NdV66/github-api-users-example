import { renderHook } from '@testing-library/react-hooks';
import { QueryClient, QueryClientProvider } from 'react-query';

import { useFetchUserData, useFetchUserRepositories } from '../api';
import * as ApiHelpers from '../api/helpers';
import { REPOS, USER } from './mocks';

interface IProps {
    children: React.ReactNode;
}
const setup = () => {
    const queryClient = new QueryClient();

    const wrapper = ({ children }: IProps) => (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );

    return wrapper;
};

describe('API', () => {
    test('Should be resolved correctly (useFetchUserData)', async () => {
        // @ts-ignore
        ApiHelpers.fetchUserData = jest.fn().mockResolvedValue(USER);
        const wrapper = setup();
        const { result, waitFor } = renderHook(
            () => useFetchUserData(USER.name),
            { wrapper }
        );

        await waitFor(() => result.current.isSuccess);

        expect(result.current.data).toEqual(USER);
    });

    test('Should be resolved correctly (useFetchUserData)', async () => {
        // @ts-ignore
        ApiHelpers.fetchUserReposWithStars = jest.fn().mockResolvedValue(REPOS);
        const wrapper = setup();
        const { result, waitFor } = renderHook(
            () => useFetchUserRepositories(USER.name),
            { wrapper }
        );

        await waitFor(() => result.current.isSuccess);

        expect(result.current.data).toEqual(REPOS);
    });
});
