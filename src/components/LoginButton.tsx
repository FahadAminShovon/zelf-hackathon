import { useAuth0 } from '@auth0/auth0-react';
import Button from './Button/Button';

const LoginButton = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  if (isAuthenticated) return <></>;
  return <Button onClick={() => loginWithRedirect()}>Sign in</Button>;
};

export default LoginButton;
