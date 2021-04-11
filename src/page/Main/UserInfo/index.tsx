import { useFetchUserData } from '../../../api';
import Loader from '../../../components/Loader';
import style from './style.module.scss';

interface IProps {
    username: string;
}

const UserInfo = ({ username }: IProps) => {
    const { isLoading, data } = useFetchUserData(username);

    if (isLoading) {
        return <Loader />;
    }

    return data ? (
        <div className={style.container}>
            <div className={style.header}>
                <img
                    src={data.avatar_url}
                    alt="Selected user avatar"
                    className={style.avatar}
                />
                <h1 className={style.name}>{data.name}</h1>
            </div>

            <p className={style.bio}>{data.bio}</p>
        </div>
    ) : null;
};

export default UserInfo;
