import React, { Component } from 'react';
import 'reactjs-popup/dist/index.css';
import ReactDOM from 'react-dom';
import { Alert } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router';

export default class Login extends Component {
  state = {
    id: '',
    password: '',
    invalidLoginId: false
  };

  login = e => {
    e.preventDefault();
    if (this.state.id == 'admin' && this.state.password == 'admin@123') {
      this.props.history.push('/home');
    } else {
      this.setState({ invalidLoginId: true, password: '' });
    }
  };
  render() {
    return (
      <Router>
        <div className="App">
          <div className="outer">
            <div className="inner">
              <form id="login-form" onSubmit={this.login}>
                <h3>Log in</h3>
                {this.state.invalidLoginId ? (
                  <Alert message="Invalid userID or Password" type="error" />
                ) : null}
                <div style={{ paddingBottom: '10px' }} className="form-group">
                  <label>User ID</label>
                  <input
                    name="id"
                    type="userID"
                    className="form-control"
                    value={this.state.id}
                    onChange={e => this.setState({ id: e.target.value })}
                    placeholder="Enter UserID"
                  />
                </div>

                <div style={{ paddingBottom: '10px' }} className="form-group">
                  <label>Password</label>
                  <input
                    name="pass"
                    type="password"
                    className="form-control"
                    value={this.state.password}
                    onChange={e => this.setState({ password: e.target.value })}
                    placeholder="Enter password"
                  />
                </div>

                <div style={{ paddingBottom: '10px' }} className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck1"
                    >
                      Remember me
                    </label>
                  </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">
                  Sign in
                </button>
                <p className="forgot-password text-right">
                  Forgot <a href="#">password?</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
