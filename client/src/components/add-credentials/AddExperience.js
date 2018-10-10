import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { addExperience } from '../../actions/profileActions';

class AddExperience extends Component {
  state = {
    company: '',
    title: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: '',
    errors: {},
    disabled: false
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = name => e => {
    this.setState({
      [name]: e.target.value
    });
  };

  onCheck = () => {
    this.setState({
      disabled: !this.state.disabled,
      current: !this.state.current
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const experienceData = {
      company: this.state.company,
      title: this.state.title,
      location: this.state.location,
      from: this.state.from,
      to: this.state.to,
      description: this.state.description
    };

    this.props.addExperience(experienceData, this.props.history);
  };

  render() {
    const {
      company,
      title,
      location,
      from,
      to,
      current,
      description,
      errors,
      disabled
    } = this.state;

    return (
      <div className="add-experience">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <Link to="/dashboard" className="btn btn-dark mb-3">
                Go to Dashboard
              </Link>

              <div className="card">
                <h1 className="card-header text-center">Add Experience</h1>
                <div className="card-body">
                  <h5 className="card-title lead">
                    Add any job or position that you have had in the past or
                    current
                  </h5>
                  <small className="d-block pb-3 text-danger">
                    * required fields
                  </small>

                  <form onSubmit={this.onSubmit}>
                    <TextFieldGroup
                      placeholder="* Company"
                      name="company"
                      value={company}
                      onChange={this.onChange('company')}
                      error={errors.company}
                    />

                    <TextFieldGroup
                      placeholder="* Job Title"
                      name="title"
                      value={title}
                      onChange={this.onChange('title')}
                      error={errors.title}
                    />

                    <TextFieldGroup
                      placeholder="Location"
                      name="location"
                      value={location}
                      onChange={this.onChange('location')}
                      error={errors.location}
                    />

                    <h6>From Date</h6>
                    <TextFieldGroup
                      type="date"
                      name="from"
                      value={from}
                      onChange={this.onChange('from')}
                      error={errors.from}
                    />

                    <h6>To Date</h6>
                    <TextFieldGroup
                      type="date"
                      name="to"
                      value={to}
                      onChange={this.onChange('to')}
                      error={errors.to}
                      disabled={disabled ? 'disabled' : ''}
                    />

                    <div className="form-check mb-4">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        name="current"
                        value={current}
                        checked={current}
                        onChange={this.onCheck}
                        id="current"
                      />
                      <label htmlFor="current" className="form-check-label">
                        Current Job
                      </label>
                    </div>

                    <TextAreaFieldGroup
                      placeholder="Job Description"
                      name="description"
                      value={description}
                      onChange={this.onChange('description')}
                      error={errors.description}
                      info="Tell us about the job position"
                    />

                    <input
                      type="submit"
                      name="Submit"
                      className="btn btn-info btn-block"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addExperience }
)(withRouter(AddExperience));
