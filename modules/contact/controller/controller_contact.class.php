<?php
class controller_contact
{
	function __construct()
	{
		$_SESSION['module'] = "contact";
	}

	//funcion que pinta el contact
	function contact()
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

		parse_str ($_POST['data'], $matriz);
		// echo($matriz['cname']);

		$arrArgument = array(

			'type' => 'contact',
			'token' => '',
			'inputName' => $matriz['cname'],
			'inputEmail' => $matriz['cemail'],
			'inputSubject' => $matriz['asunto'],
			'inputMessage' => $matriz['message']
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
			'inputName' => $matriz['cname'],
			'inputEmail' => $matriz['cemail'],
			'inputSubject' => $matriz['asunto'],
			'inputMessage' => $matriz['message']
		);
		try{
		    enviar_email($arrArgument);
		} catch (Exception $e) {
			echo "<div class='alert alert-error'>Server error. Try later...</div>";
		}
	}

}
