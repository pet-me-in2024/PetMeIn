package com.project.petmein.service.meongsaeng;

import com.project.petmein.web.controller.dto.CreateMeongsaengReqDto;
import com.project.petmein.web.controller.dto.UpdateMeongsaengReqDto;

public interface MeongsaengService {

	public boolean createMeongsaeng(CreateMeongsaengReqDto createMeongsaengReqDto) throws Exception;
	
	public boolean updateMeongsaeng(UpdateMeongsaengReqDto updateMeongsaengReqDto) throws Exception;
	
	public boolean removeMeongsaeng(int boardCode) throws Exception;
}
