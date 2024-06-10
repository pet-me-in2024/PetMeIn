package com.project.petmein.domain.meongsaeng;

import java.time.LocalDateTime;

import com.project.petmein.web.controller.dto.MeongsaengListRespDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Meongsaeng {

	private int board_code;
	private String board_content;
	
	private LocalDateTime create_date;
	private LocalDateTime update_date;
	
	public MeongsaengListRespDto toListDto() {
		return MeongsaengListRespDto.builder()
				.boardCode(board_code)
				.boardContent(board_content)
				
				.create_date(create_date)
				.update_date(update_date)
				.build();
	}
}
