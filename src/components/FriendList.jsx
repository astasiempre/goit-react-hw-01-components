export default function FriendList({friends}) {
    return ( 
        <ul class="friend-list">
            <p>Friendslist</p>
            {friends.map((friend) => (
                <li key={friend.id}>{friend.name}</li>
    ))}
    </ul>
    );
};

