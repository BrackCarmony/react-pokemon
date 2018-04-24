import React, { Component } from 'react';

class O extends Component {
  constructor(props){
    super(props);
    this.state = { collapse:true};
  }
  render() {

    if (Array.isArray(this.props.obj)){
      // Array view
      return (
        <div> No Array Working Yet </div>
      )
    }
    if (typeof this.props.obj == "object"){
      // Object View
      if (this.state.collapse){
        return <span onClick={()=>{
          this.setState({collapse:false}, ()=>console.log("State Update")); 
          console.log("State Update 1")
        }}> + </span>
      }
      return [
        <li onClick={this.setState({collapse:true})}> - </li>, 
        ...Object.keys(this.props.obj).map((key)=>(
          <li>
            {key}
            <O obj = {this.props.obj[key]}/>
          </li>
        ))]
    }
    if (typeof this.props.obj == "number"){
      // Numbers
      return <span>{this.props.obj}</span>
    }
    if (this.props.obj.match(/http.*(jpg|jpeg|gif|tiff|bmp|png)/i)){
      // Images 
      return (
        <div className="O">
          <div style = {{backgroundImage: `url(${this.props.obj.match})`, backgroundPosition:'center', backgroundSize:'contain', height:100}}></div>
        </div>
      );
    }
    if (this.props.obj.match(/http/i)){
      // Links
      return (
        <a href={this.props.obj}>{this.props.obj}</a>
      )
    }
    return (
      // Other
      <span>{this.props.obj}</span>
    )

  }
}

export default O;