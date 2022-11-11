package com.codingdojo.Quiltulator.Models;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="quiltpatterns")
public class QuiltPattern {
	//attributes 
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private Long id;
		
		@NotNull
		private String patternName;
		
		@OneToMany(mappedBy="quiltPattern", fetch=FetchType.LAZY)
		private List<QuiltPiece> quiltPieces;
		
		@ManyToOne(fetch=FetchType.LAZY)
		@JoinColumn(name="user_id")
		private User user;
		
		@Column(updatable=false)
		@DateTimeFormat(pattern="yyyy-MM-dd")
		private Date createdAt;
		
		@Column(updatable=false)
		@DateTimeFormat(pattern="yyyy-MM-dd")
		private Date updatedAt;
		
		//constructor
		public QuiltPattern() {
			
		}

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getPatternName() {
			return patternName;
		}

		public void setPatternName(String patternName) {
			this.patternName = patternName;
		}

		public List<QuiltPiece> getQuiltPieces() {
			return quiltPieces;
		}

		public void setQuiltPieces(List<QuiltPiece> quiltPieces) {
			this.quiltPieces = quiltPieces;
		}

		public Date getCreatedAt() {
			return createdAt;
		}

		public Date getUpdatedAt() {
			return updatedAt;
		}
		
		public User getUser() {
			return user;
		}

		public void setUser(User user) {
			this.user = user;
		}

		@PrePersist
	    protected void onCreate(){
	        this.createdAt = new Date();
	    }
		@PreUpdate
	    protected void onUpdate(){
	        this.updatedAt = new Date();
	    }
		//getters and setters
		
}
