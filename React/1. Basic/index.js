import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1>This is JXS (Behind the scene- React Element) Babel convert the Jsx to react element</h1>

const HeadingComponent = () => 
(
<div>Functional Component returns the jsx

    <div>This is another div</div>
</div>

)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);

// Parcel do hot module replacement
