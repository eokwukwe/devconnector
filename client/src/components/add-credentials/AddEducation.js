import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TextFieldGroup from '../common/TextFieldGroup';
import { addEducation } from '../../actions/profileActions';

class AddEducation extends Component {
  state = {
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
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

    const educationData = {
      school: this.state.school,
      degree: this.state.degree,
      fieldofstudy: this.state.fieldofstudy,
      from: this.state.from,
      to: this.state.to
    };

    this.props.addEducation(educationData, this.props.history);
  };

  render() {
    const {
      school,
      degree,
      fieldofstudy,
      from,
      to,
      current,
      errors,
      disabled
    } = this.state;

    return (
      <div className="add-education">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <Link to="/dashboard" className="btn btn-dark mb-3">
                Go to Dashboard
              </Link>

              <div className="card">
                <h1 className="card-header text-center">Add Education</h1>
                <div className="card-body">
                  <h5 className="card-title lead">
                    Add any school, bootcamp, etc that you attended
                  </h5>
                  <small className="d-block pb-3 text-danger">
                    * required fields
                  </small>

                  <form onSubmit={this.onSubmit}>
                    <TextFieldGroup
                      placeholder="* School"
                      name="school"
                      value={school}
                      onChange={this.onChange('school')}
                      error={errors.school}
                    />

                    <TextFieldGroup
                      placeholder="* Degree or Certification"
                      name="degree"
                      value={degree}
                      onChange={this.onChange('degree')}
                      error={errors.degree}
                    />

                    <TextFieldGroup
                      placeholder="* Field of Study"
                      name="fieldofstudy"
                      value={fieldofstudy}
                      onChange={this.onChange('fieldofstudy')}
                      error={errors.fieldofstudy}
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
                        Current Education
                      </label>
                    </div>

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

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const matStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  matStateToProps,
  { addEducation }
)(withRouter(AddEducation));
