import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './pages.module.css';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    const newUser = { name, email, password };
    dispatch(register(newUser));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <>
      <h1>Registration Page</h1>
      <form className={css.form}>
        <label className={css.label}>
          name:
          <input
            name="name"
            type="text"
            value={name}
            onChange={handleChange}
            className={css.input}
            placeholder="Enter your name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          ></input>
        </label>
        <label className={css.label}>
          e-mail:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter your e-mail"
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
            placeholder="Please enter at least 7 symbols"
          ></input>
        </label>
        <button type="submit" onClick={handleSubmit} className={css.submit}>
          Register
        </button>
      </form>
    </>
  );
}
