package com.codingdojo.Quiltulator.Controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.codingdojo.Quiltulator.Models.LoginUser;
import com.codingdojo.Quiltulator.Models.User;
import com.codingdojo.Quiltulator.Services.UserService;

@Controller
public class UserController {
	public final UserService userService;
	public UserController(UserService userService) {
		this.userService = userService;
	}
	
	@GetMapping("/")
	public String loginReg(Model model) {
		model.addAttribute("newUser", new User());
		model.addAttribute("newLogin", new LoginUser());
		return "/users/loginRegister.jsp";
	}
	
	@GetMapping("/home")
	public String home(Model model, HttpSession session) {
		
		model.addAttribute("user", userService.findById((Long) session.getAttribute("user_ID")));
		return "/quilts/home.jsp";
	}
	
	@PostMapping("/register")
	public String register(@Valid @ModelAttribute("newUser")User newUser, BindingResult result, Model model, HttpSession session) {
		if(result.hasErrors()) {
			model.addAttribute("newLogin", new LoginUser());
			return "/users/loginRegister.jsp";
		}
		User createdUser = userService.register(newUser, result);
		if(createdUser == null) {
			model.addAttribute("newLogin", new LoginUser());
			return "/users/loginRegister.jsp";
		}
		session.setAttribute("user_ID", createdUser.getId());
		return "redirect:/home";
	}
	@PostMapping("/login")
	public String login(@Valid @ModelAttribute("newLogin")LoginUser newLogin, BindingResult result, Model model, HttpSession session) {
		if(result.hasErrors()) {
			model.addAttribute("newUser", new User());
			return "/users/loginRegister.jsp";
		}
		User existingUser = userService.login(newLogin, result);//the code gets an error on this line if the "existingUser" is null.
		//code is breaking when user enters an email that doesn't exist in the database and a password. "invalid property "confirm" of bean class LoginUser".
		if(existingUser == null) {
			model.addAttribute("newUser", new User());
			return "/users/loginRegister.jsp";
		}
		session.setAttribute("user_ID", existingUser.getId());
		return "redirect:/home";
	}
	@GetMapping("/logout")
	public String logout(HttpSession session) {
		session.invalidate();
		return "redirect:/";
	}
}
