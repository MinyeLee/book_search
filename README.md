# Book Search

Book Search는 도서 빅데이터 검색 서비스입니다.  

## Video

Demo: 
1. 회원가입 후 로그인 인증 절차를 밟아야함.
2. 키워드를 통해 책을 검색하실 수 있으며, 결과는 페이지네이션 형태로 제공됨.
3. Info를 클릭하여 도서 상세 조회가 가능함.
4. Keyword 버튼을 클릭하여 본인이 찾은 도서 키워드 확인 가능함.
5. 인기 키워드를 좌측 메뉴에서 확인 가능함.



## Scripts
Java Spring 과 React.js 을 아래 3단계 실행이 필요함.
실행 후  http://localhost:3000 접속함.

```
java -jar target/book-search-0.0.1.jar
```



### Built with

* Java8 ( @FunctionalInterface )
* Spring Boot ( Spring Security )
* Single Page Application with React.js 
* Test Case ( MockMVC )


## Features

### 예외 처리</br>
@ExceptionHandler 

**GlobalExceptionHandler** 
* 특정 예외 처리 로직 작성 ( RuntimeException의 상속받는 BookRuntimeException )
* 전역 예외 처리 로직 작성 ( Exception )

**ExceptionController**
* 테스트
* Checked : SQLException
* Unchecked (Runtime): BookRuntimeException, illegalArgumentException

### 동시성 제어</br>
* synchronized

### 테스트케이스</br>
@SpringBootTest 


## Authors

* **MinYe Lee** - *Book Search* - [Minye Lee](https://github.com/MinyeLee)


