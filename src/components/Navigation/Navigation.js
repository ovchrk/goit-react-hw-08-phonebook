import { Link } from 'react-router-dom';
import css from '../Navigation/Navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={css.box}>
      <Link to="/register" className={css.link}>
        Register
      </Link>
      <Link to="/login" className={css.link}>
        Login
      </Link>
      <Link to="/contacts" className={css.link}>
        Contacts
      </Link>
    </nav>
  );
};
