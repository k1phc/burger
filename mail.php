<?php
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['tel'])&&$_POST['tel']!="")){ 
        $to = 'abigor_89@mail.ru'; 
        $subject = 'Заказ'; 
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['tel'].'</p>   
                        <p>Улица: '.$_POST['street'].'</p>                        
                        <p>Дом: '.$_POST['house'].'</p>                        
                        <p>Корпус: '.$_POST['block'].'</p>                        
                        <p>Квартира: '.$_POST['flat'].'</p>  
                        <p>Этаж: '.$_POST['stage'].'</p>  
                        <p>Комментарий: '.$_POST['comment'].'</p>  
                        <p>Нал: '.$_POST['cash'].'</p>  
                        <p>Карта: '.$_POST['card'].'</p>  
                        <p>Не перезванивать: '.$_POST['noCall'].'</p>                           
                    </body>
                </html>'; 
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
        $headers .= "From: Отправитель \r\n"; 
        mail($to, $subject, $message, $headers); 
        echo 'Приветствуем, '.$_POST['name'].'! Ваша заявка принята. Менеджер свяжется с вами в ближайшее время: ';
}
else {
    echo 'Данные не получены.';
 }
?>