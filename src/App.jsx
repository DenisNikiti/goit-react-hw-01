import userData from "./data/Userdata.json";
import friendData from "./data/friends.json";
import transactionHistoryData from "./data/TransactionHistory.json";
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

      <FriendList friends={friendData} />
      <TransactionHistory history={transactionHistoryData} />
    </div>
  );
}

export default App;
