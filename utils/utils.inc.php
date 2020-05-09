<?php
function amigable($url, $return = false)
{
    $amigableson = URL_AMIGABLES;
    // print('amigables');
    // print($amigableson);
    $link = "";
    if ($amigableson) {
        $url = explode("&", str_replace("?", "", $url));

        $cont = 0;
        foreach ($url as $key => $value) {
            $cont = $cont + 1;
        }

        $cont1 = 0;
        foreach ($url as $key => $value) {

            $cont1 = $cont1 + 1;

            $aux = explode("=", $value);

            if ($cont1 == $cont) {

                $link .=  $aux[1];
            }else{
                $link .=  $aux[1] . "/" ;

            }
        }
    } else {
        $link = "index.php?" . $url;
    }
    if ($return) {
        return SITE_PATH . $link;
    }
    echo SITE_PATH . $link;
}


function generate_Token_secure($longitud)
{
    if ($longitud < 4) {
        $longitud = 4;
    }
    return bin2hex(openssl_random_pseudo_bytes(($longitud - ($longitud % 2)) / 2));
}
