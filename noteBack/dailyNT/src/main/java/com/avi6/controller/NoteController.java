package com.avi6.controller;

import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.avi6.dto.PageRequestDTO;
import com.avi6.dto.PageResponseDTO;
import com.avi6.dto.note.NoteDTO;
import com.avi6.service.NoteService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequiredArgsConstructor
@RequestMapping("/note")

@Slf4j // 로그 사용을 위해 추가
public class NoteController {
	
	private final NoteService noteService;
	
	//조회
	@CrossOrigin(origins = "*")
	@GetMapping("/{nno}")
	public NoteDTO get(@PathVariable(name="nno") Long nno) {
		log.info("Fetching note with id: {}", nno);
		return noteService.get(nno);
	}
	
	  @ExceptionHandler(Exception.class)
	    public ResponseEntity<String> handleException(Exception e) {
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
	    }
	

	//리스트 조회
	@CrossOrigin(origins = "*")
	@GetMapping("/list")
	public List<NoteDTO> list() {
		log.info("Fetching all notes");
		return noteService.getAllNotes();
	}

	//등록
	@PostMapping("/")
	public Map<String, Long> register(@RequestBody NoteDTO noteDTO){
		log.info("Registering new note: {}", noteDTO);
		Long nno = noteService.register(noteDTO);
		return Map.of("NNO", nno);
	}

	//수정
	@PutMapping("/{nno}")
	public Map<String, String> modify(@PathVariable(name="nno") Long nno, @RequestBody NoteDTO noteDTO){
		log.info("Updating note with id: {}", nno);
		log.info("Note data: {}", noteDTO); 
		noteDTO.setNno(nno);
		noteService.updateArticle(noteDTO);
		return Map.of("RESULT", "SUCCESS");
	}
	

	//삭제
	@DeleteMapping("/{nno}")
	public Map<String, String> delete(@PathVariable(name="nno") Long nno) {
		log.info("Deleting note with id: {}", nno);
		noteService.delArticle(nno);
		return Map.of("RESULT", "SUCCESS");
	}
}
