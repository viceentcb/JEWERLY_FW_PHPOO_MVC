<?php
class login_model
{
    private $bll;
    static $_instance;

    private function __construct()
    {
        $this->bll = login_bll::getInstance();
    }

    public static function getInstance()
    {
        if (!(self::$_instance instanceof self)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function id_mail_model($data)
    {
        return $this->bll->id_mail_BLL($data);
    }


    public function mail_model($mail)
    {
        return $this->bll->mail_BLL($mail);
    }

 
}
