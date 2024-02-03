import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';
import styles from './navbar.module.css';
import userAvatar from '../../assets/avatar.png';

const NavBar = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        <li>logo</li>
        <li>
          <div className={styles.actionButtons}>
            <LoginButton />
            <LogoutButton />
            {isAuthenticated && (
              <img src={userAvatar} className={styles.userAvatar} />
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
