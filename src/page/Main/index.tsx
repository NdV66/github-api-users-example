import { useContext } from 'react';

import { useFetchUserData } from '../../api';
import Loader from '../../components/Loader';
import { StoreContext } from '../../store/context';
import UserInfo from './UserInfo';

const Main = () => {
    const { username } = useContext(StoreContext);
    const { isLoading, error, data } = useFetchUserData(username || '');

    if (isLoading) {
        return <Loader />;
    }

    return data ? <UserInfo {...data} /> : null;
};

export default Main;
