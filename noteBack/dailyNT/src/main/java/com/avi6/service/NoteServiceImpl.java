package com.avi6.service;

import com.avi6.controller.NoteController;
import com.avi6.dto.PageRequestDTO;
import com.avi6.dto.PageResponseDTO;
import com.avi6.dto.note.NoteDTO;
import com.avi6.entity.note.Note;
import com.avi6.repository.NoteRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;
import lombok.extern.log4j.Log4j2;
import lombok.extern.slf4j.Slf4j;

import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.info.ProjectInfoProperties.Build;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j 
public class NoteServiceImpl implements NoteService {

	@Autowired
    private final NoteRepository noteRepository;

    @Override
    @Transactional
    public Long register(NoteDTO noteDTO) {
        Note note = dtoToEntity(noteDTO);
        noteRepository.save(note);
        return note.getNno();
    }
    
    @Transactional(readOnly = true)
    public List<NoteDTO> getAllNotes() {
        return noteRepository.findAll().stream()
                             .map(this::entityToDto)
                             .collect(Collectors.toList());
    }


    @Override
    public PageResponseDTO<NoteDTO> getList(PageRequestDTO pageRequestDTO) {
        Pageable pageable = pageRequestDTO.getPageable(Sort.by("nno").descending());
        Page<Note> result = noteRepository.findAll(pageable);

        List<NoteDTO> dtoList = result.stream()
                .map(note -> entityToDto(note))
                .collect(Collectors.toList());

        return new PageResponseDTO<>(dtoList, pageRequestDTO, result.getTotalElements());
    }



    @Override
    @Transactional
    public void delArticle(Long nno) {
        noteRepository.deleteById(nno);
    }

    @Override
    @Transactional
    public void updateArticle(NoteDTO noteDTO) {
        Optional<Note> result = noteRepository.findById(noteDTO.getNno());
        if (result.isPresent()) {
            Note note = result.get();
            note.setTitle(noteDTO.getTitle() != null ? noteDTO.getTitle() : note.getTitle());
            note.setContent(noteDTO.getContent() != null ? noteDTO.getContent() : note.getContent());
            noteRepository.save(note);
        } else {
            throw new IllegalArgumentException("Note not found with id: " + noteDTO.getNno());
        }
    }
    
    private Note dtoToEntity(NoteDTO noteDTO) {
        return Note.builder()
                .nno(noteDTO.getNno())
                .title(noteDTO.getTitle())
                .content(noteDTO.getContent())
                .regDate(noteDTO.getRegDate())
                .modDate(noteDTO.getModDate())
                .uploadFileNames(noteDTO.getUploadFileNames())
                .build();
    }

    private NoteDTO entityToDto(Note note) {
        return NoteDTO.builder()
                .nno(note.getNno())
                .title(note.getTitle())
                .content(note.getContent())
                .regDate(note.getRegDate())
                .modDate(note.getModDate())
                .uploadFileNames(note.getUploadFileNames())
                .build();
    }

    @Override
    @Transactional(readOnly = true)
    public NoteDTO get(Long nno) {
        Optional<Note> result = noteRepository.findById(nno);
        if (result.isPresent()) {
            return entityToDto(result.get());
        }
        return null;
    }
}
