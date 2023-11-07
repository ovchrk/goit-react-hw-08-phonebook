import { Link } from 'react-router-dom';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  return (
    <div className={css.menu}>
      <Link to="/contacts" className={css.link}>
        Contacts
      </Link>
      <p className={css.email}>mango@mail.com</p>
      <button type="button" className={css.btn}>
        Logout
      </button>
    </div>
  );
};
