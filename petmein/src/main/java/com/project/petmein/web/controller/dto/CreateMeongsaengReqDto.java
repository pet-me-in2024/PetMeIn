package com.project.petmein.web.controller.dto;

import com.project.petmein.domain.meongsaeng.Meongsaeng;

import lombok.Data;

@Data
public class CreateMeongsaengReqDto {

	private String meongsaengContent;
	
	public Meongsaeng toEntity() {
		return Meongsaeng.builder()
				.board_content(meongsaengContent)
				.build();
	}
}
