import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { createProfile } from '../../actions/profileActions';

import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import SelectListGroup from '../common/SelectListGroup';
import InputGroup from '../common/InputGroup';

class CreateProfile extends Component {
  state = {
    displaySocialInputs: false,
    handle: '',
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: '',
    bio: '',
    errors: {}
  };

  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
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

  onSubmit = e => {
    e.preventDefault();

    const profileData = {
      handle: this.state.handle,
      company: this.state.company,
      website: this.state.website,
      location: this.state.location,
      status: this.state.status,
      skills: this.state.skills,
      githubusername: this.state.githubusername,
      bio: this.state.bio,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      instagram: this.state.instagram
    };

    this.props.createProfile(profileData, this.props.history);
  };

  render() {
    const {
      handle,
      company,
      website,
      location,
      status,
      skills,
      githubusername,
      twitter,
      facebook,
      linkedin,
      youtube,
      instagram,
      bio,
      errors,
      displaySocialInputs
    } = this.state;

    let socialInputs;

    // Select options for status
    const options = [
      { label: '* Select Professional Status', value: 0 },
      { label: 'Developer', value: 'Developer' },
      { label: 'Junior Developer', value: 'Junior Developer' },
      { label: 'Senior Developer', value: 'Senior Developer' },
      { label: 'Manager', value: 'Manager' },
      { label: 'Student or Learning', value: 'Student or Learning' },
      { label: 'Instructor or Teacher', value: 'Instructor or Teacher' },
      { label: 'Intern', value: 'Intern' },
      { label: 'Other', value: 'Other' }
    ];

    if (displaySocialInputs) {
      socialInputs = (
        <div>
          <InputGroup
            placeholder="Twitter Profile URL"
            name="twitter"
            icon="fab fa-fw fa-twitter"
            value={twitter}
            onChange={this.onChange('twitter')}
            error={errors.twitter}
          />

          <InputGroup
            placeholder="Facebook Page URL"
            name="facebook"
            icon="fab fa-fw fa-facebook"
            value={facebook}
            onChange={this.onChange('facebook')}
            error={errors.facebook}
          />

          <InputGroup
            placeholder="Linkedin Profile URL"
            name="linkedin"
            icon="fab fa-fw fa-linkedin"
            value={linkedin}
            onChange={this.onChange('linkedin')}
            error={errors.linkedin}
          />

          <InputGroup
            placeholder="YouTube Channel URL"
            name="youtube"
            icon="fab fa-fw fa-youtube"
            value={youtube}
            onChange={this.onChange('youtube')}
            error={errors.youtube}
          />

          <InputGroup
            placeholder="Instagram Page URL"
            name="instagram"
            icon="fab fa-fw fa-instagram"
            value={instagram}
            onChange={this.onChange('instagram')}
            error={errors.instagram}
          />
        </div>
      );
    }

    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <div className="card">
                <h1 className="card-header text-center">Create Your Profile</h1>
                <div className="card-body">
                  <h5 className="card-title">
                    Let's get some information to make your profile stand out
                  </h5>
                  <small className="d-block pb-3 text-danger">
                    * required fields
                  </small>

                  <form onSubmit={this.onSubmit}>
                    <TextFieldGroup
                      placeholder="* Profile Handle"
                      name="handle"
                      value={handle}
                      onChange={this.onChange('handle')}
                      error={errors.handle}
                      info="A unique handle for your profile URL. Your full name, company name, nickname"
                    />

                    <SelectListGroup
                      placeholder="Status"
                      name="status"
                      value={status}
                      onChange={this.onChange('status')}
                      error={errors.status}
                      options={options}
                      info="Give us an idea of where you are at in your career"
                    />

                    <TextFieldGroup
                      placeholder="Company"
                      name="company"
                      value={company}
                      onChange={this.onChange('company')}
                      error={errors.company}
                      info="Could be your own company or one you work for"
                    />

                    <TextFieldGroup
                      placeholder="Website"
                      name="website"
                      value={website}
                      onChange={this.onChange('website')}
                      error={errors.website}
                      info="Could be your own or a company's"
                    />

                    <TextFieldGroup
                      placeholder="Location"
                      name="location"
                      value={location}
                      onChange={this.onChange('location')}
                      error={errors.location}
                      info="City & State/Country suggested (e.g. Lagos, NG)"
                    />

                    <TextFieldGroup
                      placeholder="Skills"
                      name="skills"
                      value={skills}
                      onChange={this.onChange('skills')}
                      error={errors.skills}
                      info="Please use comma separated values (e.g. HTML5, CSS3, JavaScript...)"
                    />

                    <TextFieldGroup
                      placeholder="Github Username"
                      name="githubusername"
                      value={githubusername}
                      onChange={this.onChange('githubusername')}
                      error={errors.githubusername}
                      info="If you want your latest repos and a github link, include your github username"
                    />

                    <TextAreaFieldGroup
                      placeholder="A short Bio of yourself"
                      name="bio"
                      value={bio}
                      onChange={this.onChange('bio')}
                      error={errors.bio}
                      info="Tell us a litter about yourself"
                    />

                    <div className="mb-3">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => {
                          this.setState(preState => ({
                            displaySocialInputs: !displaySocialInputs
                          }));
                        }}>
                        Add Social Network Links
                      </button>
                      <span className="text-muted ml-2">Optional</span>
                    </div>
                    {socialInputs}
                    <input
                      type="submit"
                      value="Submit"
                      className="btn btn-info btn-block mt-4"
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

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const matStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  matStateToProps,
  { createProfile }
)(withRouter(CreateProfile));
