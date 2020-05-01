<?php
require(SITE_ROOT . "modules/home/model/BLL/home_bll.class.singleton.php");
class home_model
{
    private $bll;
    static $_instance;

    private function __construct()
    {
        $this->bll = home_bll::getInstance();
    }

    public static function getInstance()
    {
        if (!(self::$_instance instanceof self)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function GIF_model()
    {
        return $this->bll->GIF_BLL();
    }


    public function prods_model($limit)
    {
        return $this->bll->Prods_BLL($limit);
    }

    public function views_model($limit)
    {
        return $this->bll->views_BLL($limit);
    }
}
