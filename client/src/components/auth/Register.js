import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { registeruser } from '../../actions/authActions';

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password2: '',
    errors: {}
  };

  onChange = name => e => {
    this.setState({
      [name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = this.state;

    this.props.registeruser(newUser);

    // axios
    //   .post('/api/users/register', newUser)
    //   .then(res => console.log(res.data))
    //   .catch(err => this.setState({ errors: err.response.data }));
  };

  render() {
    const { name, email, password, password2, errors } = this.state;
    const { user } = this.props.auth;

    return (
      <div className="register">
        {user ? user.name : null}
        <div className="container">
          <div className="row">
            <div className="col-sm-10 col-md-8 col-lg-6 m-auto">
              <h1 className="display-4 text-center">Register</h1>
              <p className="lead text-center">
                Create your DevConnector account
              </p>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.name
                    })}
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={this.onChange('name')}
                    autoFocus
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.email
                    })}
                    placeholder="Email Address"
                    name="email"
                    value={email}
                    onChange={this.onChange('email')}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                  <small className="form-text text-muted">
                    This site uses Gravatar so if you want a profile image, use
                    a Gravatar email
                  </small>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.password
                    })}
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={this.onChange('password')}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.password2
                    })}
                    placeholder="Confirm Password"
                    name="password2"
                    value={password2}
                    onChange={this.onChange('password2')}
                  />
                  {errors.password2 && (
                    <div className="invalid-feedback">{errors.password2}</div>
                  )}
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registeruser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { registeruser }
)(Register);
