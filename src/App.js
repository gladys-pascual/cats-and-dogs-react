import React, { Component } from "react";
import "./App.css";
import Dropdown from "./Components/Dropdown";
import AnimalsList from "./Components/AnimalsList";

const cats = [
  {
    name: "Kandy",
    imgUrl: "https://images-cdn.9gag.com/photo/3630193_700b.jpg",
  },
  {
    name: "Sir John II",
    imgUrl:
      "https://kittybloger.files.wordpress.com/2012/05/cat-king.jpg?w=584",
  },
];

const dogs = [
  {
    name: "Bill",
    imgUrl: "https://live.staticflickr.com/8534/8622367912_cfe27bf5ef.jpg",
  },
  {
    name: "Shawna",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk-bi-Tq3VTy8AL_fGBoLIwdnvY5RfG8wJNr1xW5_tWzQ8TOGx",
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: "All",
    };
  }

  handleAnimalChoice = (event) => {
    this.setState({ selection: event.target.value });
  };

  choice = () => {
    if (this.state.selection === "Cats") {
      return cats;
    } else if (this.state.selection === "Dogs") {
      return dogs;
    } else {
      return [...cats, ...dogs];
    }
  };

  render() {
    return (
      <div className="cats-and-dogs">
        <Dropdown handleChoice={this.handleAnimalChoice} />
        <AnimalsList animals={this.choice()} />
      </div>
    );
  }
}

export default App;
