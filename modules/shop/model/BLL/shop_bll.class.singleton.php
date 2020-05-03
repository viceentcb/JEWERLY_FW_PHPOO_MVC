<?php
// require_once(MODEL_PATH . "db.class.singleton.php");
// require(SITE_ROOT . "modules/shop/model/DAO/shop_dao.class.singleton.php");
class shop_bll
{
    private $dao;
    private $db;
    static $_instance;

    private function __construct()
    {
        $this->dao = shop_dao::getInstance();
        $this->db = db::getInstance();
    }

    public static function getInstance()
    {
        if (!(self::$_instance instanceof self)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function list_BLL($number)
    {
        return $this->dao->list($this->db,$number);
    }

    public function detail_BLL($cod_ref, $type)
    {
        $this->dao->views($this->db,$cod_ref);
        return $this->dao->detail($this->db,$cod_ref, $type);

    }


}
