package com.qexz.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession;

/**
 * 分布式session一致性,redis,7天
 */
@Configuration
@EnableRedisHttpSession(maxInactiveIntervalInSeconds = 86400*7)
public class SessionConfig {
}
