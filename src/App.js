import UserFinder from './components/UserFinder';
// React-ContextAPI_Equivalent-Class_Based_Components
import UsersContext from './store/users-context';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

function App() {
  // React-ContextAPI_Equivalent-Class_Based_Components
  const usersContext = {
    users: DUMMY_USERS
  }

  return (
    // React-ContextAPI_Equivalent-Class_Based_Components
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;