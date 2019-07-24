package com.booksearch.exception;

/*특정 예외 처리 BookRuntimeException */
public class BookRuntimeException extends RuntimeException{
	
	private static final long serialVersionUID =1L;
	
	public BookRuntimeException(String message) {
		super(message);
	}
	
}
