<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ page isErrorPage="true" %>
    <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>New Quilt Piece</title>
</head>
<body>
	<form:form action="/QuiltPiece/Create/leftRightTriangle" method="post" modelAttribute="newQuiltPiece">
		<p>
			<form:input type="hidden" value="${pattern_ID}" path="quiltPattern"/>
		</p>
	    <p>
	        <form:input type="hidden" value="leftRightTriangle" path="polygonName"/>
	    </p>
	    <p>
	        <form:label path="fabricId">Fabric Identifier</form:label>
	        <form:errors path="fabricId"/>
	        <form:input path="fabricId"/>
	    </p>   
	    <p>
	        <form:label path="baseLength">Base Length</form:label>
	        <form:errors path="baseLength"/>
	        <form:input path="baseLength"/>
	    </p> 
	    <p>
	        <form:label path="height">Height</form:label>
	        <form:errors path="height"/>
	        <form:input path="height"/>
	    </p>
	    <input type="submit" value="Submit"/>
	</form:form>
</body>
</html>