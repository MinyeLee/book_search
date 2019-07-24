import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import BookList from './BookList';
import KeywordList from './KeywordList'
import NumberFormat from 'react-number-format';
import KeywordRank from './KeywordRank';
window.React = React;

export class BookContent extends Component {

	state = { lists : [], page : 1, path: null, search: 'love', pageCount:100, total_count: 0}

    componentDidMount() {

        this.setState({path: this.props.path}, () => {
        	this.hello();
        });
  
    }

    hello = () => {
    	

        fetch('/api/'+this.state.path+'/'+this.state.page+'/'+this.state.search, {
            method: 'POST',
            headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json'
            }
        })
        .then(response => { return response.clone().json();})
        .then(responseData => { return responseData;})
        .then(data => {
        	
        	if(data){
        		if(this.state.path === "getBookList"){
            		this.setState({
        	        	lists: data['documents'],
        	        	pageCount: data['meta']['pageable_count'] / 10, 
        	        	total_count: data['meta']['total_count'], 
        	        });
            		
            	}else{
            		this.setState({
        	        	lists: data['documents'],
        	        	pageCount: data['meta']['pageable_count'], 
        	        	total_count: data['meta']['total_count'], 
        	        });
            		
            	}
        		this.refs.keywordRank.hello();
        	}

        })
        .catch(err => {
      
        });
    	
    };
    
    handlePageClick = data => {
        let selected = data.selected;
        this.setState({ page: selected+1 }, () => {
        	this.hello();
        });
    }; 
    
    handleSearchChange = (e) => {
        this.setState({ search: e.target.value});
    }
    
    handleSearch = (e) => {
    	
    	this.setState({ page: 1},() => {
    		this.hello();
    			
    		/*pagination all disabled, only first active*/
    	});
    }
    
    getBook = () => {
    
    	this.setState({path: 'getBookList'}, () => {
	         this.forceUpdate();
	         this.hello();
       });

    }
    
    getKeyword = () => {

    	this.setState({path: 'getKeywordList'}, () => {
	         this.forceUpdate();
	         this.hello();
      });
    }

    render() {
    	
    const path = this.state.path;
    const total_count = this.state.total_count;
    let table_content, subject, search_bar;
    
    
    if (path === 'getBookList') {
    	search_bar = <div className="filemgr-content-header">
        <i data-feather="search"></i>
        <div className="search-form">
          <input 
          	type="search" 
          	className="form-control" 
          	placeholder="Search for files and folders"
          	value={this.state.search}
              onChange={this.handleSearchChange}		
          />	                        
        </div>
        <nav className="nav d-none d-sm-flex mg-l-auto">
        <div className="dropdown dropdown-icon flex-fill mg-l-10">
        	<button className="btn btn-xs btn-block btn-primary" onClick={this.handleSearch}>Search</button>
        </div>
        </nav>
      </div>;
    	table_content = <BookList data={this.state.lists} />;
    	subject = 'Book';
    } else if(path === 'getKeywordList') {
    	table_content = <KeywordList data={this.state.lists} />;
    	subject = 'Keyword';
    	search_bar = <div className="filemgr-content-header"></div>;
    }
    
    return (
    		<div className="filemgr-wrapper">
    			<KeywordRank getBook_ = {this.getBook} getKeyword_ = {this.getKeyword} ref="keywordRank"/>
    				<div className="filemgr-content">
	    			{search_bar}
		            <div className="filemgr-content-body">
		              <div className="pd-20 pd-lg-25 pd-xl-30">
		                <h4 className="mg-b-15 mg-lg-b-25">{subject} Search (<NumberFormat value={total_count} displayType={'text'} thousandSeparator={true} />)</h4> 
		                <label className="d-block tx-medium tx-10 tx-uppercase tx-sans tx-spacing-1 tx-color-03 mg-b-15">Search all {subject}s : {total_count}</label>
		              </div>
		              
		            <div className="commentBox"> 
		            {table_content}
		            
	                <ReactPaginate
	                  previousLabel={'previous'}
	                  nextLabel={'next'}
	                  breakLabel={'...'}
	                  breakClassName={'break-me'}
	                  pageCount={this.state.pageCount}
	                  marginPagesDisplayed={2}
	                  pageRangeDisplayed={2}
	                  onPageChange={this.handlePageClick}
	                  containerClassName={'pagination'}
	                  subContainerClassName={'pages pagination'}
	                  activeClassName={'active'}
	                />
	                
	                </div>
	              </div>
	            </div>
	          </div>
         
    );
  }
}

export default BookContent;