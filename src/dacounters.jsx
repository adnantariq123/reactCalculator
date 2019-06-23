import React, { Component } from 'react';

import Counter from './counter';

//import ControlledCounter from './controlledcounter'; fucked up pretty badly

class Counters extends Component {

    state = {
        Jimmy: [
            {id:1, value:0, title:"T1"},
            {id:2, value:2, title:"T2"},
            {id:3, value:4, title:"T3"},
            {id:4, value:3, title:"T4"}
        ]
    };

// this shit is for "controlledcounter"... and it will probably break if you were to attach "counter" again
/*
handleIncrement = counter => {
    console.log("came to handleIncrement \nparameter(counter) is : " + counter);

    const Jimmy = [...this.state.Jimmy];
    //console.log("counters is : " + Jimmy);

    const index = Jimmy.indexOf(counter);
    console.log("index is : " + index);

    Jimmy[index] = {...counter};
    Jimmy[index].value++;
    console.log(this.state.Jimmy[index]);

    this.setState({Jimmy});
}

handleReduce = counter => {
    console.log(" came to handleReduce");
}*/

// you will need to coment the above out to make it work with "counter"



    handleDelete = (counterId) => {
        console.log('handleDelete() called', counterId);
        const counters = this.state.Jimmy.filter(c => c.id !== counterId);
        //console.log('const counters =', counters);
        this.setState({Jimmy:counters});

    };

    handleReset = () => {
        console.log("handleReset clicked");
        const reset = this.state.Jimmy.map(xyz => {xyz.value=0; return xyz;})

        this.setState({reset});
    }
    
    render() { 
        return (
            <React.Fragment>
                <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>


                {this.state.Jimmy.map(xyz => (
                    
                    // what is a fumble?? well it is a props!! and it was used to define the 'values' in states for leTest
                    <Counter key={xyz.id}
                    // onIncrement={this.handleIncrement}
                    // onReduce={this.handleReduce} 
                    onBanging={this.handleDelete} 
                    fumble={xyz.value}
                    id={xyz.id}
                    >

                        <h5>{xyz.title}</h5>
                        
                    </Counter>
                
                ))}
            </React.Fragment>
        );
    }
}


export default Counters;
