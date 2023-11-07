import React, { useEffect } from 'react';
import { Container } from './Container';
import ContactsPage from './pages/contacts'
import { fetchContacts } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { Navigation } from './Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/register';
import LoginPage from './pages/login';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (<Container>
    <Navigation></Navigation>
    <Routes>
      <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
      <Route path='/login' element={<LoginPage></LoginPage>}></Route>
      <Route path='/contacts' element={<ContactsPage></ContactsPage>}></Route>
      <Route path='*' element={<RegisterPage></RegisterPage>}></Route>
    </Routes>
    </Container> )
}
export { App };

// import React, { useEffect } from 'react';
// import { Container } from './Container';
// import { Form } from './Form';
// import { Filter } from './Filter';
// import { List } from './List';
// import { Loading } from './Loading';
// import { Error } from './Error';
// import { Navigation } from './Navigation/Navigation';
// import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
// import { fetchContacts } from 'redux/operations';
// import { useDispatch, useSelector } from 'react-redux';


// const App = () => {
//   const dispatch = useDispatch();
//   const contact = useSelector(selectContacts);
//   const isLoading = useSelector(selectIsLoading);
//     const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (<Container>
//     <Navigation></Navigation>
//           <h1>Phonebook</h1>
//     <Form></Form>
//         <h2>Contacts</h2>
//     <Filter></Filter>
//     {isLoading && <Loading></Loading>}
//     {contact?.length > 0 && <List></List>}
//     {error && <Error></Error>}
    
//     </Container> )
// }
// export { App };