/**
 * 
 */
package com.booksearch.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author minyelee
 *
 */
@Entity
@Table(name = "USER")
public class UserVO{

	/**
	 * 
	 */
	@Id
	private String userID;
	@Column
	private String password;
	@Column
	private String role;
	
	public UserVO(String userID, String password, String role) {
		super();
		this.userID = userID;
		this.password = password;
		this.role = role;
	}

	public String getUserID() {
		return userID;
	}

	public void setUserID(String userID) {
		this.userID = userID;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public UserVO() {
		super();
		// TODO Auto-generated constructor stub
	}

	

}
