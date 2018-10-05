import React, { Component } from 'react';
import Chars from './components/Chars';
import Clickable from './components/Clickable/Clickable';
import Gates from './components/Gates/Gates.js';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      characters: [],
      score: 0,
      highScore: 0
    }
  }

  componentDidMount() {
    this.setState({ characters: Chars });
    // console.log(this.shuffle(this.state.characters));
  }

  shuffle (arr) {
    let currentIndex = arr.length; 
    let temporaryValue;
    let randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = temporaryValue;
    }
    return arr;
  }

  callback = dataFromChild => {
    // Setting the index;
    console.log(dataFromChild);
    // Proxy variable for state
    const stateStandin = (this.state.characters);
    // finding the index of the clickable in the characters state
    const update = stateStandin.filter(char => char.id === dataFromChild.index)[0];
    console.log(update);
    // if it hasn't been clicked...
    if (!update.clicked){
      // set it to clicked
      update.clicked = true;
      // Refdefined the characters state variable with the proxy variable from above. 
      this.setState({ characters: stateStandin });
      // redefine the score state variable based on how many characters objects have a clicked key.
      for (let i = 0; i < this.state.characters.length; i++) {
        if (this.state.characters[i].clicked) {
          const newScore = this.state.score + 1;
          this.setState({ score: newScore });
        }
      }
      this.shuffle(this.state.characters);
    } else {
      let charProxy = this.state.characters;
      for (let i = 0; i < charProxy.length; i++) {
        charProxy[i].clicked = false;
      }
      this.setState({ characters: charProxy });
      if (this.state.score > this.state.highScore) {
        const newHigh = this.state.score;
        this.setState({ highScore: newHigh})
      }
      this.setState({ score: 0 });
      this.shuffle(this.state.characters);
    }
  }
  

  render() {
    const imageRender = this.state.characters.map((char, index) => (
      <Clickable
        image={char.image}
        key={char.id}
        id={char.id}
        callback={this.callback}
      />
    ));

    const ClickedEval = () => {
      if (this.state.score > 0) {
        return <h4>Correct!</h4>
      } else {
        return <h4>That was the wrong answer!</h4>
      }
    }

    return (
      <div>
        <Gates />
        <h1>Game of Clicks</h1>
        <ClickedEval/>
        <p>Score: {this.state.score}</p>
        <p>High Score: {this.state.highScore}</p>
        <div>{imageRender}</div>
      </div>
    )
  }
}

export default App;
