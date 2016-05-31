package com.cricketclub.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Configuration
public class Html5ModeUrlSupportFilter extends OncePerRequestFilter {
    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain)
            throws ServletException, IOException {
        if (isStatic(request) || isApi(request)) {
            filterChain.doFilter(request, response);
        } else {
            request.getRequestDispatcher("/").forward(request, response);
        }
    }

    private boolean isApi(HttpServletRequest request) {
        return request.getRequestURI().indexOf("/api/") >= 0;
    }

    private boolean isStatic(HttpServletRequest request) {
        if(request.getRequestURI().contains("/webjars/")||
                request.getRequestURI().contains("/assets/") || request.getRequestURI().contains("/app/")){
            return true;
        }
        return false;
    }
}
