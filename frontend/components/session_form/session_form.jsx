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
      <form onSubmit={this.handleSubmit} className="login-form-content">
        <div className="login-form-content-top">
          <div className="close-container">
            <button onClick={this.props.closeModal} className="close-modal">X</button>
          </div>

          <div className="login-form-welcome">Welcome to SoundUp!</div>

          <div className="login-form-other-form">
            Please {this.props.formType} or {this.props.otherForm}
          </div>

          {this.renderErrors()}
        </div>
        
        <div className="login-form-content-bottom">
          <div className="login-form">
            <input type="text"
                value={this.state.login_credential}
                onChange={this.update('login_credential')}
                className="login-input"
                placeholder="Your email address or username"
              />

            <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder="Your password"
              />

            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </div>
      </form>
    )
  };

  signupForm() {
    return (
      <form onSubmit={this.handleSubmit} className="login-form-content">
        <div className="login-form-content-top">
          <div className="close-container">
            <button onClick={this.props.closeModal} className="close-modal">X</button>
          </div>

          <div className="login-form-welcome">Welcome to SoundUp!</div>

          <div className="login-form-other-form">
            Please {this.props.formType} or {this.props.otherForm}
          </div>

          {this.renderErrors()}
        </div> 

        <div className="login-form-content-bottom">
          <div className="login-form">

            <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input"
                  placeholder="Your username"
            />
    
            <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
                placeholder="Your email address"
            />

            <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                  placeholder="Your password"
            />

            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </div>
      </form>
    )
  };

  render() {
    return (
      <div className="login-form-container">
        {this.props.formType === 'Sign in' ? this.loginForm() : this.signupForm()}
      </div>
    );
  };
};

export default withRouter(SessionForm);