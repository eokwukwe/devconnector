import React, { Component } from 'react';
import Moment from 'react-moment';

class ProfileCreds extends Component {
  render() {
    const { experience, education } = this.props;

    const expItems = experience.map(exp => (
      <li key={exp._id} className="list-group-item">
        <h4>{exp.company}</h4>
        <p>
          <Moment format="YYYY/MM/DD">{exp.from}</Moment> -
          {!exp.to ? (
            ' Now'
          ) : (
            <Moment format="YYYY/MM/DD" className="ml-1">
              {exp.to}
            </Moment>
          )}
        </p>
        <p>
          <strong>Position: </strong>
          {exp.title}
        </p>
        <p>
          {exp.location && (
            <span>
              <strong>Location: </strong>
              {exp.location}
            </span>
          )}
        </p>
        <p>
          {exp.description && (
            <span>
              <strong>Description: </strong>
              {exp.description}
            </span>
          )}
        </p>
      </li>
    ));

    const eduItems = education.map(edu => (
      <li key={edu._id} className="list-group-item">
        <h4>{edu.school}</h4>
        <p>
          <Moment format="YYYY/MM/DD">{edu.from}</Moment> -
          {!edu.to ? (
            ' Now'
          ) : (
            <Moment format="YYYY/MM/DD" className="ml-1">
              {edu.to}
            </Moment>
          )}
        </p>
        <p>
          <strong>Degree: </strong>
          {edu.degree}
        </p>
        <p>
          <strong>Field of Study: </strong> {edu.fieldofstudy}
        </p>
      </li>
    ));

    return (
      <div className="row">
        <div className="col-md-6">
          <h3 className="text-center text-info">Experience</h3>
          {expItems.length > 0 ? (
            <ul className="list-group">{expItems}</ul>
          ) : (
            <p className="text-center">No Experience listed</p>
          )}
        </div>
        <div className="col-md-6">
          <h3 className="text-center text-info">Education</h3>
          {eduItems.length > 0 ? (
            <ul className="list-group">{eduItems}</ul>
          ) : (
            <p className="text-center">No Education listed</p>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileCreds;
