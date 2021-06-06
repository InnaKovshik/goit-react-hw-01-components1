import s from './FriendListItem.module.scss';

const FriendListItem = ({ id, name, isOnline, avatar }) => {
  const statusClassName = isOnline ? s.online : s.offline;
  const statusClass = `${s.status} ${statusClassName}`;

  return (
    <li key={id} className={s.item}>
      <span className={statusClass}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
