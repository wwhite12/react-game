import React from 'react';
import Wrapper from './components/Wrapper';
import characters from "./cards.json";


class App extends React.Component{
  state = {
    characters:characters
  };

  render(){
    return(
      <Wrapper>
        {this.state.characters.map(character =>(
          <CharacterCard
        id = {character.id}
        key = {character.id}
        image = {character.image}
        />
        ))}
        
      </Wrapper>
    )
  }
}

export default App;
