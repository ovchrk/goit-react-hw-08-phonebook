import React, { useState } from 'react';
import css from '../Form/Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        alert('Не знайдено потрібних значень.');
    }
  };

  const handleSubmit = e => {
    const contact = { name, number };
    e.preventDefault();
    ///Проверка на наличие контакта в списке контактов
    const inList = contacts.some(prevContact => prevContact.name === name);
    if (inList) {
      alert(`${name} is already in your list`);
      return;
    }
    //Если проверка не сработала, выполняется дальше этот код.
    dispatch(addContact(contact));
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name: <br></br>
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          autoComplete="true"
        />
      </label>
      <label className={css.label}>
        Number: <br></br>
        <input
          className={css.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={css.submit}>
        Add contact
      </button>
    </form>
  );
};

export { Form };
