import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Single from './pages/Single';
import Write from './pages/Write';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './style.scss';

const Layout = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },

      {
        path: '/write',
        element: <Write />,
      },
      {
        path: '/single',
        element: <Single />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

function App() {
  return (
    <div>
      <div className='app'>
        <div className='container'>
          <RouterProvider router={router} />
        </div>
      </div>
    </div>
  );
}

export default App;
