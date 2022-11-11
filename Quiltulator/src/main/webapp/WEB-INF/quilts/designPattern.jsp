<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Design Pattern</title>
<link rel="stylesheet" href="/CSS/designPattern_style.css"/>
<script src="/SCRIPT/designPattern.js"></script>
</head>
<body id="canvas">
	<h1><c:out value="${QuiltPattern.patternName}"></c:out> Canvas</h1>
	<a href="/QuiltPiece/New">Add new shape</a>
	<button onclick="calculateFabricYards()">Calculate Fabric yards</button>
	<div id=wrapper>
		<div id="quiltpieceNavBar"></div>
		<div id="quiltPatternCanvas" ondragover="drag_over(event)" ondrop="drop(event)"></div>		
	</div>
	
	<c:forEach var="quiltPiece" items="${QuiltPattern.quiltPieces}">
		<c:if test="${quiltPiece.polygonName == 'EqualateralTriangle'}">
		<script>createQuiltPieceBuilderTriangle("${quiltPiece.id}", "${quiltPiece.polygonName}", "${quiltPiece.fabricId}", "${quiltPiece.baseLength}");</script>
		</c:if>
		<c:if test="${quiltPiece.polygonName == 'rightRightTriangle'}">
		<script>createQuiltPieceBuilderRightTriangle("${quiltPiece.id}", "${quiltPiece.polygonName}", "${quiltPiece.fabricId}", "${quiltPiece.baseLength}", "${quiltPiece.height}");</script>
		</c:if>
		<c:if test="${quiltPiece.polygonName == 'leftRightTriangle'}">
		<script>createQuiltPieceBuilderRightTriangle("${quiltPiece.id}", "${quiltPiece.polygonName}", "${quiltPiece.fabricId}", "${quiltPiece.baseLength}", "${quiltPiece.height}");</script>
		</c:if>
		<c:if test="${quiltPiece.polygonName == 'Square'}">
		<script>createQuiltPieceBuilderSquare("${quiltPiece.id}", "${quiltPiece.polygonName}", "${quiltPiece.fabricId}", "${quiltPiece.sideLength}");</script>
		</c:if>
		<c:if test="${quiltPiece.polygonName == 'Rectangle'}">
		<script>createQuiltPieceBuilderRectangle("${quiltPiece.id}", "${quiltPiece.polygonName}", "${quiltPiece.fabricId}", "${quiltPiece.sideLength}", "${quiltPiece.sideHeight}");</script>
		</c:if>
	</c:forEach>
	<div id="fabricDisplayBox">
		<div id=Ayards class="yardBox">
			<p>Fabric A Needed</p>
			<p id="AsmallYard"></p>
			<p id="AmediumYard"></p>
			<p id="AlargeYard"></p>
		</div>
		<div id=Byards class="yardBox">
			<p>Fabric B Needed</p>
			<p id="BsmallYard"></p>
			<p id="BmediumYard"></p>
			<p id="BlargeYard"></p>
		</div>
		<div id=Cyards class="yardBox">
			<p>Fabric C Needed</p>
			<p id="CsmallYard"></p>
			<p id="CmediumYard"></p>
			<p id="ClargeYard"></p>
		</div>
		<div id=Dyards class="yardBox">
			<p>Fabric D Needed</p>
			<p id="DsmallYard"></p>
			<p id="DmediumYard"></p>
			<p id="DlargeYard"></p>
		</div>
		<div id=Eyards class="yardBox">
			<p>Fabric E Needed</p>
			<p id="EsmallYard"></p>
			<p id="EmediumYard"></p>
			<p id="ElargeYard"></p>
		</div>
		<div id=Fyards class="yardBox">
			<p>Fabric F Needed</p>
			<p id="FsmallYard"></p>
			<p id="FmediumYard"></p>
			<p id="FlargeYard"></p>
		</div>
		<div id=Gyards class="yardBox">
			<p>Fabric G Needed</p>
			<p id="GsmallYard"></p>
			<p id="GmediumYard"></p>
			<p id="GlargeYard"></p>
		</div>
	</div>
	
	
</body>
</html>