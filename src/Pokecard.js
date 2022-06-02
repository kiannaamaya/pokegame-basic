import React, { Component } from 'react';
import './Pokecard.css';

const POKE_API = 
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3): number); //Add 2 zeroes to number and slicing 3 out of the number and return them
// EXAMPLE OF padToThree functionality: //
// if number = 2 -> the function changes the number to 002 and slices 002
// if number = 23 -> the function changes the number t0 0023 and slices 023

class Pokecard extends Component {
    render() {
        let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`; //changes id to have proper number of zeroes
        return (
            <div className="Pokecard">
                <div className="Pokecard-image">
                    <img src={imgSrc} alt={this.props.name}/>
                </div>
                <h1 className="Pokecard-title">{this.props.name}</h1>
                <div className="Pokecard-data">Type: {this.props.type}</div>
                <div className="Pokecard-data">Type: {this.props.exp}</div>
            </div>
        )
    }
}

export default Pokecard;