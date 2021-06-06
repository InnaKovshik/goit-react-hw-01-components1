import React from 'react';
import PropTypes from 'prop-types';
import defaultImg from '../image/defaultImg.png';
import Stats from './Stats';

import s from './Profile.module.scss';

const Profile = ({ avatar, name, tag, location, stats }) => (
  <div className={s.profile}>
    <div className={s.description}>
      <img src={avatar} alt="Аватар пользователя" className={s.avatar} />
      <p className={s.name}>{name}</p>
      <p className={s.tag}>@{tag}</p>
      <p className={s.location}>{location}</p>
    </div>

    <Stats {...stats} />
  </div>
);

Profile.defaultProps = {
  avatar: defaultImg,
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
