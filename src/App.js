import _ from 'lodash';
import React, { Component } from 'react';
import FeaturedPost from './components/Featured_Post';
import PostList from './components/Post_List';
import Button from './components/Button';
import Search from './components/Search';
import Loader from './components/Loader';
import Footer from './components/Footer';
import logo from './logo.svg';
import './App.css';
import './styles/main.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      posts: [],
      selectedPost: null,
      source_url: ''
    }

  }
  componentDidMount() {
      this.fetchAndSetPosts('https://fishtivity.net');
  }

  fetchAndSetPosts(url){
    this.setState({
      loading: true
    });
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    return fetch(proxyUrl + url + '/wp-json/wp/v2/posts?_embed')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          posts: responseJson,
          selectedPost: responseJson[0],
          source_url: url,
          loading: false
        }, function() {
          //console.log(this.state.posts);
          console.log(this.state.posts[0]);
          //console.log(this.state.source_url);
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
        //alert('Try another URL');
      });
  }


  render() {

    const urlSearch = _.debounce((url) => { this.fetchAndSetPosts(url)}, 800 );

    return (
      <div className="App">
        <div className="inner-wrap">
          <nav>
            <div className="nav-wrapper">
              <Search onSearchInput={urlSearch}/>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <div className="section">
                { this.state.loading ? <Loader /> : null }
                <PostList isLoading={this.state.loading} listOfPosts={this.state.posts} onSinglePostSelect={(selectedPost) => this.setState({selectedPost})}/>
                <FeaturedPost isLoading={this.state.loading} selectedPost={this.state.selectedPost} sourceUrl={this.state.source_url}/>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
