import { IRepo } from '../../../api/interfaces';
import style from './style.module.scss';

const RepoPanel = ({ name, stargazers_count, html_url }: IRepo) => (
    <div className={style.repoPanel}>
        <a href={html_url}>{name}</a>
    </div>
);

export default RepoPanel;
