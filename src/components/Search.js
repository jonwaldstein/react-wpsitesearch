import React from 'react';

class Search extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      source_url: ''
    }

  }

  onInputSubmit(url){
    this.setState({
      source_url: url
    });
    this.props.onSearchInput(url);
  }


  render(){
    return(
      <form onSubmit={event => this.onInputSubmit(this.state.source_url)}>
        <div className="input-field">
          <input id="search" type="search" required value={this.state.source_url} onChange={(event => this.setState({source_url: event.target.value}))} />
          <label className="label-icon" for="search"><i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
    );
  }
}
export default Search;
