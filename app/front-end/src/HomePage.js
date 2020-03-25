import React from 'react';
import './HomePage.css';

function HomePage(){
    return (
        <div className="App">
          <header className="App-header">
          <button type = "button" id = "Burger">
           Home
          </button>
          <SearchBox></SearchBox>
          </header>
          <CityMap></CityMap>
        </div>
        
      );
}

function SearchBox() {
    function handleClick(from, to){
      console.log("from");
      console.log("to");
    }
    return ( 
      <form onSubmit = {handleClick() } className = "Search-form">
        <label id = "From-bar">
          <div id = "From-text">
          From
          </div>
          <input type = "text" style ={{width: 300}} />
          
        </label>
        <label id = "To-bar">
          <div id ="To-text">
          To
          </div>
          <input type = "text" style ={{width: 300}}/>
  
          <input type="submit" style = {{marginLeft: 10}} value="GO" />
        </label>
        
        </form>
    )
  }
  function CityMap() {
    return(
      <div className = "map">
        <img src = "NYCSubway.jpg" alt = "Map of NYC"/>
      </div>
    )
  }

  export default HomePage;