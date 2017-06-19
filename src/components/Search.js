import React from 'react';

class Search extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      source_url: 'https://fishtivity.net'
    }

  }

  onInputSubmit(url){
    this.setState({
      source_url: url
    });
    this.props.onSearchInput(url);
  }
  onInputChange(url){
    this.setState({
      source_url: url
    });
    this.props.onSearchInput(url);
  }


  render(){
    return(
        <div className="input-field">
          <input id="search" type="search" required value={this.state.source_url} onChange={(event => this.onInputChange(event.target.value))} />
          <label className="label-icon" for="search"><i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
        </div>
    );
  }
}
export default Search;
