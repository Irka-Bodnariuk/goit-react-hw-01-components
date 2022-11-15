import PropTypes from 'prop-types';

export default function FriendListItem({ items }) {
  return (
    <ul className="friend-list">
      {items.map(({ id, avatar, name, isOnline }) => (
        <li className="item" key={id}>
          <span className="status">{isOnline}</span>
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
          <p className="name">{name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendListItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
