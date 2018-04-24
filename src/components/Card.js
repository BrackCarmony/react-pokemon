import React, { Component } from 'react';
import './Card.css'

class Card extends Component {
  constructor(props){
    super(props);
    this.state = { flipped:false };
  }
  render() {
    return (
      <div className = "container">
        <div className={'card ' + ( this.state.flipped ? 'flipped' : '')}>
          
          <div className="front">
            { this.props.front() }
          </div>
          <span className="flipper" onClick={()=>this.setState({flipped:!this.state.flipped})}>↺</span>       
          <div className="back">
            { this.props.back() }
          </div>
        </div>
      </div>
    );
  }
}

export default Card;