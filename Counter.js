import React, { Component } from "react";

export class Counter extends Component{
    state={
        count:0
    }

    inc=()=>{
        this.setState(
            {count: this.state.count+1}
        )
    }

    dec=()=>{
        this.setState(
            {count:this.state.count-1}
        )
    }

    res=()=>{
        this.setState(
            {count:0}
        )
    }

    render() {
      return( 
        <div>
          <h1>Count:{this.state.count}</h1>

          <button type='button'onClick={this.inc}>Increase</button>
          <button type='button'onClick={this.dec}>Decrease</button>
          <button type='button'onClick={this.res}>Reset</button>
        </div>
      )
    }
}