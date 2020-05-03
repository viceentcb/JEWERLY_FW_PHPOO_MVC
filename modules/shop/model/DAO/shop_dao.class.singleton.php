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

    public function detail($db, $cod_ref, $type) {
        $sql = "SELECT * FROM joya WHERE cod_ref='$cod_ref' UNION SELECT * FROM joya WHERE tipo='$type' AND cod_ref<>'$cod_ref'";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
    }

    public function views($db, $cod_ref) {
        $sql = "UPDATE joya set views=(views+1) WHERE cod_ref= '$cod_ref'";
        return $db->ejecutar($sql);
    }


}
