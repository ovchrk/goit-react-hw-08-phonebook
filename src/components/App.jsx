import React, { useEffect } from 'react';
import { Container } from './Container';
import ContactsPage from '../pages/contacts'
// import { Form } from './Form';
// import { Filter } from './Filter';
// import { List } from './List';
// import { Loading } from './Loading';
// import { Error } from './Error';
import { fetchContacts } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { Navigation } from './Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from 'pages/register';


const App = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (<Container>
    <Navigation></Navigation>
    <Routes>
      <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
      <Route path='/login' element={<div>LOGIN PAGE</div>}></Route>
      <Route path='/contacts' element={<ContactsPage></ContactsPage>}></Route>
      <Route path='*' element={<RegisterPage></RegisterPage>}></Route>
    </Routes>
    </Container> )
}
export { App };