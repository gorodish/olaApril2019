import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const Login = ({ startLogin }) => (

  <div className="content login--content">
    <form>
      <h5>Login</h5>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="pasword" />
    </div>
    <div>
      <button onClick={startLogin}>Login</button>
    </div>
    </form>
  </div>
);

 
const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(Login);