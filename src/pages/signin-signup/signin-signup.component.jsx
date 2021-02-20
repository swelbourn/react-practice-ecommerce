import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './signin-signup.styles.scss';

const SignInAndSignUpPage = () => (
  <div className="signin-signup-page">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
