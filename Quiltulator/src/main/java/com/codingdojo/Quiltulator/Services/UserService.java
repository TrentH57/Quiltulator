package com.codingdojo.Quiltulator.Services;

import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.codingdojo.Quiltulator.Models.User;
import com.codingdojo.Quiltulator.Repositories.UserRepository;
import com.codingdojo.Quiltulator.Models.LoginUser;

@Service
public class UserService{
	@Autowired
    private UserRepository userRepo;
	
	
	public User findById(Long id) {
		Optional<User> potentialUser = userRepo.findById(id);
		return potentialUser.isPresent()? potentialUser.get() : null;
	}
	
    public User getUser(String email) {
    	Optional<User> potentialUser = userRepo.findByEmail(email);
    	return potentialUser.isPresent()? potentialUser.get() : null;
    }
    
    public User register(User newUser, BindingResult result) {
    	if(result.hasErrors()) {
    		return null;
    	}
    	if(getUser(newUser.getEmail()) != null) {
    		result.rejectValue("email", "unique", "The email entered is already being used");
    		return null;
    	}
    	if(!newUser.getPassword().equals(newUser.getConfirm())) {
    	    result.rejectValue("confirm", "Matches", "The Confirm Password must match Password!");
    	    return null;
    	}
    	
    	String hashed = BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt());
    	newUser.setPassword(hashed);
        return userRepo.save(newUser);
    }
    
    public User login(LoginUser newLogin, BindingResult result) {
    	if(result.hasErrors()) {
    		return null;
    	}
    	User existingUser = getUser(newLogin.getEmail());
    	if(existingUser == null){
    		result.rejectValue("email", "unique","Email entered was not found");
    		return null;
    	}
    	if(!BCrypt.checkpw(newLogin.getPassword(), existingUser.getPassword())) {
    	    result.rejectValue("password", "Matches", "Invalid Password!");
    	    return null;
    	}
        return existingUser;
    }
}
