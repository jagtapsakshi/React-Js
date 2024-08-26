import React, {Component} from "react";

class RegComp extends Component{
    render(){
        console.log("Regular Componen render");
        return(
            <div>This is a Regular Component {this.props.name}</div>
        );
    }
}
export default RegComp