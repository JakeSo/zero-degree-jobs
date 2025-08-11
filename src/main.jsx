import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import Welcome from './pages/employer/Welcome/Welcome';
import Login from './pages/Login/Login';
import AuthCallback from './pages/AuthCallback/AuthCallback';
import { Provider } from './components/ui/provider';
import ErrorPage from './pages/ErrorPage';
import JobSearch from './pages/JobSearch/JobSearch';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Login",
        element: <Login />
      },
      { 
        path: "/Employer/Welcome", 
        element: <Welcome /> 
      },
      {
        path: "/job-search",
        element: <JobSearch />,
        loader: async ({ request }) => {
          const url = new URL(request.url);
          const jobType = url.searchParams.get('jobType') || '';
          const location = url.searchParams.get('location') || '';
          return { jobType, location };
        }
      },
      // {
      //   path: "/login",
      //   element: <Login />,
      // },
      {
        path: "/auth/callback",
        element: <AuthCallback />,
      }
    ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Provider>
        <RouterProvider router={router} />
      </Provider>    
    </React.StrictMode>
);


