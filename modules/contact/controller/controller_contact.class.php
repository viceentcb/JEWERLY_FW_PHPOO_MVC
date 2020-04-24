<?php
class controller_contact
{
	function __construct()
	{
		$_SESSION['module'] = "contact";
	}

	function list_contact()
	{
		// require(VIEW_PATH_INC . "menu.php");
		require(VIEW_PATH_INC . "top_page_contact.php");
		require(VIEW_PATH_INC . "top_page_menu.php");
		require(VIEW_PATH_INC . "top_page.php");

		require(VIEW_PATH_INC . "menu.php");
		loadView('modules/contact/view/', 'contact.html');
		require(VIEW_PATH_INC . "footer.php");
	}
	function send_cont()
	{

		//echo ("SEND_EMAIL");
		//die();

		$arrArgument = array(

			'type' => 'contact',
			'token' => '',
			'inputName' => $_POST['cname'],
			'inputEmail' => $_POST['cemail'],
			'inputSubject' => $_POST['asunto'],
			'inputMessage' => $_POST['message']
		);

		
		//echo json_encode($arrArgument);

		try {
			echo  enviar_email($arrArgument);
			//print_r($arrArgument);
		} catch (Exception $e) {
			echo "<div class='alert alert-error'>Server error. Try later...</div>";
		}
		//restore_error_handler();

		$arrArgument = array(
			'type' => 'admin',
			'token' => '',
			'inputName' => $_POST['cname'],
			'inputEmail' => $_POST['cemail'],
			'inputSubject' => $_POST['asunto'],
			'inputMessage' => $_POST['message']
		);
		try{
		    enviar_email($arrArgument);
		} catch (Exception $e) {
			echo "<div class='alert alert-error'>Server error. Try later...</div>";
		}
	}

}
