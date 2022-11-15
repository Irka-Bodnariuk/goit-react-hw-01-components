import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

export default function FriendList({ friends }) {
  return (
    <>
      <FriendListItem items={friends} />
    </>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
