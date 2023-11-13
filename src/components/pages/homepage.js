import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import css from './pages.module.css';

export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log(`logged`, isLoggedIn);
  return (
    <main>
      <h1 className={css.title}>
        Welcome to your <span className={css.accent}>private phonebook</span>
      </h1>
      <p className={css.text}>
        your ultimate solution for managing your contacts effortlessly and
        efficiently, all wrapped up in an irresistibly cute design.
      </p>
      <ul className={css.list}>
        <li className={css.item}>
          <b className={css.accent}>Discover Seamless Contact Management: </b>
          Simplify your life by organizing your contacts in one place,
          accessible anytime, anywhere, all within an interface adorned with
          charming and adorable illustrations.
        </li>
        <li className={css.item}>
          <b className={css.accent}>User-Friendly Interface:</b> Our intuitive
          design ensures a hassle-free experience, featuring playful icons and
          delightful color schemes that make adding, editing, and deleting
          contacts a delightful experience.
        </li>
        <li className={css.item}>
          <b className={css.accent}>Efficient Search Functionality:</b> Easily
          locate contacts by name with a delightful search bar, ensuring you can
          find the right person with a touch of whimsy added to your day.
        </li>
        <li className={css.item}>
          <b className={css.accent}>Secure Data Storage: </b>Rest easy knowing
          your contacts are safe and secure with our advanced encryption
          technology, all while enjoying the app's cute and cheerful aesthetics.
        </li>
        <li className={css.item}>
          <b className={css.accent}> Never Lose a Number: </b>Backup and restore
          your contacts effortlessly with a sprinkle of cuteness, ensuring your
          valuable information is safeguarded against unexpected loss or device
          changes.
        </li>
        <li className={css.item}>
          <b className={css.accent}>Effortless Registration: </b>Get started in
          seconds with our quick and easy registration process, featuring
          adorable animations and cheerful prompts that make setting up your
          account a delightful endeavor.
        </li>
        <li className={css.item}>
          <b className={css.accent}>Reliable and Fast:</b> Experience
          lightning-fast performance and reliable service, ensuring you can
          access your contacts instantly, even in low-network areas, with a
          design that remains consistently delightful.
        </li>
        <li className={css.item}>
          <b className={css.accent}>Start Organizing Today: </b>Take the first
          step towards a clutter-free, organized life while indulging in the
          cuteness of our app's design. Register now to begin your journey to
          seamless, delightful contact management!
        </li>
      </ul>
      {isLoggedIn ? (
        <Link to="/contacts" className={css.link}>
          Contacts
        </Link>
      ) : (
        <div>
          <Link to="/register" className={css.link}>
            register
          </Link>
          <Link to="/login" className={css.link}>
            log in
          </Link>
        </div>
      )}
    </main>
  );
}
