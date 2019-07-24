import React, { Component } from 'react';
import github from './assets/img/github.svg';

window.React = React;

export class KeywordRank extends Component {
  
   state = { lists : [] , errorType : null}


    componentDidMount() {
	   this.hello();
    }

    hello = () => {
    	
        fetch('/api/getPopularKeyword', {
            method: 'POST',
            headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json'
            }
        })
        .then(response => { return response.json();})
        .then(responseData => {return responseData;})
        .then(data => {this.setState({
        	lists: data
        	});
        })
        .catch(err => {
            console.log("fetch error" + err);
        });
    	
    };
    
    error=(errorType_) =>{    	
    	this.setState({
    		errorType: errorType_
    	 }, ()=> this.errorFunc())
    	    
    	 
    };

    errorFunc = () => {
        fetch('/error/'+this.state.errorType, {
            method: 'GET',
            headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json'
            }
        })
        .then(
        	
        )
        .catch(err => {
            console.log("fetch error" + err);
        });
        
    }
    
    getBook = () => {
        this.props.getBook_();            
    }
    getKeyword = () => {
        this.props.getKeyword_();            
    }

    
    render() {
    
	let popularKeywordNodes = this.state.lists.map(function(keyword, index) {
      return(
	    <div key={index} className="nav-link justify-content-between">
	    	<span>{keyword.keyword}</span>
	    	<span>{keyword.duplicate}</span>
	    </div>
    	);
    });

    return (
    		<div className="filemgr-sidebar">
            <div className="filemgr-sidebar-header">
              <div className="dropdown dropdown-icon flex-fill">
                <button onClick={this.getBook} className="btn btn-xs btn-block btn-white">Book</button>
                
              </div>
              <div className="dropdown dropdown-icon flex-fill mg-l-10">
              <button onClick={this.getKeyword} className="btn btn-xs btn-block btn-primary">Keyword</button>
               
              </div>
            </div>
            <div className="filemgr-sidebar-body">
              <div className="pd-t-20 pd-b-10 pd-x-10">
                <label className="tx-sans tx-uppercase tx-medium tx-10 tx-spacing-1 tx-color-03 pd-l-10">Popular Keywords</label>
                <nav className="nav nav-sidebar tx-13">
                  {popularKeywordNodes}
                </nav>
              </div>
              <div className="pd-10">
	              <label className="tx-sans tx-uppercase tx-medium tx-10 tx-spacing-1 tx-color-03 pd-l-10">Exception Handling</label>
	              <nav className="nav nav-sidebar tx-13">
	                <div className="nav-link" onClick={()=>this.error("bookRuntimeError")} > <span>Book Exception Raise</span></div>
	                <div className="nav-link" onClick={this.error.bind(this, "illegalArgumentError")} > <span>IllegalArgument Exception Raise</span></div>
	                <div className="nav-link" onClick={this.error.bind(this, "sqlError")} ><span>SQL Exception Raise</span></div>
	              </nav>
	            </div>
              <div className="pd-y-10 pd-x-20">
                <label className="tx-sans tx-uppercase tx-medium tx-10 tx-spacing-1 tx-color-03 mg-b-15">Contact us</label>

                <div className="media">
                  <img src={github} className="wd-30 ht-30" alt="github"/>
                  <div className="media-body mg-l-10">
                    <a href="https://github.com/MinyeLee/book_search"><div className="tx-black tx-12 mg-b-4">github.com/MinyeLee</div></a>
                    <div className="progress ht-3 mg-b-20">
                      <div className="progress-bar wd-100p" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
                <p className="tx-12">Please feel free to contact, if there are any problems.<br/><a rel="noopener noreferrer" href="https://github.com/MinyeLee/book_search" target="_blank">minyelee11@gmail.com</a></p>
              </div>
            </div>
          </div>
    );
  }
}

export default KeywordRank;