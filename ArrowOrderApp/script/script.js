//================================================================
//                    REMOVABLE INSTRUCTIONS
//================================================================

$('.login').css('display','none');

//================================================================
//                    LOG IN LISTENERS
//================================================================

setChacheInfo();
//Добавляет входные данные из хранилища
$('.login form input[type="button"]').on('click', loginValidationLabel);
//Обработчик правильности ввода; Выводит надписи
$('.login form input[type="button"]').on('click', loginIfValidInput);
//Перекидывает на главную страницу если данные корректны

//================================================================
//                    MAIN PAGE LISTENERS
//================================================================
var scene = document.getElementById('scene');
var parallax = new Parallax(scene);
