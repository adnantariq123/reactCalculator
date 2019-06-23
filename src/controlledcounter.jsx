import React, { Component } from 'react';


class leTest extends Component {

        /* NO MORE state 
        While this apprach worked great, we will have to remove it(it being state) because we need 
        to add the 'single source of truth' >_<
        This kind of component is called a 
        CONTROLLED component: does not have its own local state, and recieves all it data VIA PROPS
        ANd raises EVENTS when data needs to changed  
        */
    

    render() {
        //console.log('props', this.props);

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

        <button onClick={() => this.props.onIncrement(this.props)} style={{fontSize:20}} className="btn btn-secondary btn-sm m-2">Increment</button>
        <button onClick={() => this.props.onReduce(this.props.id)} style={{fontSize:20}} className="btn btn-secondary btn-sm m-2">Reduce</button>

        <button onClick={()=> this.props.onBanging(this.props.id)} className="btn btn-sm btn-danger m-2">Remove!</button>
           
           
           
            </div>
        </div>

        // </React.Fragment>   
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 ";

        classes +=  (this.props.fumble === 0) ? "badge-warning" :
                    (this.props.fumble === 1) ? "badge-success" :
                    (this.props.fumble === 2) ? "badge-info" :
                    (this.props.fumble === 3) ? "badge-secondary" :
                     "badge-primary";
        return classes;
    }




    formatCount() {

        const value = this.props.fumble;
        //return value;
        
        // did not work... f it! console.log("from formatCount: " + value);

        return value === 0? 'Zero' : value;
    }

}
 
export default leTest;