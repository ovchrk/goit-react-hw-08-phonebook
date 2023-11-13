import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import css from '../AppBar/AppBar.module.css';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <nav className={css.box}>
        {isLoggedIn ? <UserMenu></UserMenu> : <Navigation></Navigation>}
      </nav>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
