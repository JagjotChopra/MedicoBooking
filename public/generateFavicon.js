// generateFavicon.js
import React from 'react';
import ReactDOM from 'react-dom';
import { toPng } from 'html-to-image';
import IconComponent from './src/IconComponent';

const App = () => (
  <div id="icon-container" style={{ display: 'inline-block', padding: '10px' }}>
    <IconComponent />
  </div>
);

document.body.innerHTML = '<div id="root"></div>';
ReactDOM.render(<App />, document.getElementById('root'));

setTimeout(() => {
  const node = document.getElementById('icon-container');
  toPng(node)
    .then((dataUrl) => {
      const link = document.createElement('a');
      link.download = 'favicon.png';
      link.href = dataUrl;
      link.click();
    })
    .catch((error) => {
      console.error('oops, something went wrong!', error);
    });
}, 1000);
