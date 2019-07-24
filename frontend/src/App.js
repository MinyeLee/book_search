import React, {Component} from 'react';

import './App.css';
import './pagination.css';
import './dashforge.css';
import './index.css';
import './dashforge.filemgr.css';

import Header from './Header';
import BookContent from './BookContent';
import SignIn from './SignIn';
import SignUp from './SignUp';



class App extends Component {
	
	state = { path: "signUp", path_: null, userName : null, userRole : null, message: null}

	componentWillMount() {
        this.getSessionData();
	}
	
	/* 사용자 아이디 세션 값 가져오기 */
	getSessionData = () => {
		
		this.forceUpdate();
        fetch('/basic/getSessionData', {
            method: 'POST',
            headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json'
            }
        })
        .then(response => { return response.clone().json();})
        .then(responseData => { return responseData; })
        .then(data => {
        	
        	if(data['sessionVal'] != null){
        		this.setState({
                	userName: data['sessionVal']['userID'],
                	userRole: data['sessionVal']['role']
                	});
        		localStorage.setItem('path', 'getBookList');
        		this.forceUpdate();
        		
        	}else{
        		this.setState({
                	userName: null,
                	userRole: null
                	});
        		 
        	}
        	this.forceUpdate();
        })
        .catch(err => {
            console.log("fetch error" + err);
        });
    	
    };
    
    /* 가입 요청 */
    handleSignUp = (userid, password) => {
    	
    	fetch('/user/signUp/'+userid+'/'+password, {
            method: 'POST',
            headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json'
            }
        })
        .then(response => { return response.clone().json();})
        .then(responseData => { 
        	
        	if(responseData['code'] === 200){
        		
        		this.setState({path: 'signIn'}, () => {
        			localStorage.setItem('path', 'signIn');
        	         this.getSessionData();
                });
        		 
        		
        	}else if(responseData['code'] === 400){
        		this.setState({message: responseData['message']});
        	}
        })
        .catch(err => {
            console.log("fetch error" + err);
        });
    
    }
    /* 로그인 인증 요청 */
    handleSignIn = (userid, password) => {
    	
    	fetch('/user/signIn/'+userid+'/'+password, {
            method: 'POST',
            headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json'
            }
        })
        .then(response => { return response.clone().json();})
        .then(responseData => { 

        	if(responseData['code'] === 200){
        		this.setState({path: 'getBookList'}, () => {
        		 localStorage.setItem('path', 'getBookList');
       	         this.getSessionData();
               });
        	}else if(responseData['code'] === 400){
        	
        		this.setState({message: responseData['message']}, () => {
         	        this.getSessionData();
                });
       		
        	}
        })
        .catch(err => {
            console.log("fetch error" + err);
        });
    
    }
    
    /* 로그인 화면 전환 */
    handleSignInView = () => {
    	this.setState({path: 'signIn', message: null}, () => {
    		localStorage.setItem('path', 'signIn');
 	         this.getSessionData();
        });
    }
    
    /* 가입 화면 전환 */
    handleSignUpView = () => {
    	this.setState({path: 'signUp', message: null}, () => {
    		localStorage.setItem('path', 'signUp');
 	         this.getSessionData();
        });
    }
    
    /* 로고 클릭 후 페이지 전환 */
    changeMain = (userName) => {
    	
    	if(userName != null){
    		this.setState({path: 'getBookList'}, () => {
    			 localStorage.setItem('path', 'getBookList');
      	         this.getSessionData();
             });
    		
    	}else{
    		this.setState({path: 'signIn'}, () => {
    			localStorage.setItem('path', 'signIn');
   	         	this.getSessionData();
           });
    	}
    
    }
    /* 로그아웃 */
    logout = () => {
    	
        fetch('/user/logout', {
            method: 'POST',
        })
        .then(response => { 
        	this.setState({path: 'signIn',  message: null}, () => {
        		localStorage.setItem('path', 'signIn');
   	         	this.getSessionData();
           });
        })
        .catch(err => {
            console.log("fetch error" + err);
        });
    	
    };
    
    render() {
    	
    	const path = localStorage.getItem('path');
    	console.log(path);
    	console.log("---");
    	const path_ = this.state.path_;
    	
    	let content;
    	if(path === 'signUp' || path_ === '' || path ===undefined ){
    		content = <SignUp handleSignUp_ = {this.handleSignUp}  handleSignInView_ = {this.handleSignInView} message = {this.state.message}/>;
    	
    	}else if(path === 'signIn' || path === "logout"){
    		content = <SignIn handleSignIn_ = {this.handleSignIn} handleSignUpView_ = {this.handleSignUpView} message = {this.state.message}/>;
	
    	}else if(path === 'getBookList' || path === 'getKeywordList'){
    		content = <BookContent path = {path}/>;

    	}else{
    		content = <SignUp handleSignUp_ = {this.handleSignUp}  handleSignInView_ = {this.handleSignInView} message = {this.state.message}/>;
    	}
    	
    	
        return (
            <div className="App">
            	<Header
            		logout_ = {this.logout}
            		changeMain_ = {this.changeMain}
            		userName={this.state.userName} 
            		userRole={this.state.userRole} />
            	{content}
            </div>
        );
    }
}

export default App;