package com.avi6.repository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;

import com.avi6.entity.note.Note;

import jakarta.transaction.Transactional;



public interface NoteRepository extends JpaRepository<Note, Long> {
	
	 @Modifying
	 @Transactional
	    @Query("update Note n set n.title = :title, n.content = :content, n.modDate = :modDate, n.regDate = :regDate where n.nno = :nno")
	    void updateNote(@Param("nno") Long nno, @Param("title") String title, @Param("content") String content, @Param("modDate") LocalDate localDate, @Param("regDate") LocalDateTime localDateTime);

	
	 
	
}
