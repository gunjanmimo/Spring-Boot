package com.backend.backend.service;


import com.backend.backend.model.User;
import com.backend.backend.repo.RegistrationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class RegistrationService {
    @Autowired
    private RegistrationRepo repo; // injected repo

    public User saveUser(User user) {
        return repo.save(user);
    }

    public User fetchUserByEmailID(String email) {
        return repo.findByEmailId(email);
    }

    public User fetchUserByEmailIDAndPassword(String email, String password) {
        return repo.findByEmailIdAndPassword(email, password);
    }

}
