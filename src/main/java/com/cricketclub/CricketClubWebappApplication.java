package com.cricketclub;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession;

@SpringBootApplication
@EnableZuulProxy
@EnableRedisHttpSession
public class CricketClubWebappApplication  {

	public static void main(String[] args) {
		SpringApplication.run(CricketClubWebappApplication.class, args);
	}

}
