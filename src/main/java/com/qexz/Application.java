package com.qexz;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.convert.converter.Converter;

import java.util.Date;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Bean
	public Converter<Long, Date> addNewConvert() {
		return new Converter<Long, Date>() {
			@Override
			public Date convert(Long source) {
				Date date = null;
				try {
					date = new Date(source);
				} catch (Exception e) {
					e.printStackTrace();
				}
				return date;
			}
		};
	}
}
