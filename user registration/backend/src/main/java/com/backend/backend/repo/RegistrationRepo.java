package com.backend.backend.repo;

import com.backend.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegistrationRepo extends JpaRepository<User, Integer> {

}
