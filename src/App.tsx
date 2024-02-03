import { useAuth0 } from '@auth0/auth0-react';
import styles from './app.module.css';
import NavBar from './components/Navbar/NavBar';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
// import Footer from './components/Footer/Footer';

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className={styles.overAll}>
      <NavBar />
      {isAuthenticated && (
        <div className={styles.contentContainer}>
          <div className={styles.homeContainer}>
            <Home />
          </div>
          {/* <Footer /> */}
        </div>
      )}
      {!isAuthenticated && <Login />}
    </div>
  );
}

export default App;
