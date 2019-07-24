package com.booksearch.service;



import com.booksearch.domain.UserVO;

@FunctionalInterface
public interface UserService {
		
	UserVO getUser(UserVO uservo);

}
   