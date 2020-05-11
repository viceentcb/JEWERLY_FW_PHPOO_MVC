<?php
class login_dao
{
    static $_instance;

    private function __construct()
    {
    }

    public static function getInstance()
    {
        if (!(self::$_instance instanceof self)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function register($db, $data)
    {

        $user_name = $data['user_name_reg'];
        $mail = $data['mail'];

        $password = password_hash($data['passw_reg'], PASSWORD_DEFAULT);
        $hashavatar = md5(strtolower(trim($data['user_name_reg'])));
        $avatar = "https://www.gravatar.com/avatar/$hashavatar?s=40&d=identicon";
        $token = generate_Token_secure(20);


        $sql = "INSERT INTO user (cod_user, user_name, mail, password, avatar, token) 
        VALUES('$user_name','$user_name','$mail','$password','$avatar', '$token')";

        $db->ejecutar($sql);
        return $token;
    }

    public function id($db)
    {
        $sql = "SELECT cod_user FROM user WHERE cod_user=user_name";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
    }
    public function mail($db)
    {
        $sql = "SELECT mail FROM user WHERE cod_user=user_name";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
    }

    public function u_token($db,$mail)
    {
        $token = generate_Token_secure(20);

        $sql = "UPDATE user set token='$token' WHERE mail='$mail'";
        $db->ejecutar($sql);
        return $token;
    }
}
