import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term)

    // TODO: make sure we call callback from parent component
  }

  render() {
    return (
      <div className="ui segment search-bar">
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Video Search</label>
            <input 
              type='text' 
              value={this.state.term}  
              onChange={this.onInputChange}
              />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar