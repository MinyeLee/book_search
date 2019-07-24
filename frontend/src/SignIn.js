import React, { Component } from 'react';
import profile from './assets/img/IMG_2955.JPG';


window.React = React;

export class SignIn extends Component {
	
    state = { userid : '' , password : ''} 
    
    handleIDChange = (e) => {
        this.setState({ userid: e.target.value});
    }
    
    handlePASSChange = (e) => {
        this.setState({ password: e.target.value});
    }
    
    handleSignIn = () => {
        var userid = this.state.userid;
        var password = this.state.password;
        this.props.handleSignIn_(userid, password);            
    }
    
    handleSignUpView = () => {
        this.props.handleSignUpView_();            
    }

    render() {
  

    return (
    		<div className="content content-fixed content-auth">
    	      <div className="container">
    	        <div className="media align-items-stretch justify-content-center ht-100p pos-relative">
    	          <div className="media-body align-items-center d-none d-lg-flex">
    	            <div className="mx-wd-600">
    	              <img src={profile} className="img-fluid" alt=""/>
    	            </div>
    	            
    	          </div>
    	          <div className="sign-wrapper mg-lg-l-50 mg-xl-l-60">
    	            <div className="wd-100p">
    	              <h3 className="tx-color-01 mg-b-5">Sign In</h3>
    	              <p className="tx-danger tx-16 mg-b-40">{this.props.message}</p>

    	              <div className="form-group">
    	                <label>Email address</label>
    	                <input 
    	                	type="email" 
    	                	className="form-control" 
    	                	placeholder="yourname@yourmail.com"
    	                	value={this.state.userid}
    	                    onChange={this.handleIDChange}
    	                />
    	              </div>
    	              <form className="form-group">
    	                <div className="d-flex justify-content-between mg-b-5">
    	                  <label className="mg-b-0-f">Password</label>
    	                </div>
    	                <input 
    	                	type="password" 
    	                	className="form-control" 
    	                	placeholder="Enter your password"
    	                	value={this.state.password}
    	                    onChange={this.handlePASSChange}
    	                	autoComplete="on"
    	                />
    	              </form>
    	              <button className="btn btn-brand-02 btn-block" onClick={this.handleSignIn}>Sign In</button>
    	              <div className="divider-text">or</div>
    	              
    	              <div className="tx-13 mg-t-20 tx-center">Don't have an account? <div onClick={this.handleSignUpView} className="tx-blue user-view">Create an Account</div></div>
    	            </div>
    	          </div>
    	        </div>
    	      </div>
    	    </div>
    );
  }
}

export default SignIn;


