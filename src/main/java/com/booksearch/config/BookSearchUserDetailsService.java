package com.booksearch.config;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.booksearch.domain.UserVO;
import com.booksearch.persistence.UserRepository;

@Service
public class BookSearchUserDetailsService implements UserDetailsService{
	
	@Autowired
	private UserRepository userRepo;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException{
		
		/*회원정보 조회*/
		Optional<UserVO> optional = userRepo.findById(username);
		
		if(!optional.isPresent()) {
			
			throw new UsernameNotFoundException(username + "Not Found");
			
		}else {

			UserVO uservo = optional.get();
			return new SecurityUser(uservo);
			
		}
	}

}
