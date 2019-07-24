/**
 * 
 */
package com.booksearch.controller;


import java.sql.Timestamp;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.client.RestTemplate;

import com.booksearch.domain.KeywordVO;
import com.booksearch.domain.UserVO;
import com.booksearch.persistence.KeywordRepository;
/**
 * @author minyelee
 *
 */
@SessionAttributes("uservo")
@RestController
public class BookController {

	/**
	 * 
	 */
	private static final String API_SERVER_HOST  = "https://dapi.kakao.com";
	private static final String USE_BOOKSEARCH_PATH = "/v3/search/book";
	private static final String APP_KEY = "KakaoAK 8234f16d056d362b817c5a7843da539d";
	
	@Autowired
    private KeywordRepository keywordRepo;
   
	@PostMapping("/api/getBookList/{page}/{query}")
	public JSONObject getBook(@PathVariable("page") int page, @PathVariable("query") String query, @ModelAttribute("uservo") UserVO uservo) throws ParseException {
		
		if(uservo.getUserID() ==null) {
			return null;
		}
		
		String target = "title";
        if(query == null || query.length() == 0){
        	query = "love";
        }
        
        /* 검색한 키워드를 데이터베이스에 입력함 */
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        KeywordVO kvo = new KeywordVO("userid", query, "",timestamp);
        
        /* 페이지네이션에서 발생한 동일한 키워드는 데이터베이스에 입력하지 않음 */
        if(page == 1) {
        	insertKeyword(kvo);
        }
        
        /* 도서 API를 활용한 도서 목록 반환 */
        
        String url = API_SERVER_HOST + USE_BOOKSEARCH_PATH;
        
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders requestHeaders = new HttpHeaders();
        /* 인증키 등록 */
        requestHeaders.add("Authorization", APP_KEY);
        requestHeaders.add("Accept", MediaType.APPLICATION_JSON_VALUE);

        HttpEntity<Object> requestEntity = new HttpEntity<>(requestHeaders);
        
        /* UriComponetsBuilder를 사용하면 query 파라미터 자체 인코딩을 진행하므로, 
         * 한국 도서 검색 불가 따라서 Query를 자체 생성
         *
	     * UriComponentsBuilder uriBuilder = UriComponentsBuilder.fromHttpUrl(url)
	     *      .queryParam("target", target)
	     *      .queryParam("query", query)
	     * 	    .queryParam("page", page);
         */
        
        String uriCustomBuilder = url+"?target="+target+"&query="+query+"&page="+page;
        System.out.println("--Kakao Book API Query--");
        System.out.println(uriCustomBuilder);        
        
        ResponseEntity<String> responseEntity = restTemplate.exchange(
        		uriCustomBuilder,
                HttpMethod.GET,
                requestEntity,
                String.class
        );
        
     
        
        if (responseEntity.getStatusCode() == HttpStatus.OK) {
            
            JSONParser jsonParser = new JSONParser(); 
            JSONObject jsonObject = (JSONObject) jsonParser.parse(responseEntity.getBody().toString()); 

            return jsonObject;
  
        } else {
            System.out.println("--Kakao Book API ERROR--");
            System.out.println(responseEntity.getStatusCode());
        }
 
		return null;
       
	}
	
    /* insertKeyword : 유저가 입력한  키워드를 DB에 저장함  */
	public synchronized void insertKeyword(KeywordVO kvo) {
		
		  String user_id = kvo.getUser_id();
	      String search = kvo.getKeyword();
	      String duplicate = "";
	      Timestamp datetime = kvo.getDatetime();
	      
	      /*Create KEYWORD VO*/
	      KeywordVO keywordvo = new KeywordVO(user_id, search, duplicate, datetime);
	      
	      keywordRepo.save(keywordvo);

	}

}

