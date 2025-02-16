import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Home from './pages/Home/Home';
import Welcome from './pages/employer/Welcome/Welcome';
import Login from './pages/Login/Login';
import AuthCallback from './pages/AuthCallback/AuthCallback';
import { Provider } from './components/ui/provider';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
  <GoogleOAuthProvider clientId='614958260904-f7c9aqfgcc0em6p4d9fgemnagtl2lf9o.apps.googleusercontent.com'>
    <React.StrictMode>
      <Provider>
        <RouterProvider router={router} />
      </Provider>    
    </React.StrictMode>
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
