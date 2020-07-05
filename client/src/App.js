import React, { Component } from 'react';
import './App.css';
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error : null,
      isLoaded : false,
      posts : []          
    };
  }

  callAPI() {
    fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=" + REACT_APP_API_KEY)
      .then(resp => resp.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            posts: result.results
          });
          console.log(result.results)
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        },
      )
      // .then(data => console.log(data.results.forEach(result => {
      //   console.log(result.title)
      //   })
      // ))
      // .then(res => res.text())
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    const { error, isLoaded, posts } = this.state;
    if (error) {
      return <div> Error </div>
    } else if (!isLoaded) {
      return <div> Loading </div>
    } else {
      return (
        <div>
          <ol>
             {
              posts.map(post => (
                <li key={post.id} align="start">
                  <div>
                    <p className="title">{post.title}</p>
                  </div>
                </li>
              ))
            }
          </ol>
          
        </div>
      );
    }
  }
}
  
  

export default App;
