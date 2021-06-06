import Profile from './components/Profile';
import user from './data/user.json';

import Statistics from './components/Statistics';
import statisticalData from './data/statistical-data.json';

import FriendList from './components/FriendList';
import dataFriend from './data/friends.json';

import Transaction from './components/Transaction';
import transactions from './data/transactions.json';

const App = () => {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics items={statisticalData} />
      <FriendList friends={dataFriend} />
      <Transaction transaction={transactions} />
    </div>
  );
};

export default App;
