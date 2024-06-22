package com.avi6.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.avi6.entity.User;



public interface UserRepository extends JpaRepository<User, Long> {

	User findByUserId(String userId);
	Boolean existsByUserId(String userId);
	User findByUserIdAndPassword(String userId, String Password);
}
