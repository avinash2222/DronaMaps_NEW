<?php
	if(!isset($_POST['submit'])){
		//This page should not be accessed directly. Need to submit the form.
		echo "error; you need to submit the form!";
	}
	$name = $_POST['name_touch'];
	$visitor_email = $_POST['email_touch'];
	$message = $_POST['msg_touch'];

	//Validate first
	if(empty($name)||empty($visitor_email)){
		echo "Name and email are mandatory!";
		exit;
	}

	if(IsInjected($visitor_email)){
		echo "Bad email value!";
		exit;
	}
	$company = $_POST['company_name'];
	$industry = $_POST['industry_name'];
	$to = 'akumar@dronamaps.com';
	$sub = 'Form Submission';
	$msg = "Name : ".$name."\n"."Company Name :".$company."\n"."Industry Type :".$industry."\n"."Wrote the following :"."\n\n".$message;
	$headers = "From :".$email;
	mail($to, $sub, $msg, $headers);
	header('Location: thank-you.html');
	// Function to validate against any email injection attempts
	function IsInjected($str){
		$injections = array('(\n+)',
				  '(\r+)',
				  '(\t+)',
				  '(%0A+)',
				  '(%0D+)',
				  '(%08+)',
				  '(%09+)'
				  );
		$inject = join('|', $injections);
		$inject = "/$inject/i";
		if(preg_match($inject,$str)){
			return true;
		}
		else{
			return false;
		}
	}
   
?> 