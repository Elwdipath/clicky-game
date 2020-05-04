import React from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import Header from "./components/Header";
import Card from "./components/Card";
import Main from "./components/Main";
import images from "./images.json";

class App extends React.Component {
  state = {
    images,
    score: 0,
    topScore: 0,
    cardArray: [],
  };

  shuffleCards = () => {
    return this.state.images.sort(() => Math.random() - 0.5);
  };

  handleCardClick = (event) => {
    const currentCard = event.target.id;
    const selectedCard = this.state.cardArray.indexOf(currentCard) > -1;

    if (selectedCard) {
      this.setState({
        images: this.shuffleCards(),
        cardArray: [],
        score: 0,
      });
    } else {
      this.setState({
        images: this.shuffleCards(),
        cardArray: [],
        score: this.state.score + 1,
      });
    }
    if (this.state.score >= this.state.topscore) {
      this.setState({ topScore: this.state.score + 1 });
    }
  };
  render() {
    return (
      <div>
        <Navbar score={this.state.score} topscore={this.state.topscore} />
        <Header />
        <Main>
          <Card handleCardClick={this.handleCardClick} />
        </Main>
      </div>
    );
  }
}

export default App;
