import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Roots from './Component/Roots.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import HomePage from './Pages/HomePage.jsx';
import LoginPage from './Pages/LoginPage.jsx';
import Register from './Pages/Register.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import AddJob from './Pages/AddJob.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Roots />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/addJobs',
        element: <AddJob />,
      },
      // {
      //   path: '/allJobs',
      //   element: <ALlJobs />,
      // },
      // {
      //   path: '/addJob',
      //   element: <AddJob />,
      // },
      // {
      //   path: '/myPostedJob',

      //   element: (
      //     <PrivateRoute>
      //       <MyPostedJob />
      //     </PrivateRoute>
      //   ),
      // },
    ],
  },
]);
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
      <ToastContainer />
    </AuthProvider>
  </React.StrictMode>
);
