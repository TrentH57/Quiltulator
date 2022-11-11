package com.codingdojo.Quiltulator.Models;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="righttriangles")
public class RightTriangle extends Triangle {
	@NotNull
	@Min(1)
	private Integer height;

	public RightTriangle() {
		super();
		
	}

	public Integer getHeight() {
		return height;
	}

	public void setHeight(Integer height) {
		this.height = height;
	}
	
	//getters and setters 
	
	

}
