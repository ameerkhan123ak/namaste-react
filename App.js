import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement('h1',{id:'heading'},'hello world from react hi worldfrom  🚀');

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);
