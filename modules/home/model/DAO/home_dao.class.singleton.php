<?php
class home_dao {
    static $_instance;

    private function __construct() {

    }

    public static function getInstance() {
        if(!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function GIF($db) {
        $sql = "SELECT * FROM gif";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
    }

    public function show_more($db, $limit) {
        $sql = "SELECT cod_ref, nombre,tipo,route, marca FROM joya ORDER BY views DESC LIMIT $limit";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
    }

    public function U_view_prod($db, $cod_ref) {
        $sql = "UPDATE joya set views=(views+1) WHERE cod_ref= '$cod_ref'";
        $stmt = $db->ejecutar($sql);
    }

}
