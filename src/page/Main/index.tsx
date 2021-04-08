import { useContext } from 'react';

import { useFetchUserData } from '../../api';
import Loader from '../../components/Loader';
import { StoreContext } from '../../store/context';

const Main = () => {
    const { username } = useContext(StoreContext);
    const { isLoading, error, data } = useFetchUserData(username || '');

    return isLoading ? <Loader /> : <div>{data?.name}</div>;
};

export default Main;
