package com.codingdojo.Quiltulator.Models;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;


@Entity
@Table(name="triangles")
public class Triangle extends QuiltPiece {
	@NotNull
	@Min(1)
	private Integer baseLength;

	public Triangle() {
		super();
		
	}

	
	//getters and setters
	public Integer getBaseLength() {
		return baseLength;
	}

	public void setBaseLength(Integer baseLength) {
		this.baseLength = baseLength;
	}
	
	
	

}
