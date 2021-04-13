import { useContext } from 'react';

import { StoreContext } from '../../store/context';
import NoDataInfo from './NoDataInfo';
import ReposInfo from './ReposInfo';
import UserInfo from './UserInfo';

const Main = () => {
    const { username } = useContext(StoreContext);

    return username ? (
        <>
            <UserInfo username={username} data-testid="userInfo" />
            <ReposInfo username={username} data-testid="reposInfo" />
        </>
    ) : (
        <NoDataInfo />
    );
};

export default Main;
