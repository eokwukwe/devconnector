import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

import { deleteEducation } from '../../actions/profileActions';

class Education extends Component {
  handleDeleteEducation = id => {
    this.props.deleteEducation(id);
  };

  render() {
    const education = this.props.education.map(edu => (
      <tr key={edu._id}>
        <td>{edu.school}</td>
        <td>{edu.degree}</td>
        <td>
          <Moment format="YYYY/MM/DD">{edu.from}</Moment> -
          {(edu.to && <Moment format="YYYY/MM/DD">{edu.to}</Moment>) || 'Now'}
        </td>
        <td>
          <button
            onClick={this.handleDeleteEducation.bind(this, edu._id)}
            className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    ));
    return (
      <div>
        <div className="card">
          <h4 className="card-header">Education Credentials</h4>
          <div className="card-body">
            <table className="table table-md">
              <thead className="thead-light">
                <tr>
                  <th scope="col">School</th>
                  <th scope="col">Degree</th>
                  <th scope="col">Years</th>
                  <th scope="col" />
                </tr>
                {education}
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

Education.propTypes = {
  deleteEducation: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteEducation }
)(Education);
