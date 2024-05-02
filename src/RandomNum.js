import React,{Component} from "react";
import "./RandomNum.css"
class RandomNum extends Component{
    constructor(props){
        super(props);
        this.state = {num:1}
    }
    pressMe=(e)=>{
        //this.setState({num:Math.floor(Math.random()*10)})
        this.setState({num:this.state.num+1})
    }
    render(){
        return(
            <div>

                <h1>{this.state.num === 7 ? "WİNNER": "" }</h1>
                <div></div>
                <h1>My new random number is: {this.state.num}</h1>
                
                <button className={this.state.num === 7 ? "randomButton":"else"} onClick={this.pressMe} >Randomizer</button>
            </div>
        )
    }
}

export default RandomNum; 