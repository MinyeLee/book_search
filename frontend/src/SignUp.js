import React, { Component } from 'react';
import profile from './assets/img/IMG_2955.JPG';

window.React = React;

export class SignUp extends Component {
	
    state = { userid : '' , password : '', messsage: ''} 
    
    handleIDChange = (e) => {
        this.setState({ userid: e.target.value});
    }
    
    handlePASSChange = (e) => {
        this.setState({ password: e.target.value});
    }
    
    handleSignUp = () => {
        var userid = this.state.userid;
        var password = this.state.password;
        this.props.handleSignUp_(userid, password);            
    }

    handleSignInView = () => {
        this.props.handleSignInView_();            
    }
    
    render() {
  

    return (
    		<div className="content content-fixed content-auth">
    	      <div className="container">
    	        <div className="media align-items-stretch justify-content-center ht-100p">
    	          <div className="sign-wrapper mg-lg-r-50 mg-xl-r-60">
    	            <div className="pd-t-20 wd-100p">
    	              <h4 className="tx-color-01 mg-b-5">Create New Account</h4>
    	              <p className="tx-danger tx-16 mg-b-40">{this.props.message}</p>

    	              <div className="form-group">
    	                <label>ID</label>
    	                <input 
    	                	type="text" 
    	                	className="form-control" 
    	                	placeholder="Enter your ID"
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
    	              <div className="form-group tx-12">
    	                By clicking <strong>Create an account</strong> below, you agree to our terms of service and privacy statement.
    	              </div>

    	              <button className="btn btn-brand-02 btn-block" onClick={this.handleSignUp}>Create Account</button>
    	              <div className="divider-text">or</div>
    	              <div className="tx-13 mg-t-20 tx-center">Already have an account? <div onClick={this.handleSignInView} className="tx-blue user-view">Sign In</div></div>
    	            </div>
    	          </div>
    	          <div className="media-body pd-y-30 pd-lg-x-50 pd-xl-x-60 align-items-center d-none d-lg-flex pos-relative">
    	            <div className="mx-lg-wd-500 mx-xl-wd-550">
    	              <img src={profile} className="img-fluid" alt=""/>
    	            </div>
    	            
    	          </div>
    	        </div>
    	      </div>
    	    </div>
    );
  }
}

export default SignUp;


