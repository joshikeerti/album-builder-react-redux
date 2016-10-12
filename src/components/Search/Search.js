import React, {Component} from 'react';
import './Search.css';

class Search extends Component {

  handleChange = (evt) => {
    const term = evt.target.value;
    this.setState({searchTerm: term});

    if (term.length > 2) {
      this.props.onSearchTermChange(term);
    }
  }

  handleKeyUp = (evt) => {
    const ENTER_KEY_CODE = 13;
    if(evt.keyCode === ENTER_KEY_CODE) this.props.onSearchTermChange(evt.target.value);
  }

  render() {
    return(
      <div className="col-lg-3 offset-lg-4 search-wrapper">
         <div className="input-group">
             <span className="lnr lnr-magnifier input-group-addon"></span>
            <label htmlFor="search"></label>
             <input id="search" type="text" className="form-control search-input" placeholder="Search photos by tags" name="q"
               onChange={this.handleChange}
               onKeyUp={this.handleKeyUp}/>

         </div>
     </div>
    )
  }

}

export default Search;
