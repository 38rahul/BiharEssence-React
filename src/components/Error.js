 import {useRouteError} from "react-router";

const Error = () => {

    const err = useRouteError();
    console.log(err.data);

    return (
        <div>
            <h1>Opps!!!</h1>
            <h1>Something went wrong!!</h1>
             <h1>{err.data}.</h1>
        </div>
    )
}

export default Error;