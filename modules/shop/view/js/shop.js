$(document).ready(function () {
    // console.log("shop");
    click();
    // entra();
    local();
    // ajaxForSearch();
    filter();
    pagination();
    // like();
    // cart();


    // click_map();


    // if (document.getElementById("maps") != null) {
    //     var script = document.createElement('script');
    //     script.src = "https://maps.googleapis.com/maps/api/js?key==initMap";
    //     script.async;
    //     script.defer;
    //     document.getElementsByTagName('script')[0].parentNode.appendChild(script);
    // }
});


var shop = function (url, data) { //function/promise GENERAL 

    // console.log(data)

    return new Promise(function (resolve) {
        // console.log(url)
        // console.log(data)
        $.ajax({
            type: "POST",
            url: url,
            data: data
        })
            .done(function (data) {
                resolve(data);
            })
    })
};


/////FUNCION PARA IR DEL HOME AL LISTADO DE SHOP
function ajaxForSearch(url, data) {
    console.log(url);
    console.log(data)
    $.ajax({
        type: "POST",
        data: data,
        url: url,
    })
        .done(function (data) {
            console.log(data);
            var data = JSON.parse(data)
            for (row in data) {
                //Cuando solo quede un producto avisara al cliente de que este producto es el ultimo
                //Ademas avisara y mostrara que el articulo esta en oferta
                if ((data[row].unidades) == 1) {
                    $("#list_products").append(
                        // "<div class='row grid gallery-info'>" +
                        "<table>" +
                        "<td>" +
                        "<figure class='effect-steve' >" +
                        "<img src= '" + data[row].route + "' alt='img15'>" +
                        "<figcaption class='detail' id='" + data[row].cod_ref + "' type='" + data[row].tipo + "'>" +
                        "<h2>" + data[row].marca + "<span> " + data[row].nombre + " </span></h2>" +
                        // "<p style='text-decoration: line-through;'>  "+ (data[row].precio) + "$</p>" +
                        // "<p style='color:red'; >"+ ((data[row].precio)*0.5) + "$</p>"+
                        "<p><a style='text-decoration: line-through;font-size: 15px;'>" + (data[row].precio) + "$</a><a style='color:red; font-size: 15px;'> &nbsp;&nbsp;&nbsp;&nbsp;" + ((data[row].precio) * 0.5) + "$</a></p>" +
                        "</br></br></br></br></br>" +
                        // "<p><a style='color:red;font-size: 16px;'>Ultima unidad &nbsp</a><a style='color:red;font-size: 15px;'>Articulo al 50%</a></p>" +
                        "<p style='color:red;font-size: 15px;'>Ultima unidad</p>" +
                        "<p style='color:red;font-size: 15px;'>Articulo al 50%</p>" +
                        "</figcaption>" +
                        "</figure>" +
                        "</div>" +
                        "</button>" +
                        "<button class='baddcart' id='" + data[row].cod_ref + "'>Add to cart</button></div></div>" +
                        "<button class='btn btn-default btn-lg like " + data[row].cod_ref + "' id='" + data[row].cod_ref + "'>❤</button>" +
                        "</td>" +
                        "</table>");

                }
                //Cuando queden menos de 3 unidades avisara al cliente de que quedan pocas unidades
                else if (((data[row].unidades) < 3) && ((data[row].unidades) != 0)) {
                    $("#list_products").append(
                        // "<div style='row grid gallery-info'>" +
                        "<table>" +
                        "<td>" +
                        "<figure class='effect-steve' >" +
                        "<img src= '" + data[row].route + "'>" +
                        "<figcaption alt='img15' class='detail' id='" + data[row].cod_ref + "' type='" + data[row].tipo + "'>" +
                        "<h2>" + data[row].marca + "<span> " + data[row].nombre + " </span></h2>" +
                        "<p style='font-size: 15px';>" + data[row].precio + "$</p>" +
                        "</br></br></br></br></br></br>" +
                        "<p style='color:red; font-size: 15px;'>Quedan pocas unidades</p>" +
                        "</figcaption>" +
                        "</figure>" +
                        "</div>" +
                        "<button class='baddcart' id='" + data[row].cod_ref + "'>Add to cart</button></div></div>" +
                        "<button class='btn btn-default btn-lg like " + data[row].cod_ref + "' id='" + data[row].cod_ref + "'>❤</button>" +

                        "</td>" +
                        "</table>");

                    //Cuando queden 0 unidades avisara al cliente de que no queda stock de dicho porducto

                } else if ((data[row].unidades) == 0) {
                    $("#list_products").append(
                        // "<div style='row grid gallery-info'>" +
                        "<table>" +
                        "<td>" +
                        "<figure class='effect-steve' >" +
                        "<img style=' opacity:0.5 ;' src= '" + data[row].route + "' alt='img15'  >" +
                        "<figcaption class='detail' id='" + data[row].cod_ref + "' type='" + data[row].tipo + "'>" +
                        "<h2>" + data[row].marca + "<span> " + data[row].nombre + " </span></h2>" +
                        "<p style='font-size: 15px';>" + data[row].precio + "$</p>" +
                        "</br></br></br></br></br></br>" +
                        "<p style=color:red;font-size: 15px;'>No queda stock</p>" +
                        "</figcaption>" +
                        "</figure>" +
                        "</div>" +
                        "<button class='baddcart' id='" + data[row].cod_ref + "'>Add to cart</button></div></div>" +
                        "<button class='btn btn-default btn-lg like  " + data[row].cod_ref + "' id='" + data[row].cod_ref + "'>❤</button>" +
                        "</td>" +
                        "</table>");
                } else {
                    $("#list_products").append(
                        // "<div style='row grid gallery-info'>" +
                        "<table>" +
                        "<td>" +
                        "<figure class='effect-steve' >" +
                        "<img src= '" + data[row].route + "' alt='img15' >" +
                        "<figcaption class='detail' id='" + data[row].cod_ref + "' type='" + data[row].tipo + "' >" +
                        "<h2>" + data[row].marca + "<span> " + data[row].nombre + " </span></h2>" +
                        "<p style='font-size: 15px';>" + data[row].precio + "$</p>" +
                        "</figcaption>" +
                        "</figure>" +
                        "</div>" +
                        "<button class='baddcart' id='" + data[row].cod_ref + "'>Add to cart</button></div></div>" +
                        "<button class='btn btn-default btn-lg like " + data[row].cod_ref + "' id='" + data[row].cod_ref + "'>❤</button>" +
                        "</td>" +
                        "</table>")
                }


            }
            //como siempre utilizamos el ajaxforsearch para pintar
            //cuando acabe de pintar los productos comprobara si es favorito o no y cambiara el color
            // paint_likes()

        })// end done
        .fail(function () {
            console.log("HELLOOOOO FAIL");
        })


}

