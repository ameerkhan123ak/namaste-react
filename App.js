const parent = React.createElement('div',{id:'parent'},
    [
        React.createElement('div',{id:'child-1'},
        [ 
            React.createElement('h1',{id:'heading-1'},'Iam heading 1'),
            React.createElement('h2',{id:'heading-2'}, 'Iam heading 2') 
        ]),
        React.createElement('div',{id:'child-2'},
        [ 
            React.createElement('h1',{id:'heading-1'},'Iam heading 1'),
            React.createElement('h2',{id:'heading-2'}, 'Iam heading 2') 
        ])
    ]
)

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);