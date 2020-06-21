import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";

class FullPost extends Component {
  componentDidUpdate() {
    if (this.props.id) {
      axios
        .get("https://jsonplaceholder.typicode.com/posts/" + this.props.id)
        .then((response) => {
          console.log(response);
        });
    }
  }
  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.postSelected) {
      post = (
        <div className="FullPost">
          <h1>{this.props.title}</h1>
          <p>{this.props.content}</p>
          <div className="Edit">
            <button className="Delete">Delete</button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
