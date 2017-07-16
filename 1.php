<?php
    echo '<?xml version="1.0" encoding="UTF-8"?>';
    echo '<Response>';
    echo '<Gather action="http://kunalsachdeva.azurewebsites.net/twilio/1.php" method="GET" numDigits="1" timeout="100">';
    $digits = $_REQUEST['Digits'];
    if( $digits == 1){
        echo '<Play>https://ia802604.us.archive.org/6/items/pride_prejudice_krs_librivox/pride_and_prejudice_01_austen_64kb.mp3</Play>';
    }
    else if( $digits == 2){
        echo '<Play>https://lifekeypad.com/repo/gallery/p_10/LOfbtme.mp3</Play>';
    }
    else if( $digits == 3){
        echo '<Play>http://kunalsachdeva.azurewebsites.net/twilio/s.mp3</Play>';
    }
    else{
        echo '<Say>Sorry, your response was invalid.</Say>';
        echo '<Redirect>handle-incoming-call.xml</Redirect>';
    }
    echo '</Gather>';
    echo '</Response>';
?>