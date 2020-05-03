<?php
// require(SITE_ROOT . "view/menu/model/BLL/menu_bll.class.singleton.php");
class menu_model {
    private $bll;
    static $_instance;

    private function __construct() {
        $this->bll = menu_bll::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function slider(){
        return $this->bll->slider_BLL();
    }
    public function type_model($brand){
        return $this->bll->type_BLL($brand);
    }

    public function brand_model($type){
        return $this->bll->brand_BLL($type);
    }
    public function auto_model($auto){
        return $this->bll->auto_BLL($auto);
    }
}