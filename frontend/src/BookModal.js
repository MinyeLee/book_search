import React, { Component } from 'react';
import Moment from 'react-moment';
import NumberFormat from 'react-number-format';

window.React = React;

export class BookModal extends Component {



  render() {


    return (
	<div className="modal" id="modal1" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content tx-14">
          <div className="modal-header">
            <h6 className="modal-title" id="exampleModalLabel">ISBN: {this.props.isbn}</h6>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
	          <div className="d-flex align-items-center justify-content-between mg-b-25">
		          <h6 className="mg-b-0">TITLE: {this.props.title}</h6>
		        </div>
		        
	        <div className="row">
	          <div className="col-6 col-sm justify-content-center d-flex">
	          	<img src={this.props.thumbnail} className="rounded float-left" alt=""/>
	          </div>
	          <div className="col-6 col-sm">
	            <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Content</label>
	            <p className="mg-b-0">{this.props.contents}</p>
	          </div>
	        </div>
	        <div className="row mt-3">
	          <div className="col-6 col-sm">
	            <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Authors</label>
	            <p className="mg-b-0">{this.props.authors}</p>
	          </div>
	          <div className="col-6 col-sm">
	            <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Publisher</label>
	            <p className="mg-b-0">{this.props.publisher}</p>
	          </div>
	          <div className="col-sm mg-t-20 mg-sm-t-0">
	            <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Published Date</label>
	            <p className="mg-b-0"><Moment format="MMM DD, YYYY &nbsp;&nbsp;&nbsp; kk:mm a">{this.props.datetime}</Moment></p>
	          </div>
	        </div>
	        <div className="row mt-3">
	          <div className="col-6 col-sm">
	            <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Translators</label>
	            <p className="mg-b-0">{this.props.translators}</p>
	          </div>
	          <div className="col-6 col-sm">
	            <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Status</label>
	            <p className="mg-b-0">{this.props.status}</p>
	          </div>
	          <div className="col-sm mg-t-20 mg-sm-t-0">
	            <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Sale Price / Price</label>
	            <p className="mg-b-0">
	            	<NumberFormat value={this.props.sale_price} displayType={'text'} thousandSeparator={true} prefix={'₩'}/>
	            	<del>
	            		<NumberFormat value={this.props.price} displayType={'text'} thousandSeparator={true} prefix={'₩'}/>
	            	</del>
	            </p>
	          </div>  
	        </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary tx-13" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default BookModal;


