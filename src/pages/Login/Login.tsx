import { useAuth0 } from '@auth0/auth0-react';
import Button from '../../components/Button/Button';
import styles from './login.module.css';

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className={styles.container}>
      <div className={styles.loginWrapper}>
        <div className={styles.placeholder} />
        <div className={styles.loginContainer}>
          <h6 className={styles.registerBrand}>Register your brand</h6>
          <label className={styles.label}>
            <input type='radio' />I Represent a Brand
          </label>
          <Button className={styles.login}>Continuer</Button>
          <p>
            Already a member?{' '}
            <span
              className={styles.signIn}
              onClick={() => {
                loginWithRedirect();
              }}
            >
              Sign in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
