/**
 * 
 */
package com.booksearch.controller;



import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.json.simple.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.booksearch.persistence.KeywordRepository;
/**
 * @author minyelee
 * PopularKeywordController : 상위 10 인기 키워드 반환
 */
@RestController
public class PopularKeywordController {

	@Autowired
    private KeywordRepository keywordRepo;
	

	@SuppressWarnings("unchecked")
	@PostMapping("/api/getPopularKeyword")
	public JSONArray getKeyword(){
		
	     
	   JSONArray keywords = new JSONArray();
	  
	   /*NATIVE QUERY*/
	   List<Object[]> keywordPopularList = keywordRepo.queryAnnotationPopularKeyword();
	  
	   
	   /* No Keyword Exception */
	   if(keywordPopularList.size() != 0 ) {
		   for(Object[] row : keywordPopularList) {
			   
			   keywords.add(putKeyword(row[0].toString(), row[1].toString()));
		   }
	   }
	   
	
	   return keywords;
	   
	
	} 
	
	public Map<String, String>  putKeyword(String keyword, String duplicate){
	   Map<String, String> map = new HashMap<String, String>();
	   map.put("keyword", keyword);
	   map.put("duplicate", duplicate);
	   return map ;
	} 

	
	

}

