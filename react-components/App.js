import ReactDOM from "react-dom/client";

const header = <h1>This is for components</h1>;

const HeadingComponent = () => <h1>This is a React Functional component</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
