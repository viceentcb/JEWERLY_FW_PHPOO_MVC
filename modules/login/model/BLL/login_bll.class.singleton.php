<?php

class login_bll
{
    private $dao;
    private $db;
    static $_instance;

    private function __construct()
    {
        $this->dao = login_dao::getInstance();
        $this->db = db::getInstance();
    }

    public static function getInstance()
    {
        if (!(self::$_instance instanceof self)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function id_mail_BLL($data)
    {
        //obtenemos todos los id que tenemos
        $id = $this->dao->id($this->db);

        $res = false;
        $rlt = false;

        // y comprobamos que exista uno que sea igual
        for ($i = 0; $i < count($id); $i++) {


            ///HEMOS INTENTADO HACER UN DO-WHILE Y UN WHILE TANTO FUERA COMO DENTRO DEL FOR 
            // Y NO IBA ASI QUE NOS HEMOS DECICIDO POR EL IF
            if ($res == false) {
                //si encuentra un nombre de usuario igual
                if (($id[$i]['cod_user']) == ($data[0]['user_name_reg'])) {
                    $res = true;
                   return 'This user name is alredy in use';
                } else {
                    $res = false;
                    $rlt = 'Correct';
                }
            }
        }
        // por si acaso no ecuentra niguno, para que no haga un bucle infinito
        // cuando encuentre uno que sea igual dejará de hacer el for


        //solamente cuando no encuentre un id igual 
        if ($rlt == 'Correct') {

            //solamente cuando venga de registrarse de nuestra pagina de login
            if ($data[1] == 'reg') {

                //obtenemos todos los mail que hay en la tabla user
                $mail = $this->dao->mail($this->db);

                $res = false;
                $rlt = false;

                // y comprobamos que exista uno que sea igual
                for ($i = 0; $i < count($mail); $i++) {

                    if ($res == false) {
                        //si encuentra un mail igual
                        if (($mail[$i]['mail']) == ($data[0]['mail'])) {
                            $res = true;
                            return 'This mail is alredy in use';
                        } else {
                            $res = false;
                            $rlt = 'Correct';
                        }
                    }
                }
            }
        }


        //si todo esta correcto registrará al usuario
            return $this->dao->register($this->db, $data[0]);
        
    }
}
