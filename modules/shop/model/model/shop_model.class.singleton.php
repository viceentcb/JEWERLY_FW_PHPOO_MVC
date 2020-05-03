<?php
// require(SITE_ROOT . "modules/shop/model/BLL/shop_bll.class.singleton.php");
class shop_model
{
    private $bll;
    static $_instance;

    private function __construct()
    {
        $this->bll = shop_bll::getInstance();
    }

    public static function getInstance()
    {
        if (!(self::$_instance instanceof self)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function list_model($number)
    {
        return $this->bll->list_BLL($number);
    }

    public function detail_model($cod_ref, $type)
    {
        return $this->bll->detail_BLL($cod_ref, $type);
    }

    public function filter_model($checks, $order)
    {
        return $this->bll->filter_BLL($checks, $order);
    }

    public function count_model()
    {
        return $this->bll->count_BLL();
    }


    public function search_model($search)
    {
        return $this->bll->search_BLL($search);
    }

 
}