////AQUI VEREMOS DE DONDE VIENE E IREMOS A UNA CATEGORIA O A OTRA
function local() {

    if (document.getElementById('list_products')) {

        //Aqui observaremos los datos
        console.log("Entran datos");
        var valoration = localStorage.getItem('val');
        console.log("valoration= " + valoration);
        var type = localStorage.getItem('tipo');
        console.log("type= " + type);
        var car = localStorage.getItem('sli');
        console.log("car= " + car);
        var type_search = localStorage.getItem('typ');
        console.log("type_search= " + type_search);
        var brand_search = localStorage.getItem('bra');
        console.log("brand_search= " + brand_search);
        var name_search = localStorage.getItem('pro');
        console.log("name_search= " + name_search);


        if (type) {

            alert('entra cat')
            console.log("categoria")
            ajaxForSearch("module/shop/controller/controller_shop.php?op=categoria&type=" + type)

        } else if (valoration) {
            console.log("PRODUCTOOOOOOOO");
            ajaxForSearch("module/shop/controller/controller_shop.php?op=detail&cod_ref=" + valoration)

            ////NO HACEMOS MAS COMBINACIONES PORQUE SI COMBINAMOS CUALQUIER "FILTRO" CON EL NOMBRE
            ///ENTRARIA DIRECTAMENTE AQUI TANTO SI ES UNA COMBINACION DE 2 COMO SI ESTA SOLO EL NOMBRE
            ///O COMO SI JUNTAMOS LOS 3 "FILTROS"
        } else if (name_search) {
            console.log("Todos campos rellenos del search o al menos el nombre")
            var search = 'where nombre ="' + name_search + '"'
            console.log(search);


            var info = { module: 'shop', function: 'search', data: search }
            ajaxForSearch(amigable("?"), info)
            
            // ajaxForSearch("module/shop/controller/controller_shop.php?op=search&all=" + search)


            ///INTRODUCIMOS 0 YA QUE AL SER 0 Y NO NULL DETECTA QUE DICHAS VARIABLES EXISTEN
        } else if ((brand_search) && (type_search) && (brand_search != 0) && (type_search != 0)) {
            console.log("marca y tipo rellenos en el search ")
            var search = 'where marca ="' + brand_search + '" and tipo="' + type_search + '"'
            console.log(search);
            var info = { module: 'shop', function: 'search', data: search }
            ajaxForSearch(amigable("?"), info)

            // ajaxForSearch("module/shop/controller/controller_shop.php?op=search&all=" + search)


            ///INTRODUCIMOS 0 YA QUE AL SER 0 Y NO NULL DETECTA QUE DICHAS VARIABLES EXISTEN
        } else if (brand_search && (brand_search != 0)) {
            console.log("solo marca rellena en el search ")
            var search = 'where marca ="' + brand_search + '"'
            console.log(search);


            var info = { module: 'shop', function: 'search', data: search }
            ajaxForSearch(amigable("?"), info)
            // ajaxForSearch("module/shop/controller/controller_shop.php?op=search&all=" + search)


            ///INTRODUCIMOS 0 YA QUE AL SER 0 Y NO NULL DETECTA QUE DICHAS VARIABLES EXISTEN
        } else if (type_search && (type_search != 0)) {
            console.log("solo tipo relleno en el search ")
            var search = 'where tipo ="' + type_search + '"'
            console.log(search);

            var info = { module: 'shop', function: 'search', data: search }
            ajaxForSearch(amigable("?"), info)

            // ajaxForSearch("module/shop/controller/controller_shop.php?op=search&all=" + search)

        } else {
            console.log("shop")
            number = 0

            var info = { module: 'shop', function: 'list', data: number }
            ajaxForSearch(amigable("?"), info)
        }
    }//End if document
    console.log("Borrar datos");

    ///Aqui veremos como los datos ya han sido borrados
    var valoration = localStorage.removeItem('val');
    console.log("valoration= " + valoration);
    var type = localStorage.removeItem('tipo');
    console.log("type= " + type);
    // var car = localStorage.removeItem('sli');
    // console.log("car= " + car)
    var type_search = localStorage.removeItem('typ');
    console.log("type_search= " + type_search);
    var brand_search = localStorage.removeItem('bra');
    console.log("brand_search= " + brand_search);
    var name_search = localStorage.removeItem('pro');
    console.log("name_search= " + name_search);

}

