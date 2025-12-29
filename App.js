// const heading = React.createElement('h1', {id: 'heading'}, "Hello From Rahul's REACT");

// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);



// ====================================================================

// Example 2
/*

<div id='parent'>
    <div id='child'>
        <h1>Heading</h1>
    </div>
</div>

*/

// const parent = React.createElement('div', {id: 'parent'}, 
//     React.createElement('div', {id: 'child'}, 
//         React.createElement('h1', {}, 'Parent - child Example')
//     ),
// );

// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(parent);



// ====================================================================

// Example 3
/*

<div id='parent'>
    <div id='child'>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
    </div>
</div>

*/

const parent = React.createElement('div', {id: 'parent'}, 
    React.createElement('div', {id: 'child'}, 
        [
            React.createElement('h1', {id: 'child1'}, 'Heading 1'),
            React.createElement('h2', {id: 'child2'}, 'Heading 2')
        ]
    ),
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);