import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import { getToken, getIsFetching } from 'redux/authSlice';
import HomePage from 'pages/HomePage';
import Navigation from 'components/Navigation/Navigation';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';
import { useGetCurrentUserQuery } from 'redux/authAPI';
import { Loader } from 'components/Loader/Loader';

const Contacts = lazy(() => import('pages/ContactsPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterView = lazy(() => import('pages/RegisterPage'));
const NotFoundPage = lazy(() => import('pages/PageNotFound'));

const App = () => {
  const token = useSelector(getToken);
  const isFetching = useSelector(getIsFetching);
  useGetCurrentUserQuery(null, { skip: !token });
  return (
    
    <>
    <Navigation />
    {isFetching &&
      <Loader />
    }
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={
                <PublicRoute restricted>
                  <RegisterView />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute restricted>{!token && <LoginPage />}</PublicRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <Contacts />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
    )
};

export default App;
