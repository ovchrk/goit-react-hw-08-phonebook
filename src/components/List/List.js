import React, { useEffect } from 'react';
import css from '../List/List.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';
import { selectFilteredContacts } from 'redux/selectors';

export const List = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div>
      {filteredContacts.length > 0 ? (
        <ul className={css.box}>
          {filteredContacts?.map(({ id, name, number }) => (
            <li key={id} className={css.contacts__item}>
              &#8728; {name}: {number}{' '}
              <button
                type="button"
                className={css.button}
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className={css.box}>Contacts not found</div>
      )}
    </div>
  );
};
