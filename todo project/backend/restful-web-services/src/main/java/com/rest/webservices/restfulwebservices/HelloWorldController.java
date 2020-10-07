package com.rest.webservices.restfulwebservices;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

//Rest Controller- handle rest request
@RestController
public class HelloWorldController {
    //get method

    //uri - /hello-world
    //method returns - "Hello World"

    @GetMapping(path = "/hello-world")
    public String helloWorld() {
        return "Hello World";
    }
}
