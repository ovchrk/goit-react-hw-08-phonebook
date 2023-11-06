import { Form } from '../components/Form/Form';
import { Filter } from '../components/Filter/Filter';
import { List } from '../components/List/List';
import { Loading } from 'components/Loading';
import { Error } from 'components/Error';
import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../redux/selectors';

export default function ContactsPage() {
  const contact = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <>
      <h1>Phonebook</h1>
      <Form></Form>
      <h2>Contacts</h2>
      <Filter></Filter>
      {isLoading && <Loading></Loading>}
      {contact?.length > 0 && <List></List>}
      {error && <Error></Error>}
    </>
  );
}
