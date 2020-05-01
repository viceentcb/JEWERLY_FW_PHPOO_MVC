<?php
class shop_dao {
    static $_instance;

    private function __construct() {

    }

    public static function getInstance() {
        if(!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function list($db, $number) {
        $sql = "SELECT *FROM joya ORDER BY views DESC limit $number , 3";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
    }


}
