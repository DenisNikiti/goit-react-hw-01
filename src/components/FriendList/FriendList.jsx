import FriendListItem from "../FriendListItem/FriendListItem";
import PropTypes from "prop-types";

import css from "./FriendList.module.css";
function FriendList({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default FriendList;
