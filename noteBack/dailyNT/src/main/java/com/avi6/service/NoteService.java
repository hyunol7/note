package com.avi6.service;

import java.util.List;

import com.avi6.dto.PageRequestDTO;
import com.avi6.dto.PageResponseDTO;
import com.avi6.dto.note.NoteDTO;

public interface NoteService {

    // 노트 등록 메서드
    Long register(NoteDTO noteDTO);

    // 페이지 요청에 따른 노트 리스트 반환 메서드
    PageResponseDTO<NoteDTO> getList(PageRequestDTO pageRequestDTO);

    // 특정 노트 상세 정보 반환 메서드
    NoteDTO get(Long nno);

    // 노트 삭제 메서드
    void delArticle(Long nno);

    // 노트 수정 메서드
    void updateArticle(NoteDTO noteDTO);

    // 모든 노트 반환 메서드
    List<NoteDTO> getAllNotes();
}
