<?php
class controller_menu
{
	function __construct()
	{
		$_SESSION['module'] = "menu";
	}

	//funcion que pinta el menu
	function menu()
	{
		//  require(VIEW_PATH_INC . "menu.php");
		require(VIEW_PATH_INC . "top_page_menu.php");
		require(VIEW_PATH_INC . "top_page.php");

		require(VIEW_PATH_INC . "menu.php");
		loadView('view/menu/view/', 'menu.php');
		require(VIEW_PATH_INC . "footer.php");
	}

	function slider()

	{
		$json = array();
		$json = loadModel(MODEL_MENU, "menu_model", "slider");
		echo json_encode($json);
	}
}
