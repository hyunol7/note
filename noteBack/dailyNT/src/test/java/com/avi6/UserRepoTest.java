package com.avi6;

import java.time.LocalDate;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.avi6.entity.User;
import com.avi6.entity.note.Note;

import com.avi6.repository.NoteRepository;
import com.avi6.repository.UserRepository;

@SpringBootTest
public class UserRepoTest {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	  private PasswordEncoder passwordEncoder;
	
	@Test
	void InsertUser() {
		for(int i = 0; i < 10; i++) {
			
			User user = User.builder()
					.userId("user" + i +"@aaa.com")
					.password(passwordEncoder.encode("1111"))
					.build();
			
		userRepository.save(user);
		}
	}

}
