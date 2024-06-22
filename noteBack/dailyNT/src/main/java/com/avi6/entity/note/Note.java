package com.avi6.entity.note;

import com.avi6.entity.User;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString
@Table(name = "note")
public class Note {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long nno;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String content;

  
    private Long id;

    @Column(nullable = false)
    private LocalDateTime regDate;

    @Column(nullable = false)
    private LocalDate modDate;

    @ElementCollection
    @Builder.Default
    private List<String> uploadFileNames = new ArrayList<>();

    public void setRegDate(LocalDateTime regDate) {
        this.regDate = regDate;
    }

    public void setModDate(LocalDate modDate) {
        this.modDate = modDate;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setContent(String content) {
        this.content = content;
    }

	public Long getId() {
		return this.id;
	}

    public void setId(Long id) {
        this.id = id;
    }

    @PrePersist
    @PreUpdate
    private void updateTimestamps() {
        if (this.regDate == null) {
            this.regDate = LocalDateTime.now(); // Ensure regDate is always set to the current time
        }
        this.modDate = LocalDate.now(); // Ensure modDate is always set to the current date
    }
}
