import s from './FriendList.module.scss';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  if (friends.length === 0) return null;
  return <ul className={s.friendList}>{friends.map(FriendListItem)}</ul>;
};

export default FriendList;
