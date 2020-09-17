import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    return this.props.loggedIn ? (
      <div>
        <p>Hey {this.props.username}, here are your stats: </p>
        <p>Friends: {this.props.whatever}</p>
        <p>Likes: {this.props.likes} </p>
      </div>
    ) : (
      <div>Please log in to view your stats.</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn,
    username: state.currentUser.username,
    whatever: state.friendCount,
    likes: state.likes,
  };
}

export default connect(mapStateToProps)(Dashboard);
