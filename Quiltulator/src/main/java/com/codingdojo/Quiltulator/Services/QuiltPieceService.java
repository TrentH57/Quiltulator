package com.codingdojo.Quiltulator.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.Quiltulator.Models.QuiltPiece;
import com.codingdojo.Quiltulator.Models.Triangle;
import com.codingdojo.Quiltulator.Repositories.QuiltPieceRepository;

@Service
public class QuiltPieceService {
	
	@Autowired
	private QuiltPieceRepository quiltPieceRepository;
	
	public QuiltPiece create(QuiltPiece newQuiltPiece) {
		return quiltPieceRepository.save(newQuiltPiece);
	}
	

}
