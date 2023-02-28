import React from "react";
import Home from "../view/pokemon-list-page";
import { fetchPokemons } from "../model/services/fetch-pokemons-service";

interface Props {

}

interface State{
    pokemonPromises: any [];
}

export default class PokemonListController extends React.Component <Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            pokemonPromises: []
        };
    }

    componentDidMount (): void{
        this.fetchPokemonsFromApi();
    }

    fetchPokemonsFromApi(){
        const data = fetchPokemons();
        this.setState({pokemonPromises: data});
    }

    render() {
        return <Home pokemonsPromises={this.state.pokemonPromises} />
    }
}