import PropTypes from 'prop-types';

// avatar - посилання на аватар
// name - ім'я друга
// isOnline - буль, що сигналізує про стан друга: в мережі або ні.

export default function FriendList() {
  return (
    <ul class="friend-list">
      {/* <!-- Довільна кіл-сть FriendListItem --> */}
    </ul>
  );
}

const friendItem = () => {
  return (
    <li class="item">
      <span class="status"></span>
      <img class="avatar" src="" alt="User avatar" width="48" />
      <p class="name"></p>
    </li>
  );
};
