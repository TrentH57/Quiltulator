package com.codingdojo.Quiltulator.Models;



import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="quiltpieces")
public class QuiltPiece {
	//attributes 
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotNull
	private String polygonName;
	
	@NotNull
	private String fabricId;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="quiltPattern_id")
	private QuiltPattern quiltPattern;
	
	@Column(updatable=false)
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date createdAt;
	
	@Column(updatable=false)
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date updatedAt;
	
	//constructor
	public QuiltPiece() {
		
	}

	//getters and setters
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPolygonName() {
		return polygonName;
	}

	public void setPolygonName(String polygonName) {
		this.polygonName = polygonName;
	}

	public String getFabricId() {
		return fabricId;
	}

	public void setFabricId(String fabricId) {
		this.fabricId = fabricId;
	}
	
	public Date getCreatedAt() {
		return createdAt;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}
	

	
	public QuiltPattern getQuiltPattern() {
		return quiltPattern;
	}

	public void setQuiltPattern(QuiltPattern quiltPattern) {
		this.quiltPattern = quiltPattern;
	}

	@PrePersist
    protected void onCreate(){
        this.createdAt = new Date();
    }
	@PreUpdate
    protected void onUpdate(){
        this.updatedAt = new Date();
    }
	
	//methods
	
	public Double calculateArea() {
		return null;
	}
	
	
	
}
