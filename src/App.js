import React, {Component} from 'react';
import {Comments, AddComment} from './components/comments';
import './comments.css';
import Header from "./components/header";

class App extends Component {


  // state = {
  //   comments: []
  // };
  //
  // updateComments = (data) => {
  //    
  //     let comments = this.state.comments;
  //     comments.push(data);
  //     this.setState({comments:comments});
  //  
  // };
  //
  // componentDidMount() {
  //   this.fetchComments();
  // }
  //
  // componentDidUpdate(prevProps, prevState) {
  //     if (prevState.comments !== this.state.comments) {
  //
  //     }
  // }
  //
  // fetchComments = () => {
  //     fetch('http://localhost:8000/comments')
  //         .then(res => res.json())
  //         .then((data) => {
  //             this.setState({ comments: data })
  //         })
  //         .catch(console.log)
  // }

  render() {
    return (
        <div>
          <Header/>
          <div class="comments_wrapper">
              <AddComment parent_id={0}/>
              <Comments/>
          </div>
        </div>
    )
  }
}

export default App;
