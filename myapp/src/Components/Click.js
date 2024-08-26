import React from "react"
import UpdatedComp from "./HigherOrder";

class Click extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            count : 0
        };
    }

    UpdateClick = () =>{
        this.setState({count : this.state.count + 1});

    };

    render(){
        const {count} = this.state;
        return (<>
        <button onClick={this.UpdateClick}>{this.props.name} clicked {count} times</button>
        </>
        );
    }
}

export default UpdatedComp(Click); 
