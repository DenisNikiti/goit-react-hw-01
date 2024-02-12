import PropTypes from "prop-types";

import css from "./Profile.module.css";

function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.profile}>
      <div className="description">
        <img src={image} alt="User avatar" className="avatar" />
        <p className="name">{name}</p>
        <p className={css.text}>@{tag}</p>
        <p className={css.text}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className="label">Followers</span>
          <span className="value">{followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="value">{views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="value">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
};

export default Profile;
