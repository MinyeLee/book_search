/**
 * 
 */
package com.booksearch.controller;



import java.sql.Timestamp;
import java.util.List;
import java.util.Map;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.booksearch.persistence.KeywordRepository;
/**
 * @author minyelee
 *
 */
@RestController
public class KeywordController {

	@Autowired
    private KeywordRepository keywordRepo;
	
	@SuppressWarnings("unchecked")
	@PostMapping("/api/getKeywordList/{page}/{query}")
	public JSONObject getKeyword(@PathVariable("page") int page) throws ParseException, Exception{
		
		
	 /*Prepare Data*/
	 int total_count = 0, pageable_count = 0, offset =(page-1)*10;
	 
	 /*NATIVE QUERY*/
	 List<Object[]> keywordPageList = keywordRepo.queryAnnotationKeyword(offset);
	 JSONArray keywords = new JSONArray();
	 
	 if(keywordPageList.size() != 0 ) {
		 for(Object[] row : keywordPageList) {
	    	 keywords.add(putKeyword(row[0].toString(), (Timestamp)row[1]));
	      }
	  }
	 
	  
	
	  List<Object[]> keywordList = keywordRepo.queryAnnotationKeyword_ROW();
	  total_count = keywordList.size();
	
	  pageable_count = total_count/10;
	
	  JSONObject metaObject = new JSONObject();
	  metaObject.put("pageable_count", pageable_count);
	  metaObject.put("total_count", total_count);
	  
	  JSONObject resultObject = new JSONObject();
	  resultObject.put("documents", keywords);
	  resultObject.put("meta", metaObject);
	  return resultObject;
	   
	
	} 
	
	@SuppressWarnings("unchecked")
	public Map<String, String> putKeyword(String keyword, Timestamp datetime){
	   

	   JSONObject keyword_vo = new JSONObject();
	   keyword_vo.put("keyword", keyword);
	   keyword_vo.put("datetime", datetime);
	   return keyword_vo ;
	} 
	
	@ExceptionHandler(value = Exception.class)  
    public String ExceptionHandler(Exception e){  
        return e.getMessage();  
    }  


	
	

}

