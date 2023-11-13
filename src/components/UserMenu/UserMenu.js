import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectEmail } from 'redux/auth/authSelectors';
import { logout } from 'redux/auth/operations';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const email = useSelector(selectEmail);
  const dispatch = useDispatch();

  return (
    <div className={css.menu}>
      <Link to="/" className={css.link}>
        Home
      </Link>
      <Link to="/contacts" className={css.link}>
        Contacts
      </Link>
      <p className={css.email}>{email}</p>
      <button
        onClick={() => dispatch(logout())}
        type="button"
        className={css.btn}
      >
        Logout
      </button>
    </div>
  );
};
