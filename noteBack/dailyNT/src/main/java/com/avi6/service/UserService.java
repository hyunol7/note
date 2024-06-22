package com.avi6.service;

import com.avi6.dto.User.UserDTO;
import com.avi6.entity.AddUser;

public interface UserService {
	
	UserDTO register(UserDTO userDTO);
	UserDTO getUser(String userId);
	UserDTO validateUser(UserDTO userDTO);
	void save(AddUser addUser);

}
