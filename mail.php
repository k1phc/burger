<?php
    $name = $_POST['user-name'];
    $phone = $_POST['phone'];
    $street = $_POST['street'];
    $home = $_POST['house'];
    $housing = $_POST['block'];
    $apartment = $_POST['flat'];
    $floor = $_POST['floor'];
    $comment = $_POST['comment'];
    $money = $_POST['payment'];
    $disturb = $_POST['dont-disturb'];
    $disturb = isset($disturb) ? 'НЕТ' : 'ДА';
    $money = isset($disturb) ? 'Потребуется сдача' : 'Оплата по карте';
    $mail_message = '
        <html>
            <head>
                <title>Заявка</title>
            </head>
            <body>
                <h2>Заказ</h2>
                <ul>
                    <li>Имя: ' . $name . '</li>
                    <li>Телефон: ' . $phone . '</li>
                    <li>Улица: ' . $street . '</li>
                    <li>Дом: ' . $home . '</li>
                    <li>Корпус: ' . $housing . '</li>
                    <li>Квартира: ' . $apartment . '</li>
                    <li>Этаж: ' . $floor . '</li>
                    <li>Комментарий: ' . $comment . '</li>
                    <li>Оплата: ' . $money . '</li>
                    <li>Перезвонить: ' . $disturb . '</li>                   
                </ul>
            </body>
        </html>    
        ';
    $headers = "From: Администратор сайта <admin@loftschool.com>\r\n".
        "MIME-Version: 1.0" . "\r\n" .
        "Content-type: text/html; charset=UTF-8" . "\r\n";
    $mail = mail('abigor_89@mail.ru', 'Заказ', $mail_message, $headers);
    $data = [];
    if ($mail){
        $data['status'] = "OK";
        $data['mes'] = "Ваш заказ принят! Ваша вкусная еда скоро будет у вас!";
    } else{
        $data['status'] = "No";
        $data['mes'] = 'На сервере произошла ошибка, попробуйте сделать заказ через некоторое время! Приносим свои извинения!';
    }
    echo json_encode($data)
?>