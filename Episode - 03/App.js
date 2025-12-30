import React from "react";
import ReactDOM from "react-dom/client";


// React.createElement => JS Object => HTMLElement(render)
const heading = React.createElement("h1", {id: "heading"}, "Namaste React");
console.log(heading); //React.createElement => returns Object


// JSX => is not HTML in js. It is html or xml like symbol
// JSX => transpile befor it reached the JS engine => transpiling this code is done by PARCEL through "Babel" 
// JSX code => converted to React.createElement => converted to JS object => HTMLElement(render)
const jsxHeading = (<h1 className="heading" tabIndex="1"> JSX h1 Heading </h1>);
console.log(jsxHeading);

// REACT Component
// 1. class based components - old
// 2. functional components - new

// React functional component => is normal js function which retrun JSX.
const HeadingComponent = () => {
    return <h1 className="heading">I'm REACT functional component heading</h1>;
}
// Simillar to above
// const HeadingComponent2 = () => <h1 className="heading">I'm REACT functional component heading</h1>;


// Title component
// Component composition
const TitleComponent = () => (
    <div>
        <FunTitleComponent />
        <HeadingComponent />
        <h2 className="heading-2" tabIndex="2">I'm H2 Heading from title component</h2>
        <JsInsideJsxComponent />
        <ElementInsideComponent />
        {ele2}
        <FunCompInsideComponent />
    </div>
)

// Fucntion component with Normal function
const FunTitleComponent = function() {
    return (
        <div>
            <h2 className="heading-2" tabIndex="2">I'm H2 Heading from Function title component</h2>
        </div>
    );
}

// Running JS code in JSX
const JsInsideJsxComponent = () => (
    <div>
        <h5>I'm from Running JS code in JSX component</h5>
        <p>{100 + 300}</p>
    </div>
)

// React element inside functional component
const title = (<span>I'm REACT element named as title</span>);

const ElementInsideComponent = () => (
    <div>
        {title}
        <p>I'm from Element Inside Component</p>
    </div>
)

// REACT Elememt inside REACT element
const ele = (<p>I'm 1st react elememt</p>);

const ele2 = (
    <div>
        {ele}
        <p>I'm 2st react elememt</p>
    </div>
);


// Calling function component as a function inside a component
const FunCompInsideComponent = () => (
    <div>
        {/* calling function component as a function inside a component */}
        {FunTitleComponent()}
        <FunTitleComponent />
        <FunTitleComponent></FunTitleComponent>
        <p>I'm from Element Inside Component</p>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(heading);
// root.render(jsxHeading);
root.render(<TitleComponent />);
