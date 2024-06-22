package com.avi6;


import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.avi6.entity.note.Note;
import com.avi6.repository.NoteRepository;

@SpringBootTest
public class NoreRepoTest {

	@Autowired
	private NoteRepository noteRepository;
	
	@Test
	void InsertNote() {
		for(int i = 0; i < 10; i++) {
			
			Note note = Note.builder()
					.title("제목" + i)
					.content("내용" + i)
					
					.build();
			
		noteRepository.save(note);
		}
	}
}
