import {Component} from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component'
import './App.css';


class App extends Component {

  constructor(){

    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      this.setState(() => {
        return {monsters: users}
      })
    })
  }

  onSearchChange = (event) => {

    let searchField = event.target.value.toLowerCase();

    this.setState(() => {
      return { searchField }
    })
  }

  render (){

    let { monsters, searchField } = this.state;
    let { onSearchChange } = this;

    let filteredList = monsters.filter(monster => {
         return monster.name.toLowerCase().includes(searchField);
    })

    return(
      <div className='App'>

          <h1 className='app-title'>Monsters Rolodex</h1>
          <SearchBox onChangeHandler={onSearchChange} placeholder={'Search Monsters'} className={'monster-search-box'}/>
         
          {
            <CardList monsters={filteredList}/>
          }
      </div>
    )
  }
}


export default App;
