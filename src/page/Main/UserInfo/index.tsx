import { IUser } from '../../../api';

const UserInfo = ({ avatar_url, bio, name }: IUser) => (
    <div>
        <div>{avatar_url}</div>
        <div>{name}</div>
        <div>{bio}</div>
    </div>
);

export default UserInfo;
