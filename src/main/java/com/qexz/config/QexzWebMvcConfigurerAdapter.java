package com.qexz.config;

import com.qexz.common.QexzConst;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class QexzWebMvcConfigurerAdapter extends WebMvcConfigurerAdapter {


    /**
     * 配置静态访问资源
     * @param registry
     */
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        //自定义项目内目录
        //registry.addResourceHandler("/my/**").addResourceLocations("classpath:/my/");
        //指向外部目录
        registry.addResourceHandler("/upload/**").addResourceLocations(QexzConst.UPLOAD_FILE_PATH);
        super.addResourceHandlers(registry);
    }
}