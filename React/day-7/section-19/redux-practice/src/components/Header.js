import { authActions } from '../store/index';
import classes from './Header.module.css';
import { useDispatch,useSelector } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch()
  const auth = useSelector(state=>state.auth)
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            {auth.isAuthenticated?<button onClick={()=>dispatch(authActions.logout())}>Logout</button>:<button onClick={()=>dispatch(authActions.login())}>Login</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
