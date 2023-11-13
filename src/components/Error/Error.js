import React from 'react';
import { useSelector } from 'react-redux';
import { selectError } from 'redux/auth/authSelectors';
import css from '../Error/Error.module.css';

export const Error = () => {
  const error = useSelector(selectError);
  return (
    <div className={css.box}>
      {error}. Please enter a valid e-mail and password.
    </div>
  );
};
