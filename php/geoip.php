<?php
    $data = file_get_contents('http://www.geoplugin.net/json.gp?ip');
    echo ($data);

    file_put_contents('../js/data.json', $data);
    
    echo '<br>';
    echo '<br>';
    echo '<a href="../js/data.json"><button>Json</button></a>';
    echo '<br>';
    echo '<br>';
    echo '<a href="../index.html"><button>Inicio</button></a>';
?>