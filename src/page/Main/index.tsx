import { useContext } from 'react';

import { StoreContext } from '../../store/context';
import ReposInfo from './ReposInfo';
import UserInfo from './UserInfo';

const Main = () => {
    const { username } = useContext(StoreContext);

    return username ? (
        <>
            <UserInfo username={username} />
            <ReposInfo username={username} />
        </>
    ) : null;
};

export default Main;
