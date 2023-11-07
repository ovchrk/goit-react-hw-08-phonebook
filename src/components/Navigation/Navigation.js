import { Link } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
  return (
    <>
      <Link to="/register" className={css.link}>
        Register
      </Link>
      <Link to="/login" className={css.link}>
        Login
      </Link>
    </>
  );
};