////AQUI OBSERVAREMOS LOS DATOS QUE ENTRAN QUE ENTRAN
function entra() {
    console.log("AQUI ESTAN LOS QUE ENTRAN")
    var valoration = localStorage.getItem('val');
    console.log("valoration= " + valoration);
    var type = localStorage.getItem('tipo');
    console.log("type= " + type);
    var car = localStorage.getItem('sli');
    console.log("car= " + car);
    var type_search = localStorage.getItem('typ');
    console.log("type_search= " + type_search);
    var brand_search = localStorage.getItem('bra');
    console.log("brand_search= " + brand_search);
    var name_search = localStorage.getItem('pro');
    console.log("name_search= " + name_search);


}

/////FUNCION PARA IR DEL SHOP AL DETALIS Y PARA AUMENTAR LAS VISITAS
function click() {
    $(document).on('click', '.detail', function () {
        console.log("click");
        var cod_ref = this.getAttribute('id');
        var tipo = this.getAttribute('type');
        console.log(cod_ref);
        console.log(tipo);



        var info = { module: 'shop', function: 'detail', cod_ref: cod_ref, tipo: tipo }

        shop(amigable("?"), info)
            .then(function (data) {

                var data = JSON.parse(data)
                // $.ajax({
                //     type: "GET",
                //     dataType: 'json',
                //     url: "module/shop/controller/controller_shop.php?op=detail&cod_ref=" + cod_ref + "&type=" + tipo

                // }).done(function (data) {
                console.log("done");
                console.log(data);
                $("#container").empty();
                $("#container1").empty();
                $("#fil_empty").empty();
                $("#maps").empty();

                for (i = 0; i < 1; i++) {
                    $("#detail_products").append(

                        '<table>' +
                        "<button class='baddcart' id='" + data[i].cod_ref + "'>Add to cart</button></div></div>" +
                        "<button class='btn btn-default btn-lg like " + data[i].cod_ref + "' id='" + data[i].cod_ref + "'>❤</button>" +

                        '<tr>' +
                        '<td rowspan="5"><img src= ' + data[i].route + '></td>' +
                        '<td><strong>Nombre:  </strong>' + data[i].nombre + '</td>' +

                        '</tr>' +

                        '<tr>' +
                        '<td><strong>Tipo de oro:  </strong>' + data[i].oro + '</td>' +
                        '</tr>' +

                        '<tr>' +
                        '<td>' + data[i].nombre + '</td>' +
                        '</tr>' +

                        '<tr>' +
                        '<td>' + data[i].nombre + '</td>' +
                        '</tr>' +

                        '<tr>' +
                        '<td>' + data[i].nombre + '</td>' +
                        '</tr>' +

                        '</table>'

                    )
                }
                for (i = 1; i < 4; i++) {
                    if (data[i] !== undefined) {
                        //Cuando solo quede un producto avisara al cliente de que este producto es el ultimo
                        //Ademas avisara y mostrara que el articulo esta en oferta
                        $("#detail_products").append(
                            '<img src= ' + data[i].route + ' class="detail" id=' + data[i].cod_ref + ' type=' + data[i].tipo + '>'
                        )
                    } else {
                        i = 4;
                    }
                }

                paint_likes()

            })
        $("#detail_products").empty();
    })

}

