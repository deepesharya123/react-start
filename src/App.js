import React, { Component } from 'react';   // Component allows us to access the states. and extends the class 
// with the help of the class , we will use the states.

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

// {} these brackets allows to write js in them.

class App extends React.Component{

  constructor(){
    super();    // allows to access the this keyword
    this.state = {
      // anme:"Namaste Is vedic greeting.",
      monsters : [],
      searchField:'',
    };

    this.handlechange = this.handlechange.bind(this);     
  }
  // componentDidCatch(){
    
  // }
  // componentDidMount() is the part of the component lifecycle.
  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState( { monsters : users }) )
  }

  handlechange = e=>{
    this.setState({searchField:e.target.value})
  }

  //  render function is also under the component
  render(){ 
    const { monsters , searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()) );  

    return ( 
      <div className='App'>
          <h1>Monsters Roledex</h1> 
          <SearchBox
           placeholder='Search monsters' 
           handlechange = { this.handlechange }  
          />

         <CardList monsters={filteredMonsters} />
    </div>
    );
  }
}  


export default App;
//  if we do not need the  internal state then use the functional component.
