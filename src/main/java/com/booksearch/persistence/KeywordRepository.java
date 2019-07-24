package com.booksearch.persistence;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.booksearch.domain.KeywordVO;

public interface KeywordRepository extends CrudRepository<KeywordVO, String>{
	
	/* queryAnnotationKeyword : 검색한 키워드 히스토리 반환 */
	@Query(value = "SELECT KEYWORD, DATETIME FROM keyword ORDER BY DATETIME desc OFFSET ?1 ROWS FETCH NEXT 10 ROWS ONLY", nativeQuery=true)
	List<Object[]> queryAnnotationKeyword(int offset);
	
	/* queryAnnotationPopularKeyword : 상위 10 인기 키워드 반환 */
	@Query(value = "SELECT KEYWORD, COUNT(KEYWORD) AS DUPLICATES FROM KEYWORD GROUP BY KEYWORD ORDER BY DUPLICATES DESC LIMIT 10;", nativeQuery=true)
	List<Object[]> queryAnnotationPopularKeyword();
	
	/* queryAnnotationKeyword_ROW : 페이지네이션을 위한 키워드 전체 행 수 반환  */
	@Query(value = "SELECT KEYWORD, DATETIME FROM keyword", nativeQuery=true)
	List<Object[]> queryAnnotationKeyword_ROW();
	
}
