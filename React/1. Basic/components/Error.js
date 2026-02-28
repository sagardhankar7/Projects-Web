import { useRouteError } from "react-router";

const Error = () => {
    const errorObj = useRouteError()
    console.log(errorObj)
    return (
        <div>
            <h1>OOps </h1>
            <h2>Some thing went wrong</h2>
            <h4>{errorObj.status} : {errorObj.statusText}</h4>
        </div>
    )
}

export default Error;