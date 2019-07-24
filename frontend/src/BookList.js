import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import Moment from 'react-moment';
import BookModal from './BookModal'

window.React = React;

class BookList extends Component {
	
	
  constructor(props) {
	    super(props);
	    this.state = {
	        title: '', 
	        thumbnail: '',
	        contents: '',
	        isbn: '', 
	        authors: '',
	        publisher: '', 
	        datetime: '',
	        price: '', 
	        sale_price: '',
	        status: '',
	        translators: ''
	    };
  }
 
  
  openModalWithItem=(book) =>{

      this.setState({
    	  title : book.title,
    	  thumbnail: book.thumbnail,
          contents: book.contents,
          isbn: book.isbn, 
          authors: book.authors,
          publisher: book.publisher,
          datetime: book.datetime,
          price: book.price,
          sale_price: book.sale_price,
          status: book.status,
          translators: book.translators
      });
  }
  
  render() {
	let _this = this;
    let bookNodes = this.props.data.map(function(book, index) {
      return(
        <tr key={index}>
	      <td>{book.isbn}</td>
	      <th scope="row">{book.title}</th>
	      <td>{book.publisher}</td>
	      <td><Moment format="MMM DD, YYYY &nbsp;&nbsp;&nbsp; kk:mm a">{book.datetime}</Moment></td>
	      <td className="text-right"><NumberFormat value={book.sale_price} displayType={'text'} thousandSeparator={true} prefix={'₩'}/></td>
	      <td>
	      	<div className="dropdown dropdown-icon flex-fill">
	      	 	<a href="#modal1" data-toggle="modal"><button onClick={_this.openModalWithItem.bind(_this, book)} className="btn btn-xs btn-block btn-white">Info</button></a>
	        </div>
	      </td>
	    </tr> 
    	);
    });

    return (
      <div id="project-comments" className="commentList">
      	
	    <table className="table">
	      <thead className="thead-primary">
	        <tr>
	          <th scope="col">ISBN</th>
	          <th scope="col">Book Title</th>
	          <th scope="col">Publisher</th>
	          <th scope="col">Date Time</th>
	          <th scope="col">Sale Price</th>
	          <th scope="col">Detail Info</th>
	        </tr>
	      </thead>
	      <tbody>{bookNodes}</tbody>
        </table>
        <BookModal 
        	title={this.state.title} 
	        thumbnail={this.state.thumbnail} 
	        contents={this.state.contents} 
	        isbn={this.state.isbn} 
	        authors={this.state.authors} 
	        publisher={this.state.publisher} 
	        datetime={this.state.datetime} 
	        price={this.state.price}       
	        sale_price={this.state.sale_price}
        	status={this.state.status}       
	        translators={this.state.translators}  
        
        />
      </div>
    );
  }
}

export default BookList;