////FUNCTION PARA FILTRAR PRODUCTOS A VOLUNTAD DEL USUARIO
function filter() {
    var checks = "";
    var order = "";
    var click_an = 0;
    var click_pul = 0;
    var click_rel = 0;
    var click_circ = 0;
    var click_cuad = 0;
    var click_sport = 0;
    var click_abi = 0;
    var click_di = 0;
    var click_za = 0;
    var click_ru = 0;
    var click_ros = 0;
    var click_blan = 0;
    var click_pur = 0;
    var click_like = 0;

    $('#anillo').click(function () {
        console.log("click_an= " + click_an)

        if ((click_an % 2) == 0) {
            console.log("click_an para filtrar")
            click_an = click_an + 1
            if (checks === "") {
                console.log("cadena vacia")
                checks = "where tipo = 'anillo'" + checks;
            } else {
                console.log("cadena escrita")
                checks = checks + " OR tipo = 'anillo'";
                console.log(anillo);
            }
            click_filter(checks, order);

        } else {
            console.log("click_an para desfiltrar")
            click_an = click_an + 1
            anillo = '';
            checks = checks.replace("tipo = 'anillo' OR ", "");
            checks = checks.replace(" OR tipo = 'anillo'", "");
            checks = checks.replace("where tipo = 'anillo'", "");
            click_filter(checks, order);
        }
        console.log("click_an= " + click_an)
    });

    $('#pulsera').click(function () {
        console.log("click_pul= " + click_pul)

        if ((click_pul % 2) == 0) {
            console.log("click_pul para filtrar")
            click_pul = click_pul + 1
            if (checks === "") {
                console.log("cadena vacia")
                checks = "where tipo = 'pulsera'" + checks;

            } else {
                console.log("cadena escrita")
                checks = checks + " OR tipo = 'pulsera'";

            }
            click_filter(checks, order);

        } else {
            console.log("click_pul para desfiltrar")
            click_pul = click_pul + 1
            checks = checks.replace("tipo = 'pulsera' OR ", "");
            checks = checks.replace(" OR tipo = 'pulsera'", "");
            checks = checks.replace("where tipo = 'pulsera'", "");
            click_filter(checks, order);

        }
        console.log("click_pul= " + click_pul)

    });
    $('#reloj').click(function () {
        console.log("click_rel= " + click_rel)

        if ((click_rel % 2) == 0) {
            console.log("click_rel para filtrar")
            click_rel = click_rel + 1
            if (checks === "") {
                console.log("cadena vacia")
                checks = "where tipo = 'reloj'" + checks;

            } else {
                console.log("cadena escrita")
                checks = checks + " OR tipo = 'reloj'";

            }
            click_filter(checks, order);

        } else {
            console.log("click_rel para desfiltrar")
            click_rel = click_rel + 1
            checks = checks.replace("tipo = 'reloj' OR ", "");
            checks = checks.replace(" OR tipo = 'reloj'", "");
            checks = checks.replace("where tipo = 'reloj'", "");
            click_filter(checks, order);

        }
        console.log("click_rel= " + click_rel)

    });

    $('#circular').click(function () {
        console.log("click_circ= " + click_circ)

        if ((click_circ % 2) == 0) {
            console.log("click_circ para filtrar")
            click_circ = click_circ + 1
            if (checks === "") {
                console.log("cadena vacia")
                checks = "where forma = 'circular'" + checks;

            } else {
                console.log("cadena escrita")
                checks = checks + " OR forma = 'circular'";

            }
            click_filter(checks, order);

        } else {
            console.log("click_circ para desfiltrar")
            click_circ = click_circ + 1
            checks = checks.replace("forma = 'circular' OR ", "");
            checks = checks.replace(" OR forma = 'circular'", "");
            checks = checks.replace("where forma = 'circular'", "");
            click_filter(checks, order);

        }
        console.log("click_circ= " + click_circ)

    });
    $('#cuadrada').click(function () {
        console.log("click_cuad= " + click_cuad)

        if ((click_cuad % 2) == 0) {
            console.log("click_cuad para filtrar")
            click_cuad = click_cuad + 1
            if (checks === "") {
                console.log("cadena vacia")
                checks = "where forma = 'cuadrada'" + checks;

            } else {
                console.log("cadena escrita")
                checks = checks + " OR forma = 'cuadrada'";

            }
            click_filter(checks, order);

        } else {
            console.log("click_cuad para desfiltrar")
            click_cuad = click_cuad + 1
            checks = checks.replace("forma = 'cuadrada' OR ", "");
            checks = checks.replace(" OR forma = 'cuadrada'", "");
            checks = checks.replace("where forma = 'cuadrada'", "");
            click_filter(checks, order);

        }
        console.log("click_cuad= " + click_cuad)

    });
    $('#sport').click(function () {
        console.log("click_sport= " + click_sport)

        if ((click_sport % 2) == 0) {
            console.log("click_sport para filtrar")
            click_sport = click_sport + 1
            if (checks === "") {
                console.log("cadena vacia")
                checks = "where forma = 'sport'" + checks;

            } else {
                console.log("cadena escrita")
                checks = checks + " OR forma = 'sport'";

            }
            click_filter(checks, order);

        } else {
            console.log("click_sport para desfiltrar")
            click_sport = click_sport + 1
            checks = checks.replace("forma = 'sport' OR ", "");
            checks = checks.replace(" OR forma = 'sport'", "");
            checks = checks.replace("where forma = 'sport'", "");
            click_filter(checks, order);

        }
        console.log("click_sport= " + click_sport)

    });
    $('#abierta').click(function () {
        console.log("click_abi= " + click_abi)

        if ((click_abi % 2) == 0) {
            console.log("click_abi para filtrar")
            click_abi = click_abi + 1
            if (checks === "") {
                console.log("cadena vacia")
                checks = "where forma = 'abierta'" + checks;

            } else {
                console.log("cadena escrita")
                checks = checks + " OR forma = 'abierta'";

            }
            click_filter(checks, order);

        } else {
            console.log("click_abi para desfiltrar")
            click_abi = click_abi + 1
            checks = checks.replace("forma = 'abierta' OR ", "");
            checks = checks.replace(" OR forma = 'abierta'", "");
            checks = checks.replace("where forma = 'abierta'", "");
            click_filter(checks, order);

        }
        console.log("click_abi= " + click_abi)

    });

    $('#diamante').click(function () {
        console.log("click_di= " + click_di)

        if ((click_di % 2) == 0) {
            console.log("click_di para filtrar")
            click_di = click_di + 1
            if (checks === "") {
                console.log("cadena vacia")
                checks = "where gema like '%diamante%'" + checks;

            } else {
                console.log("cadena escrita")
                checks = checks + " OR gema like '%diamante%'";

            }
            click_filter(checks, order);

        } else {
            console.log("click_di para desfiltrar")
            click_di = click_di + 1
            checks = checks.replace("gema like '%diamante%' OR ", "");
            checks = checks.replace(" OR gema like '%diamante%'", "");
            checks = checks.replace("where gema like '%diamante%'", "");
            click_filter(checks, order);

        }
        console.log("click_di= " + click_di)

    });
    $('#zafiro').click(function () {
        console.log("click_za= " + click_za)

        if ((click_za % 2) == 0) {
            console.log("click_za para filtrar")
            click_za = click_za + 1
            if (checks === "") {
                console.log("cadena vacia")
                checks = "where gema like '%zafiro%'" + checks;

            } else {
                console.log("cadena escrita")
                checks = checks + " OR gema like '%zafiro%'";

            }
            click_filter(checks, order);

        } else {
            console.log("click_za para desfiltrar")
            click_za = click_za + 1
            checks = checks.replace("gema like '%zafiro%' OR ", "");
            checks = checks.replace(" OR gema like '%zafiro%'", "");
            checks = checks.replace("where gema like '%zafiro%'", "");
            click_filter(checks, order);

        }
        console.log("click_za= " + click_za)

    });
    $('#rubi').click(function () {
        console.log("click_ru= " + click_ru)

        if ((click_ru % 2) == 0) {
            console.log("click_ru para filtrar")
            click_ru = click_ru + 1
            if (checks === "") {
                console.log("cadena vacia")
                checks = "where gema like '%rubi%'" + checks;

            } else {
                console.log("cadena escrita")
                checks = checks + " OR gema like '%rubi%'";

            }
            click_filter(checks, order);

        } else {
            console.log("click_ru para desfiltrar")
            click_ru = click_ru + 1
            checks = checks.replace("gema like '%rubi%' OR ", "");
            checks = checks.replace(" OR gema like '%rubi%'", "");
            checks = checks.replace("where gema like '%rubi%'", "");
            click_filter(checks, order);

        }
        console.log("click_ru= " + click_ru)

    });

    $('#rosado').click(function () {
        console.log("click_ros= " + click_ros)

        if ((click_ros % 2) == 0) {
            console.log("click_ros para filtrar")
            click_ros = click_ros + 1
            if (checks === "") {
                console.log("cadena vacia")
                checks = "where oro like '%rosado%'" + checks;

            } else {
                console.log("cadena escrita")
                checks = checks + " OR oro like '%rosado%'";

            }
            click_filter(checks, order);

        } else {
            console.log("click_ros para desfiltrar")
            click_ros = click_ros + 1
            checks = checks.replace("oro like '%rosado%' OR ", "");
            checks = checks.replace(" OR oro like '%rosado%'", "");
            checks = checks.replace("where oro like '%rosado%'", "");
            click_filter(checks, order);

        }
        console.log("click_ros= " + click_ros)

    });
    $('#blanco').click(function () {
        console.log("click_blan= " + click_blan)

        if ((click_blan % 2) == 0) {
            console.log("click_blan para filtrar")
            click_blan = click_blan + 1
            if (checks === "") {
                console.log("cadena vacia")
                checks = "where oro like '%blanco%'" + checks;

            } else {
                console.log("cadena escrita")
                checks = checks + " OR oro like '%blanco%'";

            }
            click_filter(checks, order);

        } else {
            console.log("click_blan para desfiltrar")
            click_blan = click_blan + 1
            checks = checks.replace("oro like '%blanco%' OR ", "");
            checks = checks.replace(" OR oro like '%blanco%'", "");
            checks = checks.replace("where oro like '%blanco%'", "");
            click_filter(checks, order);

        }
        console.log("click_blan= " + click_blan)
    });
    $('#puro').click(function () {
        console.log("click_pur= " + click_pur)

        if ((click_pur % 2) == 0) {
            console.log("click_pur para filtrar")
            click_pur = click_pur + 1
            if (checks === "") {
                console.log("cadena vacia")
                checks = "where oro like '%puro%'" + checks;
            } else {
                console.log("cadena escrita")
                checks = checks + " OR oro like '%puro%'";

            }
            click_filter(checks, order);

        } else {
            console.log("click_pur para desfiltrar")
            click_pur = click_pur + 1
            checks = checks.replace("oro like '%puro%' OR ", "");
            checks = checks.replace(" OR oro like '%puro%'", "");
            checks = checks.replace("where oro like '%puro%'", "");
            click_filter(checks, order);

        }
        console.log("click_pur= " + click_pur)

    });

    ///entrara cuando hagamos click en un filtro para ver los favoritos
    $('#favorite').click(function () {
        console.log("click_like= " + click_like)

        //le decimos a la promesa general que obtenga el nombre del usuario logueado
        likes('module/shop/controller/controller_shop.php?op=user')
            .then(function (name) {
                // console.log(name)

                //si hay algun usuario conectado entra
                if (name !== "") {
                    console.log('entra if')
                    console.log(name)

                    ///si es la primera vez o alguna  vez par ya que el contador empieza en 0 fitrara
                    if ((click_like % 2) == 0) {
                        console.log("click_like para filtrar")
                        click_like = click_like + 1

                        ///comprobara si la cadena esta vacia o llena
                        if (checks === "") {
                            console.log("cadena vacia")
                            checks = "Where cod_ref in (SELECT cod_ref from likes where user_name='" + name + "')";
                        } else {
                            console.log("cadena escrita")
                            checks = checks + " AND cod_ref in (SELECT cod_ref from likes where user_name='" + name + "')";

                        }
                        click_filter(checks, order);

                        ///entrara si esta clickando para desfiltrar y borrara la cadena
                    } else {
                        console.log("click_like para desfiltrar")
                        click_like = click_like + 1
                        checks = checks.replace(" AND cod_ref in (SELECT cod_ref from likes where user_name='" + name + "')", "");
                        checks = checks.replace("Where cod_ref in (SELECT cod_ref from likes where user_name='" + name + "')", "");
                        click_filter(checks, order);

                    }

                    console.log("click_like= " + click_like)

                    //si no esta logueado lo mandara a loguearse
                } else {
                    redirect_login();
                }
            })

    })


    $("#order").on("change", function () {
        console.log("order")
        var option = document.getElementById('order').value;
        console.log("options= " + option)
        if (option == "val_desc") {
            order = "ORDER BY val DESC";
        } else if (option == "stock_asc") {
            order = "ORDER BY unidades ASC";
        } else if (option == "stock_desc") {
            order = "ORDER BY unidades DESC";
        } else {
            order = "";
        }
        click_filter(checks, order);

    });
    // console.log(checks)
    // console.log(order)





}

