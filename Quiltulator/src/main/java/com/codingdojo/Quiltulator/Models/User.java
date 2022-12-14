package com.codingdojo.Quiltulator.Models;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "users")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotEmpty(message = "Name field is required")
	@Size(min = 2, max = 100, message = "name must be atleast 2 characters")
	private String name;
	
	@NotEmpty(message = "Email field is required")
	@Email(message="please enter a valid email")
	private String email;
	
	@NotEmpty(message="Password field is requierd")
	@Size(min=8, max=128, message="Password must be between 8 and 128 characters")
	private String password;
	
	@OneToMany(mappedBy="user", fetch=FetchType.LAZY)
	private List<QuiltPattern> quiltPatterns;
	
	@Transient
	@NotEmpty(message="confirm password field is required")
	@Size(min=8, max=128, message="confirm Password must be between 8 and 128 characters")
	private String confirm;
	
	@Column(updatable=false)
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date createdAt;
	
	@Column(updatable=false)
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date updatedAt;

	public User() {
		
	}
	//getters and Setters

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<QuiltPattern> getQuiltPatterns() {
		return quiltPatterns;
	}

	public void setQuiltPatterns(List<QuiltPattern> quiltPatterns) {
		this.quiltPatterns = quiltPatterns;
	}

	public String getConfirm() {
		return confirm;
	}

	public void setConfirm(String confirm) {
		this.confirm = confirm;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}
	
	@PrePersist
    protected void onCreate(){
        this.createdAt = new Date();
    }
	@PreUpdate
    protected void onUpdate(){
        this.updatedAt = new Date();
    }
}
