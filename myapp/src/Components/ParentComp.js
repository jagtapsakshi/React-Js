import React,{Component} from "react";
import PureComp from "./PureComp";
import RegComp from "./RegComp";

class ParentComp extends Component{
    constructor(props){
        super(props)

        this.state = {
            name: "by Sakshi"
        }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: "by Sakshi"
            });
        }, 3000);
    }
    render(){
        console.log("Parent Componen render");
        return(
            <div>This is a Parent Component
                <RegComp name = {this.state.name} />
                <PureComp name = {this.state.name} />
            </div>
        );
    }
}
export default ParentComp