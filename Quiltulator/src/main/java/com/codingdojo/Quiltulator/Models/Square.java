package com.codingdojo.Quiltulator.Models;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="squares")
public class Square extends QuiltPiece {
	@NotNull
	@Min(1)
	private Integer sideLength;
	public Square() {
		super();
		
	}
	public Integer getSideLength() {
		return sideLength;
	}
	public void setSideLength(Integer sideLength) {
		this.sideLength = sideLength;
	}

	//getters and setters
	
	
}
