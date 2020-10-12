package com.backend.backend.controller;


import com.backend.backend.model.User;
import com.backend.backend.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegistrationController {
    @Autowired
    private RegistrationService service;

    @PostMapping(path = "/registerUser")
    public User registerUser(@RequestBody User user) throws Exception {
        String tempEmail = user.getEmailId();
        if (tempEmail != null && !"".equals(tempEmail)) {
            User userObj = service.fetchUserByEmailID(tempEmail);
            if (userObj != null) {
                throw new Exception("user with this " + tempEmail + " is already exist");
            }
        }
        User userObj = null;
        userObj = service.saveUser(user);
        return userObj;
    }

    @PostMapping(path = "/login")
    public User loginUser(@RequestBody User user) throws Exception {
        String tempEmailId = user.getEmailId();
        String tempPassword = user.getPassword();
        User userObj = null;
        if (tempEmailId != null && tempPassword != null) {
            userObj = service.fetchUserByEmailIDAndPassword(tempEmailId, tempPassword);
        }
        if (userObj == null) {
            throw new Exception("user with this email " + tempEmailId + " not registered");
        }

        return userObj;
    }
}
