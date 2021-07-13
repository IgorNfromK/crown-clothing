import './sign-in.styles.scss'

import React, { Component } from 'react'
import {emailSignInStart, googleSignInStart} from '../../redux/user/user.actions'

import CustomButton from '../../components/custom-button/custom-button.component'
import FormInput from '../../components/form-input/form-input.component'
import {connect} from 'react-redux'

//mport {auth, signInWithGoogle} from '../../firebase/firebase.utils'


class SignIn extends Component {
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: ''
        }
       
    }
     handleSubmit=async (event)=>{
           event.preventDefault();
           const {emailSignInStart}=this.props;
           const {email, password}=this.state;
           emailSignInStart(email, password)
        //    try{
        //        await auth.signInWithEmailAndPassword(email, password);
        //        this.setState({email:"", password:""})
        //    }catch(error){
        //        console.log(error)
        //    }
           
        }

    handleChange=event=>{
        const {value, name} = event.target;
        this.setState({[name]: value})
    }
    
    render() {
        const {googleSignInStart} = this.props;
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" label="email" handleChange={this.handleChange} value={this.state.email} required />
                
                    <FormInput name="password" type="password" label="password" handleChange={this.handleChange} value={this.state.password} required />
                 
                  <div className="buttons">
                    <CustomButton type="submit" >Sign In</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign In With Google</CustomButton>
                 </div>
                </form>
            </div> 
        )
    }
}
const mapDispatchToProps=dispatch=>({
    googleSignInStart:()=>dispatch(googleSignInStart()),
    emailSignInStart: (email, password)=>dispatch(emailSignInStart({email, password}))
})
export default connect(null, mapDispatchToProps)(SignIn);