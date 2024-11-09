import Counter from './components/Counter';
import Header from './components/Header';
import UserProfile from './components/UserProfile';


import { useSelector } from 'react-redux';
function App() {
  const auth = useSelector(state=>state.auth)
  
  
  return (
    <>
      <Header></Header>
      {auth.isAuthenticated && <UserProfile/>}
      <Counter />
    </>
  );
}

export default App;
