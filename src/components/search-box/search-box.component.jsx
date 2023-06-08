import { Component } from 'react';

import './search-box.styles.css';

class SearchBox extends Component{

    render() {

        let { className, placeholder, onChangeHandler } = this.props;

        return (
            <input 
            className={`search-box ${ className }`} 
            type='search' 
            placeholder={ placeholder } 
            onChange={ onChangeHandler }
            />
        )
    }
}

export default SearchBox;