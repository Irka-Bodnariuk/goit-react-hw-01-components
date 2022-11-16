import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { Friendbox } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <Friendbox>
      <FriendListItem items={friends} />
    </Friendbox>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
