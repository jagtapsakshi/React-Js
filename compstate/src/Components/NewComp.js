import React, { Component } from 'react';
import Pressed from './Pressed.png';
import Unpressed from './Unpressed.png';

class NewComp extends Component {

    styles = {
        fontStyle: "italic",
        color: "red"
    };

    imgStyle = {
        width: "30px",
        height: "30px",
        marginLeft: "10px" // Space between the button and image
    };

    containerStyle = {
        display: "flex",
        alignItems: "center", // Align items vertically center
        gap: "10px", // Space between button and image
        justifyContent: "center", // Center items horizontally
        marginTop: "20px" // Optional: space from top
    };

    constructor(props) {
        super(props);
        this.state = {
            sub: "Subscribe", // Button starts with "Subscribe"
            message: "Hit the subscribe button",
            imgURL: Unpressed,
            isBellClicked: false // Track if bell icon has been clicked
        };
    }

    // Handle click to toggle between "Subscribed" and "Subscribe"
    buttonClicked = () => {
        this.setState(prevState => ({
            sub: prevState.sub === "Subscribe" ? "Subscribed" : "Subscribe",
            // Update message based on current state
            message: prevState.sub === "Subscribe"
                ? "Press the bell icon"
                : "Hit the subscribe button",
            // Reset bell click state when button is clicked
            isBellClicked: false
        }));
    };

    // Handle image click
    PressedButton = () => {
        if (this.state.sub === "Subscribe") {
            this.setState({
                message: "Hit the subscribe button first"
            });
        } else if (this.state.sub === "Subscribed") {
            this.setState(prevState => ({
                imgURL: prevState.imgURL === Unpressed ? Pressed : Unpressed,
                message: prevState.imgURL === Unpressed ? "Thank you" : "Press the bell icon",
                isBellClicked: !prevState.isBellClicked
            }));
        }
    }

    render() {
        return (
            <div className='App'>
                <h3 style={this.styles}>{this.state.message}</h3>
                <div style={this.containerStyle}>
                    <button onClick={this.buttonClicked}>
                        {this.state.sub}
                    </button>
                    <img 
                        onClick={this.PressedButton} 
                        style={this.imgStyle} 
                        src={this.state.imgURL} 
                        alt="Bell icon" 
                    />
                </div>
            </div>
        );
    }
}

export default NewComp;
