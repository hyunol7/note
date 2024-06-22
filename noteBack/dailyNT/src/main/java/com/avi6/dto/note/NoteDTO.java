package com.avi6.dto.note;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.avi6.entity.note.Note;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class NoteDTO {
	
	private Long nno;
	
	private String title;
	
	private String content;
		
	private Long id;
	
	private LocalDate modDate;
	
	private LocalDateTime regDate;
	

	  @Builder.Default
	  private List<MultipartFile> files = new ArrayList<>();

	  @Builder.Default
	  private List<String> uploadFileNames = new ArrayList<>();
	  
	  public NoteDTO(Note note) {
	        this.nno = note.getNno();
	        this.title = note.getTitle();
	        this.content = note.getContent();
	        this.id = note.getId();
	  }
	  
	  public static Note toEntity(final NoteDTO noteDTO) {
		  return Note.builder()
				  .id(noteDTO.getId())
				  .title(noteDTO.getTitle())
				  .content(noteDTO.getContent())
				  .nno(noteDTO.getNno())
				  .build();
	  }

	public LocalDateTime getRegDate() {
		// TODO Auto-generated method stub
		return null;
	}

}
