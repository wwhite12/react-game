import React from 'react';
import Wrapper from './components/Wrapper';
import CharacterCard from './components/CharacterCard'
import characters from "./cards.json";
import Title from "./components/Title";


class App extends React.Component{
  state = {
    characters:characters
  };

  render(){
    return(
      <Wrapper>
        <Title>React Clicky Game!</Title>
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
