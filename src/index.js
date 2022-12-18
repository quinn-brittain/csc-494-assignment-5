import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import "bootswatch/dist/darkly/bootstrap.min.css";
import './index.css';
import Nav from './Nav'
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <main>
      <div className="app-container card border-secondary mb-3">
        <div className="card-body">
          <App />
        </div>
      </div>
    </main>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
