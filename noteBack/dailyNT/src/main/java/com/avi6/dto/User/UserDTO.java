package com.avi6.dto.User;


import com.avi6.entity.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
	

	private String token;
	private String userId;
	private String password;
	private String role;
	private Long id;
	
	  public UserDTO(User user) {
	        this.id = user.getId();
	        this.userId = user.getUserId();
	        this.password = user.getPassword(); // 비밀번호를 DTO에 포함시키는 것은 일반적으로 권장되지 않습니다.

	    }
	
	
	

}
