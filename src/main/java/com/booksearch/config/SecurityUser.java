package com.booksearch.config;

import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;

import com.booksearch.domain.UserVO;

public class SecurityUser extends User{
	private static final long serialVersionUID = 1L;
	
	public SecurityUser(UserVO uservo) {
		super(uservo.getUserID(), uservo.getPassword(), AuthorityUtils.createAuthorityList(uservo.getRole().toString()));
	}
}
