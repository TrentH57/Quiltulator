<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ page isErrorPage="true" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Login</title>
<link rel="stylesheet" href="/css/loginReg_style.css"/>
</head>
<body>
	<h1>Quiltulator</h1>
	<div id="wrapper">
	<div>
		<h2>Register</h2>
			<form:form action="/register" method="post" modelAttribute="newUser">
			    <p>
			        <form:label path="name">Name</form:label>
			        <form:errors path="name"/>
			        <form:input path="name"/>
			    </p>
			    <p>
			        <form:label path="email">Email</form:label>
			        <form:errors path="email"/>
			        <form:input path="email"/>
			    </p>
			    <p>
			        <form:label path="password">Password</form:label>
			        <form:errors path="password"/>
			        <form:input type="password" path="password"/>
			    </p>
			    <p>
			        <form:label path="confirm">Confirm Password</form:label>
			        <form:errors path="confirm"/>     
			        <form:input type="password" path="confirm"/>
			    </p>    
			    <input type="submit" value="Submit"/>
			</form:form>
		</div>
		<div>
			<h2>Login</h2>
			<form:form action="/login" method="post" modelAttribute="newLogin">
			    
			    <p>
			        <form:label path="email">Email</form:label>
			        <form:errors path="email"/>
			        <form:input path="email"/>
			    </p>
			    <p>
			        <form:label path="password">Password</form:label>
			        <form:errors path="password"/>
			        <form:input type="password" path="password"/>
			    </p>   
			    <input type="submit" value="Submit"/>
			</form:form>
		</div>
	</div>
</body>
</html>