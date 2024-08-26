import React, {PureComponent} from "react";

class PureComp extends PureComponent{
    render(){
        console.log("Pure Componen render");
        return(
            <div>This is a Pure Component {this.props.name}</div>
        );
    }
}
export default PureComp