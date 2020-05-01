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

//INC
define('VIEW_PATH_INC', SITE_ROOT . 'view/inc/');

//RESOURCES
define('RESOURCES', SITE_ROOT . 'resources/');

//UTILS
define('UTILS', SITE_ROOT . 'utils/');




//MODEL_CONTACT
define('UTILS_CONTACT', SITE_ROOT . 'modules/contact/utils/');
// define('MODEL_PATH_CONTACT', SITE_ROOT . 'modules/contact/model/');
// define('DAO_CONTACT', SITE_ROOT . 'modules/contact/model/DAO/');
// define('BLL_CONTACT', SITE_ROOT . 'modules/contact/model/BLL/');
// define('MODEL_CONTACT', SITE_ROOT . 'modules/contact/model/model/');
define('JS_VIEW_CONTACT', SITE_PATH . 'modules/contact/view/js/');


//amigables
define('URL_AMIGABLES', TRUE);
