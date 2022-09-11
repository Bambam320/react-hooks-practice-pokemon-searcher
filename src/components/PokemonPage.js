import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
      .then((r) => r.json())
      .then((data) => setPokemons(data))
  }, [])

  function AddPokemon(e, newPokemonForm) {
    e.preventDefault()
    const post = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPokemonForm),
    }
    fetch('http://localhost:3001/pokemon', post)
      .then((r) => r.json())
      .then((data) => setPokemons({...pokemons, data}))
  }

  const listPokemons = pokemons.filter((pokemon) => pokemon.name.includes(searchTerm))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={AddPokemon}/>
      <br />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <br />
      <PokemonCollection pokemons={listPokemons}/>
    </Container>
  );
}

export default PokemonPage;
