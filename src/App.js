import React from 'react';
import Wrapper from './components/Wrapper';
import CharacterCard from './components/CharacterCard'
import characters from "./cards.json";
import Title from "./components/Title";
import Score from "./components/Score";


function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


class App extends React.Component{
  state = {
    characters,
    score: 0,
    highScore: 0,
    clickedImg: []
  };

  clickedImg = id =>{
    let clickedImg = this.state.clickedImg;
    let score = this.state.score;
    let highScore = this.state.highScore;

    if (clickedImg.indexOf(id) === -1) {
      clickedImg.push(id);
      console.log(clickedImg);
      this.handleIncrement();
      this.increaseHigh();
      this.makeShuffle();
    } else if (this.state.score === 10) {
      this.setState({
        score: 0,
        clickedImg: []
      });
    } else {
      this.setState({
        score: 0,
        clickedImg: []
      });
    }

    // if (score >= highScore) {
    //   this.setState({
    //     highScore: score
    //   });
    // }
    

  };

  handleIncrement = () => {
    this.setState({ score: this.state.score + 1 });
    
  };

  increaseHigh = () => {
    if(this.state.score >= this.state.highScore){
      this.setState({
        highScore: this.state.score
      })
    }
  }

  makeShuffle = () => {
    this.setState({ characters: shuffle(characters) });
  };

  render(){
    return(
      <Wrapper>
        <Title>React Clicky Game!</Title>
        <Score
        title="Try to click on all the characters below without clicking on the same picture twice!"
        score={this.state.score}
        highScore={this.state.highScore}
        />
        {this.state.characters.map(character =>(
          <CharacterCard
        id = {character.id}
        key = {character.id}
        image = {character.image}
        clickedImg = {this.clickedImg}
        />
        ))}
        
      </Wrapper>
    )
  }
}

export default App;
