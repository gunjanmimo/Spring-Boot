package com.example.hello_world;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AppConfiguration {

    @RequestMapping("/hello")
    public String hello() {
        return "hello world";
    }
}
