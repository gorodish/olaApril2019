import React from 'react';

class Register extends React.Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="content">
        <form onSubmit={this.handleSubmit} >
          <h5>Register</h5>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="pasword" id="password" onChange={this.handleChange} />
          </div>
          <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
          </div>
        <div>
          <button>Register</button>
        </div>
        </form>
      </div>
    );
  }
}

export default Register;