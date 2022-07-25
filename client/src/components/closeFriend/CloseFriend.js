import "./closeFriend.css";
export default function CloseFriend({ friend }) {
  return (
    <li className="sidebarFriend">
      <img src={friend.profilePicture} alt="" className="sidebarFriendImg" />
      <span className="sidebarFriendName">{friend.username}</span>
    </li>
  );
}
