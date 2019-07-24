import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';


window.React = React;

export class KeywordList extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  render() {
    let keywordNodes = this.props.data.map(function(keyword, index) {
      return(
        <tr key={index}>
	      <th scope="row">{keyword.keyword}</th>
	      <td><Moment format="MMMM DD, YYYY &nbsp;&nbsp;&nbsp; kk:mm a">{keyword.datetime}</Moment></td>      
	    </tr> 
    	);
    });

    return (
      <div id="project-comments" className="commentList">
	    <table className="table">
	      <thead className="thead-primary">
	        <tr>
	          <th scope="col">Keyword</th>
	          <th scope="col">Date</th>
	  
	        </tr>
	      </thead>
	      <tbody>{keywordNodes}</tbody>
        </table>
      </div>
    );
  }
}

export default KeywordList;


