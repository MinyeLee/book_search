import React, { Component } from 'react';


import './dashforge.css';
import './index.css';
import profile from './assets/img/IMG_2955.JPG';


window.React = React;

export class Header extends Component {
	
	state = { path: null }
	
	/* App 부모 컴포넌트 전달  - 로그아웃 */
	logout = () => {
		this.props.logout_();	
    };
    
    /* App 부모 컴포넌트 전달 - 메인페이지 변경 */
    changeMain = () => {
        var userName = this.props.userName;
        this.props.changeMain_(userName);            
    }
    


    render() {
    let userName = this.props.userName;
    let navbar_right;
    
    if(userName != null){
    	
    	navbar_right = <div className="navbar-right">
      	Welcome {this.props.userName} !
        <div className="dropdown dropdown-profile">
           
          <div className="dropdown-link" data-toggle="dropdown" data-display="static">
            <div className="avatar avatar-sm  c-p"><img src={profile} className="rounded-circle" alt=""/></div>
          </div>
          <div className="dropdown-menu dropdown-menu-right tx-13">
            <div className="avatar avatar-lg mg-b-15"><img src={profile} className="rounded-circle" alt=""/></div>
            <h6 className="tx-semibold mg-b-5">{this.props.userName}</h6>
            <p className="mg-b-25 tx-12 tx-color-03">{this.props.userRole}</p>


            <div className="dropdown-item c-p" onClick={this.logout}><i data-feather="log-out"></i>Sign Out</div>
          </div>
        </div>
      </div>;
      
    }

    return (
    	    <header className="navbar navbar-header navbar-header-fixed">
    	      <div className="navbar-brand">
    	        <div className="df-logo c-p" onClick={this.changeMain}>Book<span>Search</span></div>
    	      </div>
    	      <div id="navbarMenu" className="navbar-menu-wrapper">
    	        <div className="navbar-menu-header">
    	          <div className="df-logo">dash<span>forge</span></div>
    	          <div id="mainMenuClose"><i data-feather="x"></i></div>
    	        </div>
    	      </div>
    	      {navbar_right}
    	    </header>
    );
  }
}

export default Header;