///funcion para activar los filtros
function click_filter(checks, order) {

    console.log("entra click_filter")
    console.log(checks)
    console.log(order)

    $("#list_products").empty();

    //Si se los paso vacio en el bll no los detecta y me da error asi que:
    //Cuando este vacio la condicion le ponemos una condicion general
    if (checks == "") {
        checks = "WHERE 1=1"
    }
    //Cuando este vacio la condicion le ponemos un order by general

    if (order == "") {
        order = "ORDER BY views DESC"
    }

    var info = { module: 'shop', function: 'filter', checks: checks, order: order }
    ajaxForSearch(amigable("?"), info)


}

////FUNCTION PARA ENSEÑAR EL MAPA
function initMap() {

    var ray = [];

    // var
    // jewelry_stores = [
    //   [estacio],
    //   ['Cartier-Madrid'],
    //   ['Vintage Watches Valencia'],
    // ];
    // console.log(jewelry_stores)
    var map = new google.maps.Map(document.getElementById('maps'), {
        zoom: 6,
        center: new google.maps.LatLng(40.05, -3.695447),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var info = { module: 'shop', function: 'map' }

    shop(amigable("?"), info)
        .then(function (data) {

            data = JSON.parse(data);
            console.log(data);
            for (row in data) {


                var newMarker = new google.maps.Marker({
                    position: new google.maps.LatLng(
                        data[row].lat,
                        data[row].lng),
                    map: map,
                    title:
                        data[row].tienda
                });

                google.maps.event.addListener(newMarker, 'click', (function (newMarker, row) {
                    return function () {
                        var lat = data[row].lat
                        var lng = data[row].lng
                        $.ajax({
                            type: "GET",
                            dataType: 'json',
                            url: "module/shop/controller/controller_shop.php?op=desc_maps&lat=" + lat + "&lng=" + lng
                        }).done(function (data) {
                            console.log(data);
                            var descripcion = ""
                            for (row in data) {
                                descripcion = descripcion + data[row].descripcion
                            }
                            console.log(descripcion)
                            infowindow.setContent(
                                descripcion);
                            infowindow.open(map, newMarker);
                        })
                    }
                })(newMarker, row));
                ray.push(newMarker);
            }
        })
}


////FUNCTION PARA CUANDO CLICQUES EN EL MAPA ESTE SE VUELVA GRANDE
function click_map() {
    do {
        var count = 0
        $(document).on('click', '#maps', function () {
            $(document).on('click', '.detail', function () {
                count = 1
            })
            console.log("mapa");
            $("#container").empty();
            $("#container1").empty();
            $("#fil").empty();

            $("#maps").append(
                '<a id="fle" href=index.php?page=controller_shop&op=list><img id="flecha" src=view/images/flecha.png></a>'
            )
            $("#maps").css({ "width": "80%", "height": "40%" })
            count = 1

        })
    } while (count == 1);
}

function pagination() {


    // var info = { module: 'shop', function: 'detail', cod_ref: cod_ref, tipo: tipo }

    //     shop(amigable("?"), info)
    //         .then(function (data) {



    var info = { module: 'shop', function: 'count_pords' }

    shop(amigable("?"), info)
        .then(function (data) {

            data = JSON.parse(data)
            console.log(data)
            console.log(data[0].total)
            var number_products = data[0].total
            pages = number_products / 3
            console.log(pages)
            $('#pagination').bootpag({
                total: pages,
                page: 1,
                maxVisible: 3
            }).on("page", function (event, num) {
                console.log(num);
                number = 3 * (num - 1)

                $('#list_products').empty();


                var info = { module: 'shop', function: 'list', data: number }
                ajaxForSearch(amigable("?"), info)

                // ajaxForSearch("module/shop/controller/controller_shop.php?op=all&number=" + number)

            });//end on
        });//enddone


}

//FUNCION QUE REDIRECCIONA AL LOGIN
function redirect_login() {
    var url = "index.php?page=controller_login&op=list"
    $(window).attr('location', url);

}

var likes = function (url, data) { //function/promise GENERAL 

    // console.log(data)

    return new Promise(function (resolve) {
        // console.log(url)
        // console.log(data)
        $.ajax({
            type: "POST",
            url: url,
            data: data
        })
            .done(function (data) {
                resolve(data);
            })
    })
};

////FUNCION QUE HACE TODAS LAS ACCIONES DEL LIKE
function like() {
    //Entra cuando le das a un like
    $(document).on('click', '.btn', function () {
        // console.log('like');

        //cogemos el id del profucto al que le ha dado favorito
        var cod_ref = $(this).attr('id');
        // console.log(cod_ref)

        //nos devuelve el nombre del usuario en este momento
        likes('module/shop/controller/controller_shop.php?op=user')
            .then(function (name) {
                // console.log(name)

                //si hay algun usuario conectado entra
                if (name !== "") {
                    // console.log('entra if')

                    // console.log(cod_ref)


                    //cambiamos de color el corazon
                    $('.' + cod_ref + '').toggleClass('btn-danger');

                    //le decimos que lo inserte en la tabla de favoritos
                    likes('module/shop/controller/controller_shop.php?op=favorite', cod_ref)
                        .then(function (data) {
                            // console.log(data)

                            //si ya esta en latabla entrará
                            if (data == "ya es favorito") {
                                // console.log("entra if")

                                ///lo borrará
                                likes('module/shop/controller/controller_shop.php?op=del_favorite', cod_ref)
                                    .then(function (data) {
                                        // console.log(data)

                                    })
                            }
                        })

                } else {
                    redirect_login();
                }
            })

    })

}

function paint_likes() {

    ///observa cuales son los favoritos del usuario conectado ahora mismo
    likes('module/shop/controller/controller_shop.php?op=show_likes')
        .then(function (cod_fav) {
            //  console.log(cod_fav)

            //convierte los datos en array
            var data_all = JSON.parse(cod_fav);
            console.log(data_all)

            ///para cada uno cambia el color (a rojo ya que en el ajaxforsearch esta puesto blanco)
            for (row in data_all) {
                $('.' + data_all[row].cod_ref + '').toggleClass('btn-danger');
            }


        })

}

//funcion para saber que productos quieres
function cart() {

    var prods = [];

    ///entrara cuabdo hagas click en añadir al carrito
    $(document).on('click', '.baddcart', function () {
        // console.log("btnaddcart")

        //cogemos la id de ese producto 
        var id = this.getAttribute('id');
        console.log(id)

        ///vemos el $_SESION del user_name
        likes('module/shop/controller/controller_shop.php?op=user')
            .then(function (name) {

                // console.log(name)

                //Si el nombre no esta vacio es decir si esta logueado
                if (name !== "") {

                    //guardamos en una variable el codigo del producto y el nombre del usuario
                    //ya que como el nombre del usuario no se puede repetir
                    //es mi clave primaria de la tabla usuarios y por lo tanto su id
                    var info = { cod_ref: id, id: name };
                    console.log(info)

                    // y guardamos esta informacion en la tabla  cart
                    likes('module/shop/controller/controller_shop.php?op=insert_cart', info)
                        .then(function (info) {

                            //observamos que nos devuelva que todo esta correcto
                            console.log(info)
                        })

                    /// si no esta logueado
                } else {

                    ///cogemos la ip del usuario
                    $.getJSON('https://api.ipify.org?format=json', function (data) {
                        console.log(data.ip);

                        ///y guardamos en la tabla la informacion del codigo de referencia del producto
                        // y la ip del usuario
                        var info = { cod_ref: id, id: data.ip };
                        console.log(info)

                        // y guardamos esta informacion en la tabla  cart
                        likes('module/shop/controller/controller_shop.php?op=insert_cart', info)
                            .then(function (info) {

                                //observamos que nos devuelva que todo esta correcto
                                console.log(info)
                            })
                    })

                }

                //añade a una array el id del producto
                prods.push(id)
                // console.log(prods)


                // Guardo el objeto como un string en localstorage
                localStorage.setItem('prods', JSON.stringify(prods));

                //lo recogemos
                var guardado = localStorage.getItem('prods');

                //y si necesitamos la string recogemos los datos parseados
                // console.log(JSON.parse(guardado));

                var storage = { prods: guardado };


                ///le decimos que los guarde tambien en $session
                likes('module/shop/controller/controller_shop.php?op=cart', storage)
                    .then(function () {
                    })

            })
    })


}
