<?php
class controller_login
{
	function __construct()
	{
		$_SESSION['module'] = "login";
	}

	//funcion que pinta el login
	function login()
	{
		// require(VIEW_PATH_INC . "menu.php");
		require(VIEW_PATH_INC . "top_page_login.php");
		require(VIEW_PATH_INC . "top_page_menu.php");
		require(VIEW_PATH_INC . "top_page.php");

		require(VIEW_MENU . "menu.php");
		loadView('modules/login/view/', 'login.html');
		require(VIEW_PATH_INC . "footer.php");
	}

	///funcion de pintar general

	function id_mail()
	{

		parse_str($_POST['data'], $matriz);

		$data = array($matriz, $_POST['prov']);


		$json = array();
		$json = loadModel(MODEL_LOGIN, "login_model", "id_mail_model", $data);

		if (($json == "This user name is alredy in use") || ($json == "This mail is alredy in use")) {
			echo json_encode($json);
		} else {

			$arrArgument = array(
				'type' => 'alta',
				'token' => $json,
				'inputName' => $matriz['user_name_reg'],
				'inputEmail' => $matriz['mail'],
			);
			try {
				echo enviar_email($arrArgument);
			} catch (Exception $e) {
				echo "<div class='alert alert-error'>Server error. Try later...</div>";
			}
		}
	}


	function mail()
	{

		if (isset($_GET['param'])) {
			parse_str($_POST['data'], $matriz);


			$json = array();
			$json = loadModel(MODEL_LOGIN, "login_model", "mail_model", $matriz['mail']);


			if ($json === false) {
				echo ('error');
			} else {

				$arrArgument = array(
					'type' => 'changepass',
					'token' => $json,
					'inputEmail' => $matriz['mail'],
				);
				try {
					echo enviar_email($arrArgument);
				} catch (Exception $e) {
					echo "<div class='alert alert-error'>Server error. Try later...</div>";
				}
			}
		} else {
			echo('hola');
		}
	}
}
