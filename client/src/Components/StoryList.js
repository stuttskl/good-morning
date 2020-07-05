import React, { Component } from 'react';
import Story from './Story';
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

class StoryList extends Component {
  constructor(props){
    super(props);
    this.state = {
      error : null,
      isLoaded : false,
      posts : []          
    };
  }

 loadStories() {
    fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=" + REACT_APP_API_KEY)
      .then(resp => resp.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            posts: result.results
          });
          console.log(result.results[0])
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        },
      )
  }

  componentDidMount() {
    this.loadStories();
  }

  render() {
    const { error, isLoaded, posts } = this.state;
    const stories = posts.map((story, idx) => (
      <Story
        key={idx}
        {...story}
      />
    ));
    if (error) {
      return <div> Error </div>
    } else if (!isLoaded) {
      return <div> <h1>Loading stories ...</h1> </div>
    } else {
    return (
        <div>
          <ol>
            { stories }
          </ol>
        </div>
      )
    }
  }
}


export default StoryList;