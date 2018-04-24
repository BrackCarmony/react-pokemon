import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Pokemon from './components/Pokemon';
import Collapse from './components/Collapse';
import Card from './components/Card';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {id:1, one:123, two:234};
    for (let i=2;i<800;i++){
      setTimeout(()=>{
        this.setState({id:i});
      }, 1000*i);
    }
    
  }
  render() {
    return (
      <div className="App">
        
        <Collapse title={'Changing: ' + this.state.id}>
          <Pokemon id={this.state.id}></Pokemon>
        </Collapse>

        <Collapse title="Electric Rats">
          <Pokemon id="25"></Pokemon>
          <Pokemon id="26"></Pokemon>
          <Pokemon id="172"></Pokemon>
        </Collapse>

        <Collapse title="Birds">
          <Pokemon id="21"></Pokemon>
        </Collapse>

        <Collapse title="Choose Two">
          <input type="number" value= {this.state.one} onChange={(e)=>this.setState({one:e.target.value*1})}/>
          <input type="number" value= {this.state.two} onChange={(e)=>this.setState({two:e.target.value*1})}/>
          <div style={{display:'flex'}}>
            <Pokemon id={this.state.one}></Pokemon>
            <Pokemon id={this.state.two}></Pokemon>
          </div>
        </Collapse>
        <div style={{display: 'flex'}}>
          <Card 
              front = {()=> <Pokemon id={this.state.one}/> }
              back = {()=>  <Pokemon id={this.state.two}/> }
          />

          <Card 
              front = {()=> <div> Where does it come from?
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. </div> }
              back = {()=> <div> 
                Where can I get some?
  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.

              </div> }
          />
        </div>
      </div>
    );
  }
}

export default App;

//<O obj = { {a:'b', c:{d:'e',f:'g', h:{i:{j:{l:'k'}}}}}} />