import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1>This is JXS (Behind the scene- React Element) Babel convert the Jsx to react element</h1>

const Component2 = () => (<h1>
    This is for Functional Composition, One functional component inside another component
</h1>)

const HeadingComponent = () => 
(
<div>Functional Component returns the jsx
    <Component2/>
    <div>This is another div</div> 
    {heading}
</div>

)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);

// Parcel do hot module replacement
