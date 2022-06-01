import React, { PureComponent } from 'react'

export default class PcHoc extends PureComponent {
    constructor(){
        super()
        this.state={
            data:10
        }
    }
  render() {
    console.log(this.state)
    return (<>
      <div>PcHoc {this.state.data}</div>
      <button onClick={()=>{this.setState({data:10})}}>update</button>
      
      </> )
  }
}
