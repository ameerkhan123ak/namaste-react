import React from 'react';
import ReactDOM from 'react-dom/client';

const HeadingComponent =  (
    <h1 id='heading'>This is Heading</h1>
)

const Container = (props) => (
    <div id='container'>
        <h1>This is heading inside container</h1>
        {/* <Container /> */}
    </div>
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Container color='red' />)
