import userData from "./data/Userdata.json";
import FriendData from "./data/friends.json";
import TransactionHistoryData from "./data/TransactionHistory.json";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
function App() {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={FriendData} />
      <TransactionHistory history={TransactionHistoryData} />
    </div>
  );
}

export default App;
