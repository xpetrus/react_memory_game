import React, {Component} from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CardWrapper from "./components/CardWrapper";
import CharacterCard from "./components/CharacterCard";
import characters from "./characters.json";

class App extends Component{
  
  state = {
    characters,
    score: 0,
    highscore: 0
  };
  
  clickCheck = id => {
    //alert("clicked: "+id);
    let clickAmount = characters.find(character => character.id === id).clicks;
    //alert(characters.find(character => character.id == id).name);
    //alert(clickAmount);
    if(clickAmount === 0){
      characters.find(character => character.id === id).clicks = clickAmount +1;
      this.state.score++;
      if(this.state.score === 12){
        alert("You Win! You're Psychic!");
        this.gameOver();
      }
    }
    else if(clickAmount !== 0){
      this.gameOver();
    }
    this.setState({
      characters: this.state.characters.sort(() => Math.random() - 0.5)
    });
       
  };

  gameOver = () => {
    alert("Game Over!");
    if(this.state.score > this.state.highscore){
      this.state.highscore = this.state.score;
      alert("Congratulations, New High Score!");
    }
    this.state.score = 0;
    this.state.characters.forEach(character =>{
      character.clicks = 0;
    });


  };
  
  
  render(){
    return(
      <Wrapper>
        <Navbar score = {this.state.score} highscore = {this.state.highscore}/>
        <Header />
        <CardWrapper>
          {this.state.characters.map(card => (
            <CharacterCard
              clickCheck={this.clickCheck}
              id = {card.id}
              name = {card.name}
              image =  {card.image}
              />
          ))}
        </CardWrapper>
      </Wrapper>
    );
  }
}

export default App;
