import React, {Component} from 'react';

import './App.css';
import './pagination.css';
import './dashforge.css';
import './index.css';
import './dashforge.filemgr.css';

import Header from './Header';
import SignUp from './SignUp';
import SignIn from './SignIn';

/*ROUTE*/
/*
getBookList -- /api/getBookList/{page}/{query}
getKeywordList -- /api/getKeywordList/{page}/{query}" 
signUp -- /user/signUp
signIn -- /usesr/signIn
*/


class User extends Component {
	
	state = { path1: null }

    componentDidMount() {
		
        var path1 = window.location.pathname.split('/')[2];
        this.setState({path1: path1 });     
    
	}

	
    
    render() {
    	
    	const path1 = this.state.path1;
    	let content;
    	if(path1 == 'signUp'){
    		content = <SignUp/>;
    	
    	}else if(path1 == 'signIn'){
    		content = <SignIn/>;
	
    	}else{
    		content = <SignUp/>;
    	}
    	
        return (
            <div className="App">
            	<Header/>
            	{content}
            </div>
        );
    }
}

export default User;