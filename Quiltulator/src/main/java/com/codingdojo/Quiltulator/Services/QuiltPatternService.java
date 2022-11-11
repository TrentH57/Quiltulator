package com.codingdojo.Quiltulator.Services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.Quiltulator.Models.QuiltPattern;
import com.codingdojo.Quiltulator.Repositories.QuiltPatternRepository;

@Service
public class QuiltPatternService {
	
	@Autowired
	private QuiltPatternRepository quiltPatternRepository;
	
	public QuiltPattern create(QuiltPattern newQuiltPattern) {
		return quiltPatternRepository.save(newQuiltPattern);
	}
	public QuiltPattern findById(Long id) {
		Optional<QuiltPattern> potentialQuiltPattern = quiltPatternRepository.findById(id);
		return potentialQuiltPattern.isPresent()? potentialQuiltPattern.get() : null;
	}
}
