package com.booksearch.persistence;

import org.springframework.data.repository.CrudRepository;

import com.booksearch.domain.UserVO;

public interface UserRepository extends CrudRepository<UserVO, String>{

}
