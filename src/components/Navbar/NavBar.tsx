import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';
import styles from './navbar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        <li>logo</li>
        <li>
          <div>
            <LoginButton />
            <LogoutButton />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
