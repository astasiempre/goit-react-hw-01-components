export default function FriendList({friends}) {
    return ( 
        <ul className="friend-list">
            {friends.map((friend) => (
                <li key={friend.id}>{friend.name}</li>
    ))}
    </ul>
    );
};

