import React from 'react';
import ReactDOM from 'react-dom/client';

const HeadingComponent = () =>  (
    <h1 id='heading'>This is Heading</h1>
)

const Component = () => (
    <div id='container'>
        <h1>This is heading</h1>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Component />)
