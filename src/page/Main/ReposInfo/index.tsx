import { useFetchUserRepositories } from '../../../api';
import Loader from '../../../components/Loader';
import RepoPanel from './RepoPanel';
import style from './style.module.scss';

interface IProps {
    username: string;
}

const ReposInfo = ({ username }: IProps) => {
    const { isLoading, data } = useFetchUserRepositories(username);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className={style.container}>
            <h2>Top repositories</h2>
            {data?.map((el) => (
                <RepoPanel key={el.name} {...el} />
            ))}
        </div>
    );
};

export default ReposInfo;