import React from 'react';
import ReactDOM from 'react-dom/client';

const x = 4;

const Heading = () => (
    <>
      <h1>This is Heading from Function Component</h1>
      <h1>This is Heading from Function Component</h1>
      <h1>This is Heading from Function Component</h1>
    </>
)
console.log(Heading())



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Heading/>)