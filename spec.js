import { Component } from "react";

export class MarvelClass extends Component{
    state={
        name:'tony stark',
        heroic:'ironman'
    }

    changename=()=>{
        this.setState({
            name:'Steve Roger',
            heroic:'captainboss'
        })
    }

    render(){
        return(
        <>
        <h1>Marvel hello my name is {this.state.name} and my heroic is {this.state.heroic} </h1>
        <button type="button" onClick={this.changename}>Change name</button>
        </>
        );
    }
}

