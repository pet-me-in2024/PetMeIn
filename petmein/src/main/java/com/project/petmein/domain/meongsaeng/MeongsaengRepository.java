package com.project.petmein.domain.meongsaeng;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MeongsaengRepository {

	public int save(Meongsaeng meongsaeng) throws Exception;
	
	public int updateMeongsaengByMeongsaengCode(Meongsaeng meongsaeng) throws Exception;
	
	public int remove(int board_code) throws Exception;
}
