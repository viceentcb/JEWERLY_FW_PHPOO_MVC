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
        return $this->dao->list($this->db, $number);
    }

    public function detail_BLL($cod_ref, $type)
    {
        if ($this->dao->views($this->db, $cod_ref)) {
            return $this->dao->detail($this->db, $cod_ref, $type);
        }
    }

    public function filter_BLL($checks, $order)
    {
        return $this->dao->filter($this->db, $checks, $order);
    }

    public function count_BLL()
    {
        return $this->dao->count_prods($this->db);
    }

    public function search_BLL($search)
    {
        return $this->dao->search($this->db, $search);
    }
 
}
