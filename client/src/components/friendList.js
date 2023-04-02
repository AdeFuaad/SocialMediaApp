// FriendList.js
const FriendList = ({ friends, handleFriendClick }) => {
    return (
      <div>
        <h2>Friend List</h2>
        <ul>
          {friends.map((friend) => (
            <li key={friend.id} onClick={() => handleFriendClick(friend.id)}>
              {friend.name}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default FriendList;
  