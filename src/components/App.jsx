import React, { lazy, useEffect } from 'react';
import { Container } from './Container';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar } from './AppBar/AppBar';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
// import { fetchContacts } from 'redux/operations';
import { refreshCurrentUser } from 'redux/auth/operations';
import { Loading } from './Loading';
import { selectIsRefreshing } from 'redux/auth/authSelectors';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';


const HomePage = lazy(() => import('./pages/homepage'));
const RegisterPage = lazy(() => import('./pages/register'));
const LoginPage = lazy(() => import('./pages/login'));
const ContactsPage = lazy(() => import('./pages/contacts'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshCurrentUser())
  }, [dispatch])

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (<Container>
    <Toaster
  position="top-right"
  reverseOrder={false}
/>
    {isRefreshing ? <Loading></Loading> : <Routes>
      <Route path='/' element={<AppBar></AppBar>}>
        <Route index element={<HomePage></HomePage>}></Route>
          <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        {/* <Route path='/register' element={<RegisterPage></RegisterPage>}></Route> */}
                <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        {/* <Route path='/login' element={<LoginPage></LoginPage>}></Route> */}
          <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
          {/* <Route path='/contacts' element={<ContactsPage></ContactsPage>}></Route> */}
          {/* <Route path='*' element={<HomePage></HomePage>}></Route> */}
      </Route>
    </Routes>} 
    {}
    </Container> )
}
export { App };