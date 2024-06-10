package com.project.petmein.web.controller.dto;

import com.project.petmein.domain.meongsaeng.Meongsaeng;

import lombok.Data;

@Data
public class UpdateMeongsaengReqDto {

	private int boardCode;
	private String boardContent;
	
	public Meongsaeng toEntity() {
		return Meongsaeng.builder()
				.board_code(boardCode)
				.board_content(boardContent)
				.build();
	}
}

