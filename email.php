<?php
if($_POST['test2']){
	echo '<script language="javascript">';
	echo 'alert("test succ")';
	echo '</script>';
}
    mail('asingh@dronamaps.com', $_POST['name_touch'], $_POST['email_touch'], $_POST['company_name'], $_POST['industry_name'], $_POST['chatMessage']);
?>
<p>Your email has been sent.</p>