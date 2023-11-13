import { Error } from 'components/Error';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError } from 'redux/auth/authSelectors';
import { login } from 'redux/auth/operations';
import css from './pages.module.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        alert('Не знайдено потрібних значень.');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const user = { email, password };
    dispatch(login(user));
    setEmail('');
    setPassword('');
  };
  return (
    <>
      <h1>Log In Page</h1>
      <form className={css.form}>
        {error && <Error></Error>}
        <label className={css.label}>
          e-mail:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className={css.input}
          ></input>
        </label>
        <label className={css.label}>
          password:
          <input
            type="text"
            name="password"
            value={password}
            onChange={handleChange}
            className={css.input}
          ></input>
        </label>
        <button type="submit" onClick={handleSubmit} className={css.submit}>
          Log in
        </button>
      </form>
    </>
  );
}
