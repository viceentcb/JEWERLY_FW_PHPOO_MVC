<?php
class controller_home
{
	function __construct()
	{
		$_SESSION['module'] = "home";
	}

	//funcion que pinta el home
	function home()
	{
		// require(VIEW_PATH_INC . "menu.php");
		require(VIEW_PATH_INC . "top_page_home.php");
		require(VIEW_PATH_INC . "top_page_menu.php");
		require(VIEW_PATH_INC . "top_page.php");

		require(VIEW_MENU . "menu.php");
		loadView('modules/home/view/', 'home.html');
		require(VIEW_PATH_INC . "footer.php");
	}

	function gif()
	{
		
			$json = array();
			$json = loadModel(MODEL_HOME, "home_model", "GIF_model");
			echo json_encode($json);
		
	}

	function products()
	{
		
			$json = array();
			$json = loadModel(MODEL_HOME, "home_model", "prods_model", $_POST['data']);
			echo json_encode($json);
		
	}

	function click_prod()
	{
		
			$json = array();
			$json = loadModel(MODEL_HOME, "home_model", "views_model", $_POST['data']);
			echo json_encode($json);
		
	}

}
