import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
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
import PrivateRoute from './PrivateRoute/PrivateRoute';
import MyJob from './Pages/MyJob.jsx';
import JobUpdate from './Pages/JobUpdate.jsx';
import AllJobs from './Pages/AllJobs.jsx';
import JobDetails from './Pages/JobDetails.jsx';
import AppliedJob from './Pages/AppliedJob.jsx';
import Userprofile from './Pages/Userprofile.jsx';
import Blog from './Pages/Blog.jsx';
import { HelmetProvider } from 'react-helmet-async';

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
        path: '/allJobs',
        element: <AllJobs />,
      },
      {
        path: '/addJobs',
        element: (
          <PrivateRoute>
            <AddJob />
          </PrivateRoute>
        ),
      },
      {
        path: '/jobDetails/:id',
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
      },
      {
        path: '/jobUpdate/:id',
        element: (
          <PrivateRoute>
            <JobUpdate />
          </PrivateRoute>
        ),
      },

      {
        path: '/myPostedJobs',

        element: (
          <PrivateRoute>
            <MyJob />
          </PrivateRoute>
        ),
      },
      {
        path: '/appliedJob',
        element: (
          <PrivateRoute>
            <AppliedJob />
          </PrivateRoute>
        ),
      },
      {
        path: '/userProfile',
        element: (
          <PrivateRoute>
            <Userprofile />
          </PrivateRoute>
        ),
      },
      {
        path: '/blogs',
        element: (
          <PrivateRoute>
            <Blog />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </QueryClientProvider>
      <ToastContainer />
    </AuthProvider>
  </React.StrictMode>
);
