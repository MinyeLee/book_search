/**
 * 
 */
package com.booksearch.domain;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


/**
 * @author minyelee
 *
 */
@Entity
@Table(name = "KEYWORD")
public class KeywordVO {

	/**
	 * 
	 */
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
	
	
	@Column(length = 1000)
	private String keyword;
	
	@Column(length = 1000)
	private String user_id;
	
	@Column(length = 1000)
	private String duplicate;
	
	@Column(length = 1000)
	private Timestamp datetime;
	
	public KeywordVO(String user_id, String keyword, String duplicate, Timestamp timestamp) {
		super();

		this.keyword = keyword;
		this.user_id = user_id;
		this.duplicate = duplicate;
		this.datetime = timestamp;
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDuplicate() {
		return duplicate;
	}

	public void setDuplicate(String duplicate) {
		this.duplicate = duplicate;
	}
	
	public String getKeyword() {
		return keyword;
	}

	public void setKeyword(String keyword) {
		this.keyword = keyword;
	}

	public String getUser_id() {
		return user_id;
	}

	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}

	public Timestamp getDatetime() {
		return datetime;
	}

	public void setDatetime(Timestamp datetime) {
		this.datetime = datetime;
	}

	public KeywordVO() {
		// TODO Auto-generated constructor stub
	}

}

