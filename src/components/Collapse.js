import React, { Component } from 'react';
import './Collapse.css'

class Collapse extends Component {
  constructor(props){
    super(props);
    this.state = { collapse:true};
  }
  innerHeight(){
    return window.innerHeight;
  }
  render() {
    return (
      <div className="Collapse">
        <div className="title">
          {this.props.title || 'Title'} 
          <span onClick={()=>this.setState({collapse:!this.state.collapse})}> {this.state.collapse?'+':'-'} </span>
        </div>
        <div className="content" style={{ maxHeight:this.state.collapse? 0 : this.innerHeight()}} >
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Collapse;