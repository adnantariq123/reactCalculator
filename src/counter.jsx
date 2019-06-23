import React, { Component } from 'react';


class leTest extends Component {

    state = {
        /* SO no more count:0 because we are getting the value(fumble) from dacounters.jsx
        and it is being attached here as this.props. So now the new count is 
        We were using count all this time, BUT for consistency we went with Value instead 
        as it used in dacounter 
        
        difference between props and state?
        Props : data that we give to another component
        state: which is local or Private to that component
        */
       
       
        fumble: this.props.fumble

    };

    
    handleIncrement = xyz => {
        // console.log("the parameter is :" + xyz);
        this.setState({fumble: this.state.fumble + 1});
    }


    handleReduce = () => {
        this.setState({fumble: this.state.fumble - 1});
    }




    render() {
        console.log('props', this.props);

        return (
        // <React.Fragment>

        <div className="container">
            <div className="row">
                <div className="col-1">
                {this.props.children}
                </div>

                <div className="col-2">
                    
                    <span style={{fontSize:30}} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                </div>

        <button onClick={() => this.handleIncrement("yo")} style={{fontSize:20}} className="btn btn-secondary btn-sm m-2">Increment</button>
        <button onClick={this.handleReduce} style={{fontSize:20}} className="btn btn-secondary btn-sm m-2">Reduce</button>



        {/*
        VERY IMPORTANT
        "theComponent that owns a peice of the state, should be the one modifying it. - Mosh"
        because leTest(component) is really set from the STATE property from dacounters.jsx
        we have to 'make' the function go there to remove it... O_O
        
        AND we also know that a state is private to that component and not visible to outside components
        so we neeed to raise an event in this component AND our other dacounter component will handle that event
        
        so now same way we got other props, we can get the onDelete which is a prop set in the other component
        
        ALSO recall how fucking annoying it is to send a function VS sending a function WITH a Paramater!! fml
        {this.props.onBanging}
        VS
        {()=> this.props.onBanging(parameterName)}
        */}
        <button onClick={()=> this.props.onBanging(this.props.id)} className="btn btn-sm btn-danger m-2">Remove!</button>
           
           
           
            </div>
        </div>

        // </React.Fragment>   
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 ";

        classes +=  (this.state.fumble === 0) ? "badge-warning" :
                    (this.state.fumble === 1) ? "badge-success" :
                    (this.state.fumble === 2) ? "badge-info" :
                    (this.state.fumble === 3) ? "badge-secondary" :
                     "badge-primary";
        return classes;
    }




    formatCount() {

        const {fumble: count} = this.state;

         return count === 0? 'Zero' : count;
    }

}
 
export default leTest;