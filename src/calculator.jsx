import React, { Component } from 'react';


class calculator extends Component {
    state = { 
        xxxxx:0,
        v1:0,
        v2:0,
        isCal:null,
        hasNumber:true

    }

    nullIt = () => {

        if (this.state.hasNumber ===false ) {
            document.getElementById('DaInserting').innerHTML = null;
            //this.setState({hasNumber:1})           
        }

    }

    okInsert = (num) => {
        this.nullIt();        
        let ss = document.getElementById('DaInserting').innerHTML += num;
        this.setState({
            hasNumber:true,
            xxxxx:ss
            
        })
;       
    }


    makeAdd = () => {
        
        const firstNum = this.state.xxxxx;


        this.setState({
            v1:firstNum,
            xxxxx:0,
            isCal:"add",
            hasNumber:false
        }, () => {
            console.log("Add, firstNum is " + firstNum );
            console.log("and v1 is: " + this.state.v1);
            console.log("and isCal is: " + this.state.isCal);
            console.log("and hasNumber is: " + this.state.hasNumber);
        });

    };

    makeSubtract = () => {
        //console.log("came to makeSubtract");
        
        const firstNum = this.state.xxxxx;

        this.setState({
            v1:firstNum,
            xxxxx:0,
            isCal:"subtract",
            hasNumber:false
        }, () => {
            console.log("Add, firstNum is " + firstNum );
            console.log("and v1 is: " + this.state.v1);
            console.log("and isCal is: " + this.state.isCal);
        });
        
    }

    makeMultiply = () => {
        //console.log("came to makeMultiply");
        const firstNum = this.state.xxxxx;

        this.setState({
            v1:firstNum,
            xxxxx:0,
            isCal:"Multiply",
            hasNumber:false
        }, () => {
            console.log("Add, firstNum is " + firstNum );
            console.log("and v1 is: " + this.state.v1);
            console.log("and isCal is: " + this.state.isCal);
        });        
    }    

    makeDivide = () => {
        const firstNum = this.state.xxxxx;

        this.setState({
            v1:firstNum,
            xxxxx:0,
            isCal:"Divide",
            hasNumber:false
        }, () => {
            console.log("Add, firstNum is " + firstNum );
            console.log("and v1 is: " + this.state.v1);
            console.log("and isCal is: " + this.state.isCal);
        });
    }



    // OLDdeAnswer = () => {
    //     //let deSecond = document.getElementById('DaInserting').innerHTML += num;
    //     //this.setState({v2:deSecond})
    //     let SecondNum = this.state.xxxxx;

    //     this.setState({v2:SecondNum})

    //     console.log("deSecond :" + this.state.v2);
    //     console.log("this.setState.isCal :" + this.state.isCal);

    //     let answer = 0;
    //     this.setState.v2 = this.state.xxxxx;
    //     if(this.state.isCal==="add") {
    //         answer = this.state.v1 + this.state.v2;
    //         console.log("and the answer is :" + answer);
    //     }

    //     document.getElementById('DaInserting').innerHTML = answer;

    //     //this.thenReset();
    // }

    deAnswer = () => {
        let answer = 0;
        if (this.state.isCal === "add") {
            answer = parseInt(this.state.v1) + parseInt(this.state.xxxxx);   
        }
        else
        if (this.state.isCal==="subtract") {
            answer = parseInt(this.state.v1) - parseInt(this.state.xxxxx);
        }
        else
        if (this.state.isCal==="Multiply") {
            answer = parseInt(this.state.v1) * parseInt(this.state.xxxxx);
        }
        else
        if (this.state.isCal==="Divide") {
            answer = parseInt(this.state.v1) / parseInt(this.state.xxxxx);
        }

        this.setState({
            v2: this.state.v1,
            answer: answer,
        })

        this.thenReset();

    } 
    

    thenReset = () => {
        if (this.setState.isCal !== null) {
            this.setState({xxxxx:0})
            this.setState({v1:0})
            this.setState({v2:0})
            this.setState({isCal:null})
        }
        setTimeout(
            () => {
                document.getElementById('DaInserting').innerHTML = null;
            }, 1600);
    }



    render() {
        //console.log("\nALL states\nthis.state.xxxxx :" + this.state.xxxxx + "\nthis.state.v1 :"+ this.state.v1);
        
        return (
            <div className="container">
            <div className="row">
                <div className="col-12" style={{height:64}}>
                <div className="btn w-100 h-75 m-2 shadow-sm rounded bg-light" id="DaInserting">{ this.state.answer }</div>
                </div>
            </div>    
            <div className="row">
                <div className="col-3"><div onClick={() => this.okInsert(7)} className="btn btn-secondary btn-lg m-2 btn-block ">7</div></div>
                <div className="col-3"><div onClick={() => this.okInsert(8)} className="btn btn-secondary btn-lg m-2 btn-block ">8</div></div>
                <div className="col-3"><div onClick={() => this.okInsert(9)} className="btn btn-secondary btn-lg m-2 btn-block ">9</div></div>
                <div className="col-3"><div onClick={this.makeDivide} className="btn btn-primary btn-lg m-2 btn-block ">/</div></div>
            </div>

            <div className="row">
                <div className="col-3"><div onClick={() => this.okInsert(4)} className="btn btn-secondary btn-lg m-2 btn-block ">4</div></div>
                <div className="col-3"><div onClick={() => this.okInsert(5)} className="btn btn-secondary btn-lg m-2 btn-block ">5</div></div>
                <div className="col-3"><div onClick={() => this.okInsert(6)} className="btn btn-secondary btn-lg m-2 btn-block ">6</div></div>
                <div className="col-3"><div onClick={this.makeMultiply} className="btn btn-primary btn-lg m-2 btn-block ">x</div></div>
            </div>

            <div className="row">
                <div className="col-3"><div onClick={() => this.okInsert(1)} className="btn btn-secondary btn-lg m-2 btn-block ">1</div></div>
                <div className="col-3"><div onClick={() => this.okInsert(2)} className="btn btn-secondary btn-lg m-2 btn-block ">2</div></div>
                <div className="col-3"><div onClick={() => this.okInsert(3)} className="btn btn-secondary btn-lg m-2 btn-block ">3</div></div>
                <div className="col-3"><div onClick={this.makeSubtract} className="btn btn-primary btn-lg m-2 btn-block ">-</div></div>
            </div>

            <div className="row">
                <div className="col-6"><div onClick={this.deAnswer} className="btn btn-warning btn-lg m-2 btn-block ">=</div></div>
                {/* <div className="col-3"><div onClick={() => this.okInsert(".")} className="btn btn-secondary btn-lg m-2 btn-block ">.</div></div> */}
                <div className="col-3"><div onClick={() => this.okInsert(0)} className="btn btn-secondary btn-lg m-2 btn-block ">0</div></div>
                <div className="col-3"><div onClick={this.makeAdd} className="btn btn-primary btn-lg m-2 btn-block ">+</div></div>
            </div>

            </div>

        );
    }
}
 
export default calculator;