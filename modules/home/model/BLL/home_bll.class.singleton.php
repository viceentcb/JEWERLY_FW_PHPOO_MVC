<?php
// require_once(MODEL_PATH . "db.class.singleton.php");
// require(SITE_ROOT . "modules/home/model/DAO/home_dao.class.singleton.php");
class home_bll
{
    private $dao;
    private $db;
    static $_instance;

    private function __construct()
    {
        $this->dao = home_dao::getInstance();
        $this->db = db::getInstance();
    }

    public static function getInstance()
    {
        if (!(self::$_instance instanceof self)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function GIF_BLL()
    {
        return $this->dao->GIF($this->db);
    }

    public function Prods_BLL($limit)
    {
        return $this->dao->show_more($this->db, $limit);
    }

    public function views_BLL($cod_ref)
    {
        return $this->dao->U_view_prod($this->db, $cod_ref);
    }
}
