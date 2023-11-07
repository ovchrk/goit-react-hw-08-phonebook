import React, { useEffect } from 'react';
import { Container } from './Container';
import ContactsPage from './pages/contacts'
import { fetchContacts } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { AppBar } from './AppBar/AppBar';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/register';
import LoginPage from './pages/login';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (<Container>
    <AppBar></AppBar>
    <Routes>
      <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
      <Route path='/login' element={<LoginPage></LoginPage>}></Route>
      <Route path='/contacts' element={<ContactsPage></ContactsPage>}></Route>
      <Route path='*' element={<RegisterPage></RegisterPage>}></Route>
    </Routes>
    </Container> )
}
export { App };