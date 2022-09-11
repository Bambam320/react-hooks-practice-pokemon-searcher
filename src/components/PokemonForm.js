import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onAddPokemon}) {
  const [newPokemonForm, setNewPokemonForm] = useState({
    name: '',
    hp: '',
    sprites: {
      front: '',
      back: ''
    }
  })

  function handleNameHpChange(e) {
    let value = e.target.value
    let key = e.target.name
    setNewPokemonForm({...newPokemonForm, [key]:value})
  }

  function handleUrlChange(e) {
    const newForm = {
      name: newPokemonForm.name,
      hp: newPokemonForm.hp,
      sprites: {
        front: e.target.name === 'frontUrl' ? e.target.value : newPokemonForm.sprites.front,
        back: e.target.name === 'backUrl' ? e.target.value : newPokemonForm.sprites.back
      }
    }
    setNewPokemonForm({...newForm})
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => onAddPokemon(e, newPokemonForm)}
      >
        <Form.Group widths="equal">
          <Form.Input fluid 
            label="Name" 
            placeholder="Name" 
            name="name" 
            value={newPokemonForm.name} 
            onChange={handleNameHpChange} 
          />
          <Form.Input fluid 
            label="hp" 
            placeholder="hp" 
            name="hp" 
            value={newPokemonForm.hp}
            onChange={handleNameHpChange}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={newPokemonForm.sprites.front}
            onChange={handleUrlChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={newPokemonForm.sprites.back}
            onChange={handleUrlChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
