<?php
class controller_shop
{
	function __construct()
	{
		$_SESSION['module'] = "shop";
	}

	//funcion que pinta el shop
	function shop()
	{
		// require(VIEW_PATH_INC . "menu.php");
		require(VIEW_PATH_INC . "top_page_shop.php");
		require(VIEW_PATH_INC . "top_page_menu.php");
		require(VIEW_PATH_INC . "top_page.php");

		require(VIEW_MENU . "menu.php");
		loadView('modules/shop/view/', 'shop.html');
		require(VIEW_PATH_INC . "footer.php");


	}

	///funcion de pintar general
	function list()
	{	
			$json = array();
			$json = loadModel(MODEL_SHOP, "shop_model", "list_model", $_POST['data']);
			echo json_encode($json);	
	}

	//funcion para el detail
	function detail()
	{	
			$json = array();
			$json = loadModel(MODEL_SHOP, "shop_model", "detail_model", $_POST['cod_ref'], $_POST['tipo']);
			echo json_encode($json);	
	}

}
