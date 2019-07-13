<?php
    $ano = $_GET["ano"];
    $arquivo = fopen('violencia-domestica-df.csv', 'r');
    $i = 0;
    $d = fgetcsv($arquivo);
    //variáveis


    


    foreach($d as $d) { 
        if($d != $ano)
            $i++;
        else
            break;
    }
    $d = fgetcsv($arquivo);





    while($d) {
        echo " Local: $d[0] , ocorrência no ano $ano: $d[$i] / <br>";
        $d = fgetcsv($arquivo); 
    }
    fclose($arquivo);
?>