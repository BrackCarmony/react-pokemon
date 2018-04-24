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
            <p> Lorem Ipsum of stuff and things</p>
            <p> Lorem Ipsum of stuff and things</p>
            <p> Lorem Ipsum of stuff and things</p>
            <p> Lorem Ipsum of stuff and things</p>
            <p> Lorem Ipsum of stuff and things</p>
          </div>
          <span className="flipper" onClick={()=>this.setState({flipped:!this.state.flipped})}>↺</span>       
          <div className="back">
            <p> Lorem Ipsum of stuff and things</p>
            <p> Lorem Ipsum of stuff and things</p>
            <p> Lorem Ipsum of stuff and things</p>
            <p> Lorem Ipsum of stuff and things</p>
            <p> Lorem Ipsum of stuff and things</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;