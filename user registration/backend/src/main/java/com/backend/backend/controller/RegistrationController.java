package com.backend.backend.controller;


import com.backend.backend.model.User;
import com.backend.backend.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegistrationController {
    @Autowired
    private RegistrationService service;

    @GetMapping(path = "/registerUser")
    public User registerUser(@RequestBody User user) {
        String tempEmail = user.getEmailId();
        if (tempEmail != null && !"".equals(tempEmail)) {

        }
        User userObj = null;
        userObj = service.saveUser(user);
        return userObj;
    }
}
