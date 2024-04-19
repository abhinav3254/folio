package com.abhinav3254.springsecurity30.repository;

import com.abhinav3254.springsecurity30.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Integer> {
    Optional<User> findByEmail(String email);
}
