import PropTypes from 'prop-types';

import {
  FriendList,
  FriendItem,
  Status,
  Avatar,
  Name,
} from './FriendList.styled';

export default function FriendListItem({ items }) {
  return (
    <FriendList>
      {items.map(({ id, avatar, name, isOnline }) => (
        <FriendItem key={id}>
          <Status isOnline={isOnline}>{isOnline}</Status>
          <Avatar src={avatar} alt="User avatar" width="48" />
          <Name className="name">{name}</Name>
        </FriendItem>
      ))}
    </FriendList>
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
