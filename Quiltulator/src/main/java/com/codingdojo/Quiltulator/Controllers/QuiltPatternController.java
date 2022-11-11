package com.codingdojo.Quiltulator.Controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.codingdojo.Quiltulator.Models.QuiltPattern;
import com.codingdojo.Quiltulator.Services.QuiltPatternService;


@Controller
public class QuiltPatternController {
	private final QuiltPatternService quiltPatternService;
	
	public QuiltPatternController(QuiltPatternService quiltPatternService) {
		this.quiltPatternService= quiltPatternService;
	}
		
	@GetMapping("/QuiltPattern/New")
	public String newQuiltPattern(@ModelAttribute("newQuiltPattern")QuiltPattern quiltPattern) {
		return "/quilts/newPattern.jsp";
	}
	
	@PostMapping("/QuiltPattern/Create")
	public String createQuiltPattern(@Valid @ModelAttribute("newQuiltPattern")QuiltPattern quiltPattern, BindingResult result, HttpSession session) {
		if(result.hasErrors()) {
			return "/quilts/newPattern.jsp";
		}
		QuiltPattern newQuiltPattern = quiltPatternService.create(quiltPattern);
		session.setAttribute("pattern_ID", newQuiltPattern.getId());
		return "redirect:/QuiltPiece/New";
	}
	@GetMapping("/QuiltPattern/Design/{patternID}")
	public String designQuiltPattern(@PathVariable("patternID")Long patternID, Model model, HttpSession session) {
		model.addAttribute("QuiltPattern", quiltPatternService.findById(patternID));
		session.setAttribute("pattern_ID", patternID);
		return "quilts/designPattern.jsp";
	}
}
