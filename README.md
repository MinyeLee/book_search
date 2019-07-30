# Book Search

Book Search는 도서 빅데이터 검색 서비스입니다.  

## Video

<a href="http://www.youtube.com/watch?feature=player_embedded&v=WU8tigrcLtg
" target="_blank"><img src="http://img.youtube.com/vi/WU8tigrcLtg/0.jpg" 
alt=“BookSearch” width=“1024” height=“768” border="10" /></a>

Demo: [BookSearh DEMO](https://youtu.be/hA2EhBmy-4c)<br/>
1. 회원가입 후 로그인 인증 절차를 밟아야함.
2. 키워드를 통해 책을 검색하실 수 있으며, 결과는 페이지네이션 형태로 제공됨.
3. Info를 클릭하여 도서 상세 조회가 가능함.
4. Keyword 버튼을 클릭하여 본인이 찾은 도서 키워드 확인 가능함.
5. 인기 키워드를 좌측 메뉴에서 확인 가능함.



## Scripts
+ 기능 점검을 위한 빌드 결과물 다운로드 : 
 <a href="https://drive.google.com/file/d/1ppqOa_Qj70uD5FYFfrTZgdQuE0liDemO/view?usp=sharing" target="blank">book-search-0.0.1.jar</a><br/>
+ H2 스크립트 실행 
```
./h2.sh
```
+ Jar 파일 실행 ( http://localhost:8080 접속 )
```
java -jar book-search-0.0.1.jar
```

![Alt text](https://user-images.githubusercontent.com/6896920/61861845-bfdbdd80-af07-11e9-8a5f-f3ba20df61cd.png "Optional title")
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
* Checked : SQLException
* Unchecked (Runtime): BookRuntimeException, illegalArgumentException

### 동시성 제어</br>
* synchronized

### 테스트케이스</br>
@SpringBootTest 


## Authors

* **MinYe Lee** - *Book Search* - [Minye Lee](https://github.com/MinyeLee)


