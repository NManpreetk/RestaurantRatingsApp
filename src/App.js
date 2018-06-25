import React, { Component } from 'react';
import ListRestaurants from './ListRestaurants';
import './App.css';

class App extends Component {
  state = {
  restaurants: [
  {
    "id": "1",
    "name": "Culver’s ",
    "description":"Culver’s Restaurant was founded by the Culver family in 1984, which eventually branched out to more than 300 franchised restaurants all over the US. Culver’s is well-known for its ButterBurger, which made the restaurant extremely famous. They also have other items which include salads, sandwiches, desserts, etc.",
    "avatarURL":"https://static1.squarespace.com/static/573b45208259b594a269cf1e/57864818e3df28a9681a8f20/578d10f82e69cfbce56d51ab/1521233699548/VH-Restaurant-CandF-Private-Dining-4.jpg",
    "rating": 3
  },
  {
    "id":"2",
    "name":"Yoshinoya",
    "description":"Yoshinoya is in business to create the structure and systems needed to allow our customers access to the majority of their away-from-home daily meal requirements on a one-stop-shop basis. All our products shall be of the highest quality and value, be healthy, nutritious and provided with outstanding personal services at the lowest possible prices",
    "avatarURL":"https://static1.squarespace.com/static/577b2620cd0f68c0f24fa5d1/577da2a9e3df288b496f5f45/5792d91ec534a514ed0ef2be/1469241631475/1C.jpg",
    "rating": 3

  },
  {
    "id":"3",
    "name":"Denny’s",
    "description":"Denny’s Restaurant offers a range of delicious American food to their customers. They regularly serve Breakfast, Lunch and Dinner at a great price, and they also offer food especially catered to senior citizens and to the health conscious.",
    "avatarURL":"https://www.thesocial.ca/getattachment/Real-Life/Travel/8-stunning-dining-spots-around-the-world/restaurants-with-a-view-624x351-(1).jpg.aspx",
    "rating": 3

  }
 ]
}
  updateMessage =(message) => {
    this.setState({message: message.trim()})
  }
  increaseRating = (res) => {
    const newRestaurants = [...this.state.restaurants]
    
    for(const rest of newRestaurants) {
      if(rest.name == res.name && rest.rating < 5) {
        rest.rating += 1
      }
      if(rest.rating > 4){
      let message = "restaurant is good"
      }
    }
    
    this.setState({restaurants: newRestaurants})
  }

  decreaseRating = (res) => {
    const newRestaurants = [...this.state.restaurants]
    
    for(const rest of newRestaurants) {
      if(rest.name == res.name && rest.rating > 1) {
        rest.rating -= 1
      }
      if(rest.rating < 2){
        let message = "restaurant is okay"
      }
    }
    
    this.setState({restaurants: newRestaurants})
  }


  render() {
    return (
      <div className="App">
        <ListRestaurants increaseRating={this.increaseRating} decreaseRating={this.decreaseRating} restaurants={this.state.restaurants} />
      </div>
    );
  }
}

export default App;
