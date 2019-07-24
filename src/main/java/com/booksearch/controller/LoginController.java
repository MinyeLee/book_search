/**
 * 
 */
package com.booksearch.controller;



import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.ModelAndView;

import com.booksearch.domain.UserVO;
import com.booksearch.persistence.UserRepository;
import com.booksearch.service.UserService;
/**
 * @author minyelee
 *
 */
@SessionAttributes("uservo")
@RestController
public class LoginController {

	
    @Autowired
    private UserRepository userRepo;
    
    @Autowired
    private PasswordEncoder encoder;
    
    @Autowired
    private UserService userService;
    
	@SuppressWarnings("unchecked")
	@PostMapping("/user/signUp/{userid}/{pass}")
	public JSONObject signUp(@PathVariable("userid") String userid, @PathVariable("pass") String pass) {
		

	      
	      /*Password Encoding*/   
	      String password = encoder.encode(pass);
	      String role = "ROLE_MEMBER";
	      /*Print*/
	      System.out.println("----SIGN UP----");
	      System.out.println("USERID: "+ userid+ "PASSWORD: "+password);
	      
	      /*Create USER VO*/
	      UserVO uservo = new UserVO(userid, password, role);
	      
	      /*Check Validation*/
	      UserVO findUser = userService.getUser(uservo);
	      
	      if(findUser != null) {
	    	  /*Failure*/
		      JSONObject signUpObject = new JSONObject();
		      signUpObject.put("code", 400); //fail : 400
		      signUpObject.put("message", "Already Exists Account");
		  
		      return signUpObject;
	      }
	      if(isNullOrEmpty(userid) || isNullOrEmpty(pass)) {
	    	  /*Failure*/
		      JSONObject signUpObject = new JSONObject();
		      signUpObject.put("code", 400); //fail : 400
		      signUpObject.put("message", "Please Fill Form");
		      
		      
		      return signUpObject;
	      }
	     
	      
	      /*Success*/
	      JSONObject signUpObject = new JSONObject();
	      signUpObject.put("code", 200); //success : 200
	      signUpObject.put("message", "success");

	      
	      userRepo.save(uservo);
	      return signUpObject;

	} 
	
	
//
//	@RequestMapping(value = "/user/signIn")
//	public ModelAndView signInView() {
//	    ModelAndView mav = new ModelAndView("index");
//	    return mav;
//	}
	
	@PostMapping("/user/signIn/{userid}/{pass}")
	public JSONObject signIn(@PathVariable("userid") String userid, @PathVariable("pass") String pass, Model model) {
		

		
		  /*Password Encoding*/   
	      String password = encoder.encode(pass);
	      String role = "ROLE_MEMBER";
	      /*Print*/
	      System.out.println("----SIGN IN----");
	      System.out.println("USERID: "+ userid+ "PASSWORD: "+password);
	      
	      /*Create USER VO*/
	      UserVO uservo = new UserVO(userid, password, role);
	      
	      /*Check Validation*/
	      UserVO findUser = userService.getUser(uservo);
	      //findUser.getPassword().equals(uservo.getPassword())
	      if(findUser != null && encoder.matches(pass, findUser.getPassword())) {
	    	  model.addAttribute("uservo", findUser);
	    	  
	    	  System.out.println("----SESSION REGISTERED----");
	    	  System.out.println(findUser);
	    	  /*Success*/
		      JSONObject signInObject = new JSONObject();
		      signInObject.put("code", 200); //success : 200
		      signInObject.put("message", "success");
		      
		      return signInObject;
	    	  
	      }else {
	    	  
	    	  /*Fail*/
		      JSONObject signInObject = new JSONObject();
		      signInObject.put("code", 400); //fail : 400
		      signInObject.put("message", "No Matching User");
		      
		      return signInObject;
		      
	      }

	      

	}
	
	@PostMapping("/basic/getSessionData")
	public Map<String, Object> getSessionData(HttpSession request) {
		
	  /*Success*/
	  Object sessionVal = request.getAttribute("uservo");
	  System.out.println("----GET SESSION DATA----");
	  System.out.println(sessionVal);
	  Map<String, Object> map = new HashMap<String, Object>();
	  map.put("sessionVal", sessionVal);
	  return map ;

	}
	
	public static boolean isNullOrEmpty(String str) {
        if(str != null && !str.isEmpty())
            return false;
        return true;
    }
	
	@PostMapping("/user/logout")
	public String logout(HttpServletRequest request){
		
		
		
        HttpSession session = request.getSession();
        session.removeAttribute("uservo");
	  	Object sessionVal = request.getAttribute("uservo");
	  	System.out.println("----SESSION DATA AFTER LOGOUT----");
		System.out.println(sessionVal);
	  	
	  	
        session.invalidate();
        
		return "redirect:index.html";
		
	
	} 


	
}

