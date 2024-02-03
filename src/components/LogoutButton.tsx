import { useAuth0 } from '@auth0/auth0-react';
import Button from './Button/Button';

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  if (!isAuthenticated) return <></>;

  return (
    <Button
      variant='ghost'
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
