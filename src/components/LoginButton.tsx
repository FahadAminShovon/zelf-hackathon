import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  if (isAuthenticated) return <></>;
  return <button onClick={() => loginWithRedirect()}>Sign in</button>;
};

export default LoginButton;
