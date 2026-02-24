import React from "react";
import ReactDOM from "react-dom/client";

let heading = React.createElement(
  "div", { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {key: "h1"}, "This is h1 tag"),
    React.createElement("h2", {key: "h2"}, "This is h2 tag"),
  ]),
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
