import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemons}) {
  
  const listPokemon = pokemons.map((pokemon) => {
    return (
      <PokemonCard 
        key={pokemon.name} 
        name={pokemon.name}
        id={pokemon.id}
        hp={pokemon.hp}
        frontImg={pokemon.sprites.front}
        backImg={pokemon.sprites.back}
      />
    )
  })

  return (
    <Card.Group itemsPerRow={6}>
      {listPokemon}
    </Card.Group>
  );
}

export default PokemonCollection;
