import Profile from "components/profile";
import Statistics from "components/statistic";
import FriendList from "components/friendList";
import TransactionHistory from "components/transaction";

import user from "components/profile/user.json";
import data from "components/statistic/data.json";
import friends from "components/friendList/friends.json";
import transactions from "components/transaction/transactions.json";

const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
