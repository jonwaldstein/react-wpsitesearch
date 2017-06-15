import React from 'react';

class Search extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      url: ''
    }

  }

  onInputSubmit(url){
    this.setState({
      url: url
    });
    this.props.onSearchInput(url);
  }


  render(){
    return(
      <form onSubmit={event => this.onInputSubmit(this.state.url)}>
        <div className="input-field">
          <input id="search" type="search" required value={this.state.url} onChange={(event => this.setState({url: event.target.value}))} />
          <label className="label-icon" for="search"><i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
    );
  }
}
export default Search;
