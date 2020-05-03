<?php
class menu_dao {
    static $_instance;

    private function __construct() {

    }

    public static function getInstance() {
        if(!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function select_photos($db) {
        $sql = "SELECT route FROM photos";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
    }

    function offer_type($db,$brand){
        $sql = "SELECT distinct tipo FROM joya $brand";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
    }

    function offer_brand($db,$type){
        $sql = "SELECT distinct marca FROM joya $type";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
    }

    function autocomplete($db, $auto){
        $sql = "SELECT *  FROM joya $auto";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
    }
}
