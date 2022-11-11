<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Dashboard</title>
<link rel="stylesheet" href="/css/home_style.css"/>
</head>
<body>
	<div id="Nav-bar">
	<a href="/logout">Logout</a>
		<div id="wrapper">
			<h1>Your Patterns</h1>
			<a href="/QuiltPattern/New">+New Pattern</a>
			<ul>
			<c:forEach var="pattern" items="${user.quiltPatterns}">
			<li><a href="/QuiltPattern/Design/${pattern.id}"><c:out value="${pattern.patternName}"></c:out></a></li>
			</c:forEach>
			</ul>
		</div>
	</div>
</body>
</html>