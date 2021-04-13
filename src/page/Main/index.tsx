import { useContext } from 'react';

import { StoreContext } from '../../store/context';
import NoDataInfo from './NoDataInfo';
import ReposInfo from './ReposInfo';
import UserInfo from './UserInfo';

const Main = () => {
    const { username } = useContext(StoreContext);

    return username ? (
        <>
            <UserInfo username={username} />
            <ReposInfo username={username} />
        </>
    ) : (
        <NoDataInfo />
    );
};

export default Main;
