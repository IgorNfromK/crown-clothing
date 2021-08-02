import './sign-up.styles.scss'

import React, { useState } from 'react'

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import {connect} from 'react-redux'
import { signUpStart } from '../../redux/user/user.actions';

export const SignUp =({signUpStart})=> {
    const [userCredentials, setUserCredentials]=useState({
         displayName:'',
            email:'',
            password: '',
            confirmPassword: ''
    })
    // constructor(){
    //     super()
    //     this.state={
            // displayName:'',
            // email:'',
            // password: '',
            // confirmPassword: ''
    //     }
    // }
    const {displayName, email, password, confirmPassword}=userCredentials;
    const handleSubmit=async event=>{
        event.preventDefault();
        // const {signUpStart} = this.props;
        
        if(password!==confirmPassword){
            alert("passwords don't match");
            return;
        }
        signUpStart({displayName, email, password})

    }

    const handleChange=event=>{
        const {name, value}=event.target;
        setUserCredentials({...userCredentials, [name]: value});
    }
    
        return (
            <div className="sign-up">
                <h2 className="title">I do not nave an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={handleSubmit}>
                    <FormInput 
                     type="text"
                     name="displayName"
                     value={displayName}
                     onChange={handleChange}
                     label="Display Name"
                     required
                    />
                      <FormInput 
                     type="email"
                     name="email"
                     value={email}
                     onChange={handleChange}
                     label="email"
                     required
                    />
                      <FormInput 
                     type="password"
                     name="password"
                     value={password}
                     onChange={handleChange}
                     label="password"
                     required
                    />
                      <FormInput 
                     type="password"
                     name="confirmPassword"
                     value={confirmPassword}
                     onChange={handleChange}
                     label="confirm password"
                     required
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    
}
const mapDispatchToProps=dispatch=>({
    signUpStart: userCredentials=> dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp)
