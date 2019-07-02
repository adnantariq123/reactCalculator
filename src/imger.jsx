import React, { Component } from 'react';
//import Image from "react-native";
import zimages from "./zimages.jpg"


class imgHunter extends Component {
    state = {  }
    render() { 
        return (
            <div className="container">
                <div className="row">
                <img src={zimages} alt="more to come!" />
                {/* <Image source = {{uri:"https://cdn-images-1.medium.com/max/1200/1*h7N9s4DuiXGG0Kt1W3OqKQ.jpeg"}} /> */}
                </div>
            </div>
        );
    }
}
 
export default imgHunter;