package com.avi6.dto;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor
public class PageRequestDTO {
   
   @Builder.Default
   private int page = 1;
   
   @Builder.Default
   private int size = 10;
   
   public Pageable getPageable(Sort sort) {
       return PageRequest.of(page - 1, size, sort);
   }


   
}