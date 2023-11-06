import css from './pages.module.css';

export default function RegisterPage() {
  return (
    <>
      <h1>Registration Page</h1>
      <form className={css.form}>
        <label className={css.label}>
          name:
          <input type="text" name="name" className={css.input}></input>
        </label>
        <label className={css.label}>
          e-mail:
          <input type="email" name="email" className={css.input}></input>
        </label>
        <label className={css.label}>
          password:
          <input type="text" name="password" className={css.input}></input>
        </label>
        <button type="submit" className={css.btn}>
          Register
        </button>
      </form>
    </>
  );
}
