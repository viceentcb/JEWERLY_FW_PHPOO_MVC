<?php
define('PROJECT', '/FRAMEWORK_JOYAS/');

//SITE_ROOT
define('SITE_ROOT', $_SERVER['DOCUMENT_ROOT'] . PROJECT);

//SITE_PATH
define('SITE_PATH', 'http://' . $_SERVER['HTTP_HOST'] . PROJECT);

//CSS
define('CSS_PATH', SITE_PATH . 'view/css/');

//JS
define('JS_PATH', SITE_PATH . 'view/js/');

//TOASTR
define('TOASTR_PATH', SITE_PATH . 'view/toastr/');

//VENDOR
define('VENDOR_PATH', SITE_PATH . 'view/vendor/');

//IMAGES
define('IMAGES_PATH', SITE_PATH . 'view/images/');

//LANG
define('LANG', SITE_PATH . 'view/lang/');

//PRODUCTION
define('PRODUCTION', true);

//MODEL
define('MODEL_PATH', SITE_ROOT . 'model/');

//MODULES
define('MODULES_PATH', SITE_ROOT . 'modules/');

//VIEW
define('VIEW_PATH', SITE_ROOT . 'view/');

//VIEW
define('VIEW_JQUERY_PATH', SITE_PATH . 'view/jquery/');

//INC
define('VIEW_PATH_INC', SITE_ROOT . 'view/inc/');

//RESOURCES
define('RESOURCES', SITE_ROOT . 'resources/');

//UTILS
define('UTILS', SITE_ROOT . 'utils/');




//MODEL_CONTACT
// define('UTILS_CONTACT', SITE_ROOT . 'modules/contact/utils/');
// define('MODEL_PATH_CONTACT', SITE_ROOT . 'modules/contact/model/');
// define('DAO_CONTACT', SITE_ROOT . 'modules/contact/model/DAO/');
// define('BLL_CONTACT', SITE_ROOT . 'modules/contact/model/BLL/');
// define('MODEL_CONTACT', SITE_ROOT . 'modules/contact/model/model/');
define('JS_VIEW_CONTACT', SITE_PATH . 'modules/contact/view/js/');


//MODEL_HOME
// define('UTILS_HOME', SITE_ROOT . 'modules/home/utils/');
define('MODEL_PATH_HOME', SITE_ROOT . 'modules/home/model/');
define('DAO_HOME', SITE_ROOT . 'modules/home/model/DAO/');
define('BLL_HOME', SITE_ROOT . 'modules/home/model/BLL/');
define('MODEL_HOME', SITE_ROOT . 'modules/home/model/model/');
define('JS_VIEW_HOME', SITE_PATH . 'modules/home/view/js/');

//MODEL_HOME
// define('UTILS_HOME', SITE_ROOT . 'modules/home/utils/');
define('MODEL_PATH_SHOP', SITE_ROOT . 'modules/shop/model/');
define('DAO_SHOP', SITE_ROOT . 'modules/shop/model/DAO/');
define('BLL_SHOP', SITE_ROOT . 'modules/shop/model/BLL/');
define('MODEL_SHOP', SITE_ROOT . 'modules/shop/model/model/');
define('JS_VIEW_SHOP', SITE_PATH . 'modules/shop/view/js/');

//MODEL_LOGIN
// define('UTILS_HOME', SITE_ROOT . 'modules/home/utils/');
define('MODEL_PATH_LOGIN', SITE_ROOT . 'modules/login/model/');
define('DAO_LOGIN', SITE_ROOT . 'modules/login/model/DAO/');
define('BLL_LOGIN', SITE_ROOT . 'modules/login/model/BLL/');
define('MODEL_LOGIN', SITE_ROOT . 'modules/login/model/model/');
define('JS_VIEW_LOGIN', SITE_PATH . 'modules/login/view/js/');


//MENU
// define('UTILS_HOME', SITE_ROOT . 'modules/home/utils/');
define('MODEL_PATH_MENU', SITE_ROOT . 'view/menu/model/');
define('VIEW_MENU', SITE_ROOT . 'view/menu/view/');
define('DAO_MENU', SITE_ROOT . 'view/menu/model/DAO/');
define('BLL_MENU', SITE_ROOT . 'view/menu/model/BLL/');
define('MODEL_MENU', SITE_ROOT . 'view/menu/model/model/');
define('JS_VIEW_MENU', SITE_PATH . 'view/menu/view/js/');

//amigables
define('URL_AMIGABLES', TRUE);
