package com.codingdojo.Quiltulator.Repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.codingdojo.Quiltulator.Models.User;

public interface UserRepository extends CrudRepository<User, Long>{
	Optional<User> findByEmail(String email);
}
