<?php
function enviar_email($arr)
{
    $html = '';
    $subject = '';
    $body = '';
    $ruta = '';
    $return = '';

    

    switch ($arr['type']) {
            case 'alta':
                $subject = 'Tu Alta en Jewerly';
                $ruta = "<a href='" . amigable("?module=home&function=active_user&param=" . $arr['token'], true) . "'>aqu&iacute;</a>";
                $body = 'Gracias por unirte a nuestra aplicaci&oacute;n<br> Para finalizar el registro, pulsa '.    $ruta ;
                break;

            case 'changepass':
                $subject = 'Tu Nuevo Password en Jewerly<br>';
                $ruta = '<a href="' . amigable("?module=login&function=mail&param=" . $arr['token'], true) . '">aqu&iacute;</a>';
                $body = 'Para recordar tu password pulsa ' . $ruta;
                break;

        case 'contact':
            $subject = 'Tu Petici&oacute;n a Ohana_dogs ha sido enviada<br>';
            $ruta = '<a href=' . 'http://localhost/1_Fw_PHP_OO_MVC_jQuery_AngularJS/Framework/9_adoptions_dogs/' . '>aqu&iacute;</a>';
            $body = 'Para visitar nuestra web, pulsa ' . $ruta;
            break;

        case 'admin':
            $subject = $arr['inputSubject'];
            $body = 'inputName: ' . $arr['inputName'] . '<br>' .
                'inputEmail: ' . $arr['inputEmail'] . '<br>' .
                'inputSubject: ' . $arr['inputSubject'] . '<br>' .
                'inputMessage: ' . $arr['inputMessage'];
            break;
    }

    $html .= "<html>";
    $html .= "<body>";
    $html .= "Asunto:";
    $html .= "<br><br>";
    $html .= "<h4>" . $subject . "</h4>";
    $html .= "<br><br>";
    $html .= "Mensaje:";
    $html .= "<br><br>";
    $html .= $arr['inputMessage'];
    $html .= "<br><br>";
    $html .= $body;
    $html .= "<br><br>";
    $html .= "<p>Sent by OHANA_DOGS</p>";
    $html .= "</body>";
    $html .= "</html>";

    //set_error_handler('ErrorHandler');
    try {
        if ($arr['type'] === 'admin')
            $address = 'ruralshoponti@gmail.com';
        else
            $address = $arr['inputEmail'];
        $result = send_mailgun('ruralshoponti@gmail.com', $address, $subject, $html);
    } catch (Exception $e) {
        $return = 0;
    }
    //restore_error_handler();
    return $result;
}

function send_mailgun($from, $email, $subject, $html)
{
    $apis=parse_ini_file("gitignore.ini");
    $api_key=$apis['api_key'];
    $api_url=$apis['api_url'];
  

    $config = array();
    $config['api_key'] = $api_key; //API Key
    $config['api_url'] = "https://api.mailgun.net/v2/".$api_url."/messages"; //API Base URL

    $message = array();
    $message['from'] = "$from";
    $message['to'] = $email;
    $message['h:Reply-To'] = "mastersport@gmail.com";
    $message['subject'] = $subject;
    $message['html'] = $html;


    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $config['api_url']);
    curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($ch, CURLOPT_USERPWD, "api:{$config['api_key']}");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $message);
    $result = curl_exec($ch);
    curl_close($ch);
    return $result;
}
