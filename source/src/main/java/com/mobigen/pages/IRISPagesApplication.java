package com.mobigen.pages;

import com.mobigen.framework.security.CustomHttpSessionListener;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.security.web.context.SecurityContextRepository;

@EnableCaching
@EnableAsync
@EnableAspectJAutoProxy
@ComponentScan(basePackages = {"com"})
@ServletComponentScan
@SpringBootApplication
public class IRISPagesApplication {
    public static void main(String[] args) {
        SpringApplication.run(IRISPagesApplication.class, args);
    }

    @Bean
    public CustomHttpSessionListener customHttpSessionListener() {
        return new CustomHttpSessionListener();
    }

    @Bean
    public SecurityContextRepository securityContextRepository() {
        return new HttpSessionSecurityContextRepository();
    }
}
