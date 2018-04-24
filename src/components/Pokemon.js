import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

import './Pokemon.css';
let defaultImage = '/images/what.jpg'

_

class Pokemon extends Component {
  constructor(props){
    super(props);

    this.state = {id:null, pokemon:null}
    if (this.props.id){
      setTimeout(()=>{
        this.getPokemon(this.props.id);
      }, 100)
      
    }

    this.getPokemon = _.debounce(this.getPokemon, 2000)
  }

  componentDidUpdate(prevProps, prevState){
    if (this.props.id != prevProps.id){
      this.getPokemon(this.props.id);
    }
  }

  getPokemon(id){

    if (localStorage.getItem('pokemon'+id)){
      let pokemon = JSON.parse(localStorage.getItem('pokemon'+id));
      this.setState({
        id:id,
        pokemon:pokemon
      })
      return 
    }

    this.setState({id: id});
    axios.get('/api/v2/pokemon/' + id).then(data=>{
      let cleanUp = {
        sprites:data.data.sprites,
        stats:data.data.stats,
        name:data.data.name,
        types:data.data.types
      }

      localStorage.setItem('pokemon'+ id, JSON.stringify( data.data))

      this.setState({pokemon:data.data});
    });
    
  }
  
  render() {

    let statBlock = [];
    let typeBlock = [];
    
    if ( this.state.pokemon ){
      typeBlock = this.state.pokemon.types.map(type=> <span key={type.type.name}> {type.type.name} </span>)  
      statBlock = this.state.pokemon.stats.map(stat=> <div key={stat.stat.name}> {stat.stat.name}: {stat.base_stat}</div>)
    }


    return (
      <div className="Pokemon">
        <h1>{(this.state.pokemon && this.state.pokemon.name) || 'Test'}</h1>
        <div className="flex">
          <div className ="image" style={{backgroundImage:`url(${this.state.pokemon && this.state.pokemon.sprites? this.state.pokemon.sprites.front_default: defaultImage })`}}></div>
          <div className="flex col stats">
             <div>{typeBlock}</div>
            {statBlock}
          </div>
        </div>
      </div>
    );
  }
}

export default Pokemon;
