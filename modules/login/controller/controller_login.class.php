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

		$data=array($matriz, $_POST['prov']);


		$json = array();
		$json = loadModel(MODEL_LOGIN, "login_model", "id_mail_model", $data);
		echo json_encode($json);
	}
}
