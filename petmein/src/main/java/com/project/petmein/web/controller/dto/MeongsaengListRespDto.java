package com.project.petmein.web.controller.dto;

import java.time.LocalDateTime;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class MeongsaengListRespDto {

	private int boardCode;
	private String boardContent;
	
	private LocalDateTime create_date;
	private LocalDateTime update_date;
}
