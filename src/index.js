import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, useLocation} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();

const Scroller = () => {
  const {pathname} = useLocation();
  useEffect(
    () => window.scrollTo(0, 0), [pathname]
  );
  return null;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <QueryClientProvider client={client}>
  <Router basename='/'>
    <Scroller />
    <App />
  
  </Router>
  </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
