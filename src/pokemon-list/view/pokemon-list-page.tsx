
import React from "react";
import { Container, PokemonList } from "./style";
import PokemonController from "../../pokemon/controller/pokemon-controller";

interface Props{
    pokemonsPromises: any [];
}

export default class PokemonListPage extends React.Component <Props> {
    
    render(){

        const{pokemonsPromises} = this.props;
        const pokemons = pokemonsPromises;
        
        return (
            <Container>
                <h1>Pokémon</h1>
                <div>
                    <PokemonList>
                        {
                            pokemons.map(pokemon => {
                                return (
                                    <PokemonController pokemonPromise={pokemon} />     
                                                            
                                )
                            })
                        }/
                        
                    </PokemonList>
                </div>
            </Container>
        )}
}
