package com.codingdojo.Quiltulator.Controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.codingdojo.Quiltulator.Models.Rectangle;
import com.codingdojo.Quiltulator.Models.RightTriangle;
import com.codingdojo.Quiltulator.Models.Square;
import com.codingdojo.Quiltulator.Models.Triangle;
import com.codingdojo.Quiltulator.Services.QuiltPieceService;

@Controller
public class QuiltPieceController {
	private final QuiltPieceService quiltPieceService;

	public QuiltPieceController(QuiltPieceService quiltPieceService) {
		this.quiltPieceService = quiltPieceService;
		// TODO Auto-generated constructor stub
	}
		
	@GetMapping("/QuiltPiece/New")
	public String newQuiltPiece() {
		return "/quiltpieces/selectNew.jsp";
	}
	
	@GetMapping("/QuiltPiece/New/Triangle")
	public String newQuiltPiece(@ModelAttribute("newQuiltPiece")Triangle triangle, HttpSession session) {
		return "/quiltpieces/Triangles/newTriangle.jsp";
	}
	
	@PostMapping("/QuiltPiece/Create/Triangle")
	public String createQuiltPiece(@Valid @ModelAttribute("newQuiltPiece")Triangle triangle, BindingResult result, HttpSession session) {
		if(result.hasErrors()) {
			return "/quiltpieces/Triangles/newTriangle.jsp";
		}
		quiltPieceService.create(triangle);
		return "redirect:/QuiltPiece/New";
	}
	
	@GetMapping("/QuiltPiece/New/rightRightTriangle")
	public String newQuiltPieceRight(@ModelAttribute("newQuiltPiece")RightTriangle rightrighttriangle, HttpSession session) {
		return "/quiltpieces/Triangles/newrightRightTriangle.jsp";
	}
	
	@PostMapping("/QuiltPiece/Create/rightRightTriangle")
	public String createQuiltPieceRight(@Valid @ModelAttribute("newQuiltPiece")RightTriangle rightrighttriangle, BindingResult result, HttpSession session) {
		if(result.hasErrors()) {
			return "/quiltpieces/Triangles/newrightRightTriangle.jsp";
		}
		quiltPieceService.create(rightrighttriangle);
		return "redirect:/QuiltPiece/New";
	}
	
	@GetMapping("/QuiltPiece/New/leftRightTriangle")
	public String newQuiltPieceLeft(@ModelAttribute("newQuiltPiece")RightTriangle leftrighttriangle, HttpSession session) {
		return "/quiltpieces/Triangles/newleftRightTriangle.jsp";
	}
	
	@PostMapping("/QuiltPiece/Create/leftRightTriangle")
	public String createQuiltPieceLeft(@Valid @ModelAttribute("newQuiltPiece")RightTriangle leftrighttriangle, BindingResult result, HttpSession session) {
		if(result.hasErrors()) {
			return "/quiltpieces/Triangles/newleftRightTriangle.jsp";
		}
		quiltPieceService.create(leftrighttriangle);
		return "redirect:/QuiltPiece/New";
	}
	
	@GetMapping("/QuiltPiece/New/Square")
	public String newQuiltPiece(@ModelAttribute("newQuiltPiece")Square square, HttpSession session) {
		return "/quiltpieces/Squares/newSquare.jsp";
	}
	
	@PostMapping("/QuiltPiece/Create/Square")
	public String createQuiltPiece(@Valid @ModelAttribute("newQuiltPiece")Square square, BindingResult result, HttpSession session) {
		if(result.hasErrors()) {
			return "/quiltpieces/Squares/newSquare.jsp";
		}
		quiltPieceService.create(square);
		return "redirect:/QuiltPiece/New";
	}
	
	@GetMapping("/QuiltPiece/New/Rectangle")
	public String newQuiltPiece(@ModelAttribute("newQuiltPiece")Rectangle rectangle, HttpSession session) {
		return "/quiltpieces/Squares/newRectangle.jsp";
	}
	
	@PostMapping("/QuiltPiece/Create/Rectangle")
	public String createQuiltPiece(@Valid @ModelAttribute("newQuiltPiece")Rectangle rectangle, BindingResult result, HttpSession session) {
		if(result.hasErrors()) {
			return "/quiltpieces/Squares/newRectangle.jsp";
		}
		quiltPieceService.create(rectangle);
		return "redirect:/QuiltPiece/New";
	}
	
	

}
