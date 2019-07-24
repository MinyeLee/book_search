package com.booksearch.controller;

import java.sql.SQLException;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.booksearch.exception.BookRuntimeException;

/* 예외 처리 테스트 */
@Controller
public class ExceptionController {
	
	/*Unchecked : BookRuntimeException*/
	@GetMapping("/error/bookRuntimeError")
	public String bookError() throws BookRuntimeException{
		System.out.println("bookRuntimError");
		throw new BookRuntimeException("bookRuntimError");
	}
	
	/*Unchecked : illegalArgumentException*/
	@GetMapping("/error/illegalArgumentError")
	public String illegalArgumentError(){
		System.out.println("illegalArgumentError");
		throw new IllegalArgumentException("illegalArgumentError");
	}
	
	/*Checked : SQLException*/
	@GetMapping("/error/sqlError")
	public String sqlError() throws SQLException{
		System.out.println("sqlexception");
		throw new SQLException("sqlexception");
	}
	

}
