package com.codingdojo.Quiltulator.Models;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="rectangles")
public class Rectangle extends Square {
	@NotNull
	@Min(1)
	private Integer sideHeight;

	public Rectangle() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Integer getSideHeight() {
		return sideHeight;
	}

	public void setSideHeight(Integer sideHeight) {
		this.sideHeight = sideHeight;
	}
	
	//getters and setters
	

}
