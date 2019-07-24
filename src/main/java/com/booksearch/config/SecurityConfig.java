/**
 * 
 */
package com.booksearch.config;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.session.SessionManagementFilter;


/**
 * @author minyelee
 *
 */
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter{
	
	@Autowired
	private BookSearchUserDetailsService bookSearchUsesrDetailsService;
	
	/* CORS 허용 */
	@Bean
    CorsFilter corsFilter() {
        CorsFilter filter = new CorsFilter();
        return filter;
    }

	@Override
	protected void configure(HttpSecurity security) throws Exception {
		security
		.addFilterBefore(corsFilter(), SessionManagementFilter.class) 
		.authorizeRequests()
		.antMatchers("/").permitAll()
		.antMatchers("/user/**").permitAll()
		.antMatchers("/error/**").permitAll()
		.antMatchers("/basic/**").permitAll()
		.and().sessionManagement().maximumSessions(3)
        .expiredUrl("/");

		
		security.csrf().disable();
		security.userDetailsService(bookSearchUsesrDetailsService);
	}
	

	@Bean
	public PasswordEncoder passwordEncoder() {
		return PasswordEncoderFactories.createDelegatingPasswordEncoder();
	}
	

}
