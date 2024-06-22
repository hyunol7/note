package com.avi6.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.avi6.dto.User.UserDTO;
import com.avi6.entity.AddUser;
import com.avi6.entity.User;
import com.avi6.repository.UserRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j 
public class UserServiceImpl implements UserService{

	@Autowired
	private final UserRepository userRepository;
	
	 @Autowired
	    private PasswordEncoder passwordEncoder;

	@Override
	@Transactional
	public UserDTO register(UserDTO userDTO) {
		 String encodedPassword = passwordEncoder.encode(userDTO.getPassword());
	        User user = User.builder()
	                .userId(userDTO.getUserId())
	                .password(encodedPassword)
	                .role("User")
	                .build();
	        userRepository.save(user);
	        return new UserDTO(user);
	}

	@Override
	public UserDTO getUser(String userId) {
		User user = userRepository.findByUserId(userId);
		if(user == null) {
			throw new RuntimeException("못 찾음");
		}
		return new UserDTO(user);
	}

	@Override
	public UserDTO validateUser(UserDTO userDTO) {
	    User user = userRepository.findByUserId(userDTO.getUserId());
	    if (user != null && passwordEncoder.matches(userDTO.getPassword(), user.getPassword())) {
	        return new UserDTO(user.getUserId(), null, null, null, null); // email을 사용하지 않음
	    }
	    return null;
	}

	@Override
	public void save(AddUser addUser) {
		// TODO Auto-generated method stub
		
	}

	

	
}
