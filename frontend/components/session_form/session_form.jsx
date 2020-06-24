import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.emptyUser;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  };

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  };

  loginForm() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-content">
          Welcome to SoundUp!
          <br />
          Please {this.props.formType} or {this.props.otherForm}
          <div onClick={this.props.closeModal} className="close-x">X</div>
          {this.renderErrors()}
          <div className="login-form">
            <br />

            <label>Username or email:
              <input type="text"
                value={this.state.login_credential}
                onChange={this.update('login_credential')}
                className="login-input"
              />
            </label>

            <br />

            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>

            <br />
            
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    )
  };

  signupForm() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-content">
          Welcome to SoundUp!
        <br />
        Please {this.props.formType} or {this.props.otherForm}
          <div onClick={this.props.closeModal} className="close-x">X</div>
          {this.renderErrors()}
          <div className="login-form">
            <br />

            <label>Username:
            <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>

            <br />

            <label>Email:
            <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
              />
            </label>

            <br />

            <label>Password:
            <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>

            <br />

            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    )
  };

  render() {
    return (
      <>
        {this.props.formType === 'Sign in' ? this.loginForm() : this.signupForm()}
      </>
    );
  };
};

export default withRouter(SessionForm);