import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../redux/authActions';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      newUserName: '',
      newUserPassword: '',
    };
  }

  handleLogin = () => {
    this.props.login(this.state.newUserName);
  };
  render() {
    return this.props.loggedIn ? (
      <div>Welcome {this.props.currentUser.username}</div>
    ) : (
      <div>
        <label>Username: </label>
        <p>{this.props.something}</p>
        <input
          type="text"
          onChange={(e) => this.setState({ newUserName: e.target.value })}
          value={this.state.newUserName}
        />{' '}
        <br />
        <label>Password: </label>
        <input
          type="text"
          onChange={(e) => this.setState({ newUserPassword: e.target.value })}
          value={this.state.newUserPassword}
        />
        <br />
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

// export default Home;
function mapStateToProps(state) {
  console.log(state);
  return { loggedIn: state.loggedIn, currentUser: state.currentUser };
}

const ConnectedHome = connect(mapStateToProps, { login })(Home);

export default ConnectedHome;
