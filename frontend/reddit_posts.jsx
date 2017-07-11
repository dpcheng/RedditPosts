import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

const Root = () => {
    return (
      <main>
        <App />
      </main>
    );
};

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});
