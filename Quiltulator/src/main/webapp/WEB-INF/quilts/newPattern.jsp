<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ page isErrorPage="true" %>
    <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>New Quilt Pattern</title>
<link rel="stylesheet" href="/css/newPattern_style.css"/>
</head>
<body>
	<div id="wrapper">
		<form:form action="/QuiltPattern/Create" method="post" modelAttribute="newQuiltPattern">
			<p>
				<form:input type="hidden" value="${user_ID}" path="user"/>
			</p>
		    <p>
		        <form:label path="patternName">Pattern Name</form:label>
		        <form:errors path="patternName"/>
		        <form:input path="patternName"/>
		    </p>
		    <input type="submit" value="Create New Pattern"/>
		</form:form>
	</div>
</body>
</html>