import React from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import Header from "./components/Header";
// import Card from "./components/Card";
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

  handleCardClick = event => {
    const currentImage = event.target.id;

    const imageClicked = this.state.cardArray.indexOf(currentImage) > -1;

    if (imageClicked) {
      this.setState({
        images: this.shuffleCards(),
        clickedarray: [],
        score: 0
      });
    } else {
      this.setState({
        images: this.shuffleCards(),
        cardArray: this.state.cardArray.concat(currentImage),
        score: this.state.score + 1
      });

      //update topscore
      if (this.state.score >= this.state.topscore) {
        this.setState({ topscore: this.state.score + 1 });
      }
    }
  }

  render() {
    return (
      <div>
        <Navbar score={this.state.score} topscore={this.state.topscore} />
        <Header />
        <Main handleCardClick={this.handleCardClick} />>
      </div>
    );
  }
}

export default App;
