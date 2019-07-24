package com.booksearch.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.booksearch.domain.UserVO;
import com.booksearch.persistence.UserRepository;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserRepository userRepo;
	
	public UserVO getUser(UserVO uservo) {
		
		Optional<UserVO> findUser = userRepo.findById(uservo.getUserID());
		if(findUser.isPresent())
			return findUser.get();
		else return null;
		 				
	}

}
