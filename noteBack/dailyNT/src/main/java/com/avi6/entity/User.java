package com.avi6.entity;

import java.util.Map;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // 유저에게 고유하게 부여되는 id

    @Column(nullable = false, unique = true)
    private String userId; // 아이디로 사용할 유저네임. 이메일일 수도 그냥 문자열일 수도 있다.

    private String password; // 패스워드.

    private String role; // 유저의 롤.

    private String authProvider; // example : facebook

	public Map<String, Object> getClaims() {
		// TODO Auto-generated method stub
		return null;
	}
}
