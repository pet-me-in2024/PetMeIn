package com.project.petmein.web.controller.api;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.petmein.service.meongsaeng.MeongsaengService;
import com.project.petmein.web.controller.dto.CMRespDto;
import com.project.petmein.web.controller.dto.CreateMeongsaengReqDto;
import com.project.petmein.web.controller.dto.UpdateMeongsaengReqDto;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/meongsaeng")
@RequiredArgsConstructor
public class MeongsaengController {
	
	private final MeongsaengService meongsaengService;

	@PostMapping("/board")
	public ResponseEntity<?> addContent(@RequestBody CreateMeongsaengReqDto createMeongsaengReqDto) {
		boolean result = false;

		try {
			result = meongsaengService.createMeongsaeng(createMeongsaengReqDto);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "실패", result));
		}
		return ResponseEntity.ok().body(new CMRespDto<>(1, "성공", result));
	}
	
	@PutMapping("/board/{boardCode}")
	public ResponseEntity<?> setContent(@PathVariable int boardCode, @RequestBody UpdateMeongsaengReqDto updateMeongsaengReqDto) {
		boolean result = false;
		
		try {
			updateMeongsaengReqDto.setBoardCode(boardCode);
			result = meongsaengService.updateMeongsaeng(updateMeongsaengReqDto);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "실패", result));
		}
		return ResponseEntity.ok().body(new CMRespDto<>(1, "성공", result));
	}
	
	@DeleteMapping("/board/{boardCode}")
	public ResponseEntity<?> removeMeongsaeng(@PathVariable int boardCode) {
		boolean result = false;
		
		try {
			result = meongsaengService.removeMeongsaeng(boardCode);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "실패", result));
		}
		return ResponseEntity.ok().body(new CMRespDto<>(1, "성공", result));
	}
}