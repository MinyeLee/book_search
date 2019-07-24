package com.booksearch.exception;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;

@ControllerAdvice
@RestController
public class GlobalExceptionHandler {
	
	/* 특정 예외 처리 로직 작성 ( RuntimeException의 상속받는 BookRuntimeException ) */
	@ExceptionHandler(value = BookRuntimeException.class)
	public String handleCustomException(BookRuntimeException e, Model model) {
		System.out.println(e);
		model.addAttribute("exception", e);
        System.out.println("--Runtime Exception--");   
        System.out.println(e);
		return "redirect:index.html";
	}
	
	/* 전역 예외 처리 로직 작성 ( Exception ) */
	@ExceptionHandler(value = Exception.class)
	public String handleException(Exception e, Model model) {
		model.addAttribute("exception", e);
		System.out.println("--Global Exception--");
		System.out.println(e);
		return "redirect:index.html";
	}

}
