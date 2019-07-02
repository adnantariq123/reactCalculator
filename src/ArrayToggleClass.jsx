import React, { Component } from 'react';
//import ReactDOM from 'react-dom';


class ArrayToggleClass extends Component {
    state = { 
        Fruits: [
            {value:"apple", selected:false},
            {value:"lemin", selected:false},
            {value:"oranges", selected:false},
            {value:"watermelon", selected:false}
        ],
    };

    wtfState = () => {
         console.log("came to ChangeState & selected is :" + this.state.Fruits.selected);

         if(this.state.Fruits.selected=== false) {
             this.setState({selected:true})
         }
         else
         if(this.state.Fruits.selected=== true) {
             this.setState({selected:false})
         }
    };

    toggleClass = () => {
        let classes = '"' + this.state.Fruits.selected + '"';

        classes +=  (this.state.Fruits.selected === false) ? "":
                    "redBk";
        return classes;            

    };

    render() { 
        return (
            <React.Fragment>
                 {/* {this.state.Fruits.map(xyz => (
                    <div key={xyz}>
                        {this.state.Fruits}
                    </div>
                    //does not work kinda as it is ALL like this appleorangeslemons
                ))}  */}

                {/* Take this with a grain of salt? 
                array.map(function(currentValue, index, arr), thisValue)

                currentValue	    Required. The value of the current element
                index	            Optional. The array index of the current element
                arr	                Optional. The array object the current element belongs to


                onClick={() => this.okInsert(1)}
                */}
                
                {this.state.Fruits.map((item,i) => 
                    <div key={i}
                    onClick={this.wtfState}
                    className= {this.toggleClass}>
                        {item.value}

                    </div>)
                }

            </React.Fragment>
          );
    }
}
 
export default ArrayToggleClass;