<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Quilt Piece Options</title>
<link rel="stylesheet" href="/css/selectNew_style.css"/>
</head>
<body>
	<h1>Select a New Quilt Piece To Define</h1>
	<div id="shapeContainer">
		<div id="Triangle" onClick="location.href='/QuiltPiece/New/Triangle'"></div>
		<div id="rightRightTriangle" onClick="location.href='/QuiltPiece/New/rightRightTriangle'"></div>
		<div id="leftRightTriangle" onClick="location.href='/QuiltPiece/New/leftRightTriangle'"></div>
		<div id="Square" onClick="location.href='/QuiltPiece/New/Square'"></div>
		<div id="Rectangle" onClick="location.href='/QuiltPiece/New/Rectangle'"></div>
	</div>
	<div id="toDesign">
		<a href="/QuiltPattern/Design/${pattern_ID}">Ready to Design Pattern</a>
	</div>
	
</body>
</html>