package com.project.petmein.service.meongsaeng;

import org.springframework.stereotype.Service;

import com.project.petmein.domain.meongsaeng.MeongsaengRepository;
import com.project.petmein.web.controller.dto.CreateMeongsaengReqDto;
import com.project.petmein.web.controller.dto.UpdateMeongsaengReqDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MeongsaengServiceImpl implements MeongsaengService{

	private final MeongsaengRepository meongsaengRepository;
	
	@Override
	public boolean createMeongsaeng(CreateMeongsaengReqDto createMeongsaengReqDto) throws Exception {
		return meongsaengRepository.save(createMeongsaengReqDto.toEntity()) > 0;
	}

	@Override
	public boolean updateMeongsaeng(UpdateMeongsaengReqDto updateMeongsaengReqDto) throws Exception {
		return meongsaengRepository.updateMeongsaengByMeongsaengCode(updateMeongsaengReqDto.toEntity()) > 0;
	}

	@Override
	public boolean removeMeongsaeng(int boardCode) throws Exception {
		return meongsaengRepository.remove(boardCode) > 0;
	}

}
