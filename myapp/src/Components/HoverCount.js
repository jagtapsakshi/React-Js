import React from 'react'
import UpdatedComp from './HigherOrder'

class HoverCount extends React.Component{
     //initiate state of component
    constructor(props){
        super(props);

        //object that can change later
        this.state = {
            count:0
        }
    }
    //Event handler method
    //count = count+1
    Hovered = () =>{
        //this.setState updates the state of the component 
        this.setState({count : this.state.count + 1})
    };

    render(){
        //start with the current value.(before first time hover the value is 0 later changes as many times event occurs)
        const {count} = this.state;

        //Event onMouseEnter calls the event handler method and performs the event
        return (<>
        <button onMouseEnter={this.Hovered}>{this.props.name} hovered {count} times</button>
        </>
        );
    }
}

export default UpdatedComp(HoverCount);