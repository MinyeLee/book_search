package com.booksearch.test;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


@SpringBootApplication
@ComponentScan(basePackages= {"com.booksearch.controller", "com.booksearch.test", "com.booksearch.config", "com.booksearch.service", "com.booksearch.exception"})
@EntityScan("com.booksearch.domain")  
@EnableJpaRepositories("com.booksearch.persistence")
public class BookSearchApplication {

	public static void main(String[] args) {
		SpringApplication.run(BookSearchApplication.class, args);

	}

}
