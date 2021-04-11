import { IUser } from '../../../api';
import style from './style.module.scss';

const UserInfo = ({ avatar_url, bio, name }: IUser) => (
    <div className={style.container}>
        <div className={style.header}>
            <img
                src={avatar_url}
                alt="Selected user avatar"
                className={style.avatar}
            />
            <span className={style.name}>{name}</span>
        </div>

        <p className={style.bio}>{bio}</p>
    </div>
);

export default UserInfo;
