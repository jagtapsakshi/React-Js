import React from "react";

//passed as arguments in the component
function FunctionProps(props){
    return (
    <>
    <h1>Welcome {props.name} from {props.place}</h1>
    <p>{props.children}</p>
    </>
    );
}
export default FunctionProps