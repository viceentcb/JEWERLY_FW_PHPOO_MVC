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

		require(VIEW_PATH_INC . "menu.php");
		loadView('modules/home/view/', 'home.html');
		require(VIEW_PATH_INC . "footer.php");
	}
	

}
