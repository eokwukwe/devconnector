import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

import { deleteExperience } from '../../actions/profileActions';

class Experience extends Component {
  handleDeleteExperience = id => {
    this.props.deleteExperience(id);
  };

  render() {
    const experience = this.props.experience.map(exp => (
      <tr key={exp._id}>
        <td>{exp.company}</td>
        <td>{exp.title}</td>
        <td>
          <Moment format="YYYY/MM/DD">{exp.from}</Moment> -
          {(exp.to && <Moment format="YYYY/MM/DD">{exp.to}</Moment>) || 'Now'}
        </td>
        <td>
          <button
            onClick={this.handleDeleteExperience.bind(this, exp._id)}
            className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    ));
    return (
      <div>
        <div className="row">
          <div className="col-md-12 m-auto">
            <div className="card">
              <h4 className="card-header">Experience Credentials</h4>
              <div className="card-body">
                <table className="table mw-100">
                  <thead className="thead-light">
                    <tr>
                      <th>Company</th>
                      <th>Title</th>
                      <th>Years</th>
                      <th />
                    </tr>
                    {experience}
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Experience.propTypes = {
  deleteExperience: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteExperience }
)(Experience);
