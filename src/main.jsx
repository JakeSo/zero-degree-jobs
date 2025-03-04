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